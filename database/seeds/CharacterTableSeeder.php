<?php

use App\Character;
use Illuminate\Database\Seeder;

use Faker\Factory as Faker;

class CharacterTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        $char_params = [
            'name'  => $faker->name,
            'stock' => 'Human',
            'class' => 'Fighter',
            'will'  => $faker->numberBetween(2, 5),
            'health'  => $faker->numberBetween(2, 5),
            'nature'  => $faker->numberBetween(2, 5),
            'max_nature' => 5,
            'resources'  => $faker->numberBetween(2, 5),
            'circles'  => $faker->numberBetween(2, 5),
            'level'   => $faker->numberBetween(1, 10),
            'extras' => [
                'parents' => $faker->name,
                'friend'  => $faker->name,
                'mentor'  => $faker->name,
                'enemy'   => $faker->name,
                'raiment' => $faker->word,
            ],
        ];

        Character::create($char_params);
    }
}
