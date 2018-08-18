<?php

use Faker\Generator as Faker;

$factory->define(App\Template::class, function (Faker $faker) {
    return [
        'name' => $faker->words(rand(1,5), true),
        'description' => $faker->paragraph(3, true),
        'data' => json_encode([ "type" => $faker->word, 'uuid' => $faker->uuid ]),
    ];
});
