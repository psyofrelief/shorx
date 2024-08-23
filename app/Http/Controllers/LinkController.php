<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Link;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class LinkController extends Controller
{
    public function index()
    {
        $user = User::find(Auth::id());
        return inertia("Link/Index", [
            "links" => $user->links()->latest()->paginate(6),
        ]);
    }

    public function create()
    {
        return inertia("Link/Create");
    }

    public function store(Request $request)
    {
        $request->validate([
            "title" => "nullable|string",
            "original_link" => "required|url",
            "short_code" => "nullable|string|unique:links,short_code",
        ]);

        $title = $request->input("title");
        $originalLink = $request->input("original_link");
        $customCode = $request->input("short_code");
        $user = User::find(Auth::id());

        if ($customCode) {
            // Check if the custom code already exists
            $existingLink = Link::where("short_code", $customCode)->first();
            if ($existingLink) {
                // Redirect if code exists with link data
                $request
                    ->session()
                    ->flash("message", "Link created successfully!");
                $request->session()->flash("link", $existingLink);
                return redirect()->route("link.create");
            }

            // Creating a new link entry
            $link = new Link([
                "title" => $title,
                "original_link" => $originalLink,
                "short_code" => $customCode,
                "clicks" => 1,
                "user_id" => Auth::id(),
                "qr_link" => $this->generateQRCode($originalLink),
            ]);

            $link->save();

            $request->session()->flash("message", "Link created successfully!");
            $request->session()->flash("link", $link);

            // Return to links index with newly created link
            return inertia("Link/Index", [
                "links" => $user->links()->paginate(6),
            ]);
        }

        // No custom code provided, handle as a guest link
        $existingLink = Link::where("original_link", $originalLink)
            ->whereNull("user_id")
            ->first();

        if ($existingLink) {
            // If the link exists, redirect to create with link data
            // Flash a message to the session
            $request->session()->flash("message", "Link created successfully!");
            $request->session()->flash("link", $existingLink); // Pass the short code or any other link details

            return redirect()->route("home");
        }

        // Create a new link for guest without custom code
        $link = new Link([
            "original_link" => $originalLink,
            "title" => $title,
            "short_code" => $this->generateUniqueCode(),
            "qr_link" => $this->generateQRCode($originalLink),
            "user_id" => Auth::id(),
        ]);

        $link->save();

        $request->session()->flash("message", "Link created successfully!");
        $request->session()->flash("link", $link);
        return inertia("Link/Index", [
            "links" => $user->links()->paginate(3),
        ]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            "title" => "required|string",
            "original_link" => "required|url",
            "short_code" => [
                "nullable",
                "string",
                "required",
                "alpha_num",
                Rule::unique("links")->ignore($id),
            ],
        ]);

        // Retrieve and validate link ownership
        $link = Link::findOrFail($id);
        $title = $request->input("title");
        $shortCode = $request->input("short_code");
        $originalLink = $request->input("original_link");
        $user = User::find(Auth::id());

        // Ensure custom code uniqueness excluding current link
        if (
            $shortCode &&
            Link::where("short_code", $shortCode)
                ->where("id", "!=", $id)
                ->exists()
        ) {
            return response()->json(
                ["error" => "Custom code is already in use by another link."],
                422
            );
        }

        // Update and save the link details
        $link->update([
            "title" => $title,
            "original_link" => $originalLink,
            "short_code" => $shortCode ?? $link->short_code,
        ]);

        // Redirect to links index with updated link list
        return redirect()
            ->route("links.index")
            ->with(["links" => $user->links()->paginate(3)]);
    }

    private function generateQRCode($url)
    {
        return "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" .
            urlencode($url);
    }
    // Function to generate a unique short code
    private function generateUniqueCode()
    {
        do {
            // Generate a random string of length 6
            $code = substr(md5(uniqid(rand(), true)), 0, 6);
        } while (Link::where("short_code", $code)->exists()); // Ensure it's unique

        return $code;
    }

    public function redirectToOriginal($shortCode)
    {
        // Find the URL entry by short code
        $link = Link::where("short_code", $shortCode)->firstOrFail();
        $link->increment("clicks");

        // Redirect to the original URL
        return redirect()->away($link->original_link);
    }

    public function destroy($id)
    {
        $user = User::find(Auth::id());
        $link = $user->links->where("id", $id)->first();

        if (!$link) {
            return response()->json(
                ["error" => "Link not found or not authorized"],
                404
            );
        }

        $link->delete();

        return redirect()
            ->route("links.index")
            ->with([
                "links" => $user->links,
            ]);
    }
}
