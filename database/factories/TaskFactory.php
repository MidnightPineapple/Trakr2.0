<?php

use Faker\Generator as Faker;

$factory->define(App\Task::class, function (Faker $faker) {
    return [
        'name' => $faker->words(rand(1,7), true),
        'description' => $faker->paragraph(6, true),
    ];
});
