<?php

use Faker\Generator as Faker;

$factory->define(App\Division::class, function (Faker $faker) {
    return [
        'name' => $faker->words(rand(2,5), true),
        'description' => $faker->paragraph(5, true),
    ];
});
