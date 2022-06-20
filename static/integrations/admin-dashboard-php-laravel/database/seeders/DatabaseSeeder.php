<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Role::create([
            'name' => 'admin',
        ]);

        \App\Models\Role::create([
            'name' => 'user',
        ]);

        \App\Models\User::create([
            'name' => 'admin',
            'email' => 'admin@mdbootstrap.com',
            'avatar' => 'https://mdbootstrap.com/img/new/avatars/1.jpg',
            'password' => Hash::make('mdbootstrap'),
            'role_id' => 1
        ]);

        \App\Models\User::factory(5)->create();
        \App\Models\TrafficData::factory(5)->create();
    }
}
