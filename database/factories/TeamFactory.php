<?php

use Faker\Generator as Faker;

$factory->define(App\Team::class, function (Faker $faker) {
    return [
        'name' => $faker->words(rand(1,4), true),
        'description' => $faker->paragraph(4, true),
    ];
});
