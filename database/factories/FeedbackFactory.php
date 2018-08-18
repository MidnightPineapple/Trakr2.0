<?php

use Faker\Generator as Faker;

$factory->define(App\Feedback::class, function (Faker $faker) {
    return [
        'message' => $faker->paragraph(10, true),
    ];
});
