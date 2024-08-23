<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinksTable extends Migration
{
    public function up()
    {
        Schema::create("links", function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id")->nullable();
            $table->string("title")->nullable();
            $table->string("original_link");
            $table->string("short_code")->unique();
            $table
                ->string("qr_link")
                ->default(
                    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/in/faried-idris "
                );
            $table->bigInteger("clicks")->default(1);
            $table->timestamps();

            $table
                ->foreign("user_id")
                ->references("id")
                ->on("users")
                ->onDelete("cascade");
        });
    }

    public function down()
    {
        Schema::dropIfExists("links");
    }
}
