<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserRouteTest extends TestCase
{
    use RefreshDatabase;

    #[\PHPUnit\Framework\Attributes\Test]
    public function users_can_register()
    {
        $response = $this->post("/register", [
            "name" => "John Doe",
            "email" => "john@example.com",
            "password" => "password",
            "password_confirmation" => "password",
        ]);

        $response->assertRedirect("/login");
        $this->assertDatabaseHas("users", ["email" => "john@example.com"]);
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function users_can_log_in()
    {
        $user = User::factory()->create([
            "email" => "jane@example.com",
            "password" => bcrypt("password"),
        ]);

        $response = $this->post("/login", [
            "email" => "jane@example.com",
            "password" => "password",
        ]);

        $response->assertRedirect("/");
        $this->assertAuthenticatedAs($user);
    }
}
