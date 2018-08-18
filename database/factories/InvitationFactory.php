<?php

use Faker\Generator as Faker;

$factory->define(App\Invitation::class, function (Faker $faker) {
    return [
        'token' => $faker->unique()->md5,
    ];
});
