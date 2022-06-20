<?php

namespace Database\Factories;

use App\Models\TrafficData;
use Illuminate\Database\Eloquent\Factories\Factory;

class TrafficDataFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = TrafficData::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'impressions' => rand(100, 600),
            'clicks' => rand(5, 100),
            'position' => rand(10, 50),
            'created_at' => date('Y-m-d', strtotime('now -' . $this->faker->unique()->numberBetween(1, 5) . ' days')),
        ];
    }
}
