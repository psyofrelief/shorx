<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Link;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Testing\Assert;
use Inertia\Testing\AssertableInertia;
use PHPUnit\Framework\Assert as FrameworkAssert;
use Tests\TestCase;

class LinkRouteTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the index route for links.
     *
     * @return void
     */
    public function test_links_index_route_returns_success()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $response = $this->get("/links");

        $response
            ->assertStatus(200)
            ->assertInertia(
                fn(AssertableInertia $page) => $page
                    ->component("Link/Index")
                    ->has("links")
            );
    }

    /**
     * Test the store route for creating a new link.
     *
     * @return void
     */
    public function test_links_store_route_creates_link()
    {
        $user = User::factory()->create();

        $this->actingAs($user);

        $response = $this->post("/links", [
            "title" => "Test Link",
            "original_link" => "https://www.example.com",
            "short_code" => "exmpl",
        ]);

        $response->assertStatus(200); // Assuming it redirects after creation
        $this->assertDatabaseHas("links", [
            "title" => "Test Link",
            "original_link" => "https://www.example.com",
            "short_code" => "exmpl",
        ]);
    }

    /**
     * Test the update route for updating an existing link.
     *
     * @return void
     */
    public function test_links_update_route_updates_link()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $link = Link::factory()->create(["user_id" => $user->id]);

        $response = $this->put("/links/$link->id", [
            "original_link" => "https://www.newexample.com",
            "short_code" => $link->short_code,
        ]);

        $response->assertStatus(302); // Assuming it redirects after update
        $response->assertSessionHasNoErrors();
        $this->assertDatabaseHas("links", [
            "id" => $link->id,
            "original_link" => "https://www.newexample.com",
        ]);
    }

    /**
     * Test the destroy route for deleting a link.
     *
     * @return void
     */
    public function test_links_destroy_route_deletes_link()
    {
        $user = User::factory()->create();
        $this->actingAs($user);

        $link = Link::factory()->create(["user_id" => $user->id]);

        $response = $this->delete("/links/{$link->id}");

        $response->assertStatus(302); // Assuming it redirects after deletion
        $this->assertDatabaseMissing("links", [
            "id" => $link->id,
        ]);
    }
}
