<?php

namespace Database\Factories;

use App\Models\Link;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class LinkFactory extends Factory
{
    protected $model = Link::class;

    public function definition()
    {
        return [
            "user_id" => $this->faker->boolean
                ? User::factory()->create()->id
                : null, // 50% chance of being null
            "original_link" => $this->faker->url,
            "short_code" => Str::random(6), // Generate a random 6 character string
            "created_at" => now(),
            "updated_at" => now(),
        ];
    }
}
