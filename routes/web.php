<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\LinkController;
use Illuminate\Support\Facades\Route;

Route::get("/", [HomeController::class, "index"])->name("home");

Route::post("/", [HomeController::class, "store"])
    ->name("home")
    ->middleware("guest");

Route::middleware("auth")->group(function () {
    Route::get("/links", [LinkController::class, "index"])->name("links.index");

    Route::post("/links", [LinkController::class, "store"]);

    Route::get("/create", [LinkController::class, "create"])->name(
        "link.create"
    );

    Route::put("/links/{id}", [LinkController::class, "update"]);

    Route::delete("/links/{id}", [LinkController::class, "destroy"]);
});

require __DIR__ . "/auth.php";

Route::get("/{shortCode}", [LinkController::class, "redirectToOriginal"]);
