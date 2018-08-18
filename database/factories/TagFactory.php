<?php

use Faker\Generator as Faker;

$factory->define(App\Tag::class, function (Faker $faker) {
    return [
        'name' => $faker->words(rand(1,3), true),
        'description' => $faker->paragraph(4, true),
        'color' => $faker->hexColor,
    ];
});
