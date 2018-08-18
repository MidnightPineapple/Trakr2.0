<?php

use Faker\Generator as Faker;

$factory->define(App\Project::class, function (Faker $faker) {
    return [
        'name' => $faker->words(rand(4,9), true),
        'description' => $faker->paragraph(8, true),
        'completed_at' => $faker->dateTimeThisYear('now', null),        
    ];
});
