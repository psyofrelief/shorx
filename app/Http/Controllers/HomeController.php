<?php

namespace App\Http\Controllers;

use App\Models\Link;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function index()
    {
        return inertia("Home", [
            "canLogin" => Route::has("login"),
            "canRegister" => Route::has("register"),
            "user" => Auth::user(),
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            "original_link" => "required|url",
        ]);

        $originalLink = $request->input("original_link");
        $existingLink = Link::where("original_link", $originalLink)
            ->where("user_id", null)
            ->first();

        // If the link already exists, return the existing shortened link
        if ($existingLink) {
            $request->session()->flash("message", "Link created successfully!");
            $request->session()->flash("link", $existingLink);
            return inertia("Home");
        }

        $link = new Link();
        $link->original_link = $originalLink;
        $link->short_code = $this->generateUniqueCode();
        $link->user_id = null;

        $qrCodeUrl =
            "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" .
            urlencode($link->original_link);

        $link->qr_link = $qrCodeUrl;
        $link->save();

        $request->session()->flash("message", "Link created successfully!");
        $request->session()->flash("link", $link);
        return inertia("Home");
    }

    private function generateUniqueCode()
    {
        do {
            // Generate a random string of length 6
            $code = substr(md5(uniqid(rand(), true)), 0, 6);
        } while (Link::where("short_code", $code)->exists()); // Ensure it's unique

        return $code;
    }
}
