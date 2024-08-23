<?php

namespace Tests\Unit;

use App\Models\Link;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LinkTest extends TestCase
{
    use RefreshDatabase;

    #[\PHPUnit\Framework\Attributes\Test]
    public function test_it_belongs_to_a_user()
    {
        $user = User::factory()->create();
        $link = Link::factory()->create(["user_id" => $user->id]);

        $this->assertInstanceOf(User::class, $link->user);
        $this->assertTrue($user->is($user));
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_casts_attributes_correctly()
    {
        $link = Link::factory()->create([
            "created_at" => "2021-01-01 00:00:00",
        ]);

        $this->assertInstanceOf(
            \Illuminate\Support\Carbon::class,
            $link->created_at
        );
        $this->assertEquals(
            "2021-01-01 00:00:00",
            $link->created_at->toDateTimeString()
        );
    }
}
