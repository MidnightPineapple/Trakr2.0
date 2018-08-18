<?php

use Faker\Generator as Faker;

$factory->define(App\Entry::class, function (Faker $faker) {
    return [
        'completed_at' => $faker->dateTimeThisYear('now', null),
        'description' => $faker->sentence(rand(5,10), true),
    ];
});
