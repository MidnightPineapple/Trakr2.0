<?php

use Faker\Generator as Faker;

$factory->define(App\Role::class, function (Faker $faker) {
    return [
        'name' => $faker->words(rand(1,4), true),
        'description' => $faker->paragraph(2, true),
    ];
});
