<?php

use Faker\Generator as Faker;

$factory->define(App\Client::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'description' => $faker->paragraph(rand(3,5), true),
    ];
});
