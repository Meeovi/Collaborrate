<?php

use Illuminate\Support\Facades\Route;
// use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.auth');
})->middleware('guest')->name('/');

Route::get('/dashboard', [App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
Route::get('/performance/traffic', [App\Http\Controllers\DashboardController::class, 'getTrafficData']);

Route::post('/auth/register', [App\Http\Controllers\Auth\RegisterController::class, 'register'])->name('auth/register');
Route::post('/auth/login', [App\Http\Controllers\Auth\LoginController::class, 'login'])->name('auth/login');
Route::post('/auth/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('auth/logout');

Route::get('/user-profile', [App\Http\Controllers\ProfileController::class, 'index'])->name('user-profile');
Route::put('/profile/{id}', [App\Http\Controllers\ProfileController::class, 'updateProfile'])->name('profile');
Route::put('/password/{id}', [App\Http\Controllers\ProfileController::class, 'updatePassword'])->name('password');

Route::get('/user-management', [App\Http\Controllers\Admin\UsersController::class, 'index'])->name('user-management');
Route::get('/roles', [App\Http\Controllers\Admin\UsersController::class, 'getRoles']);
Route::get('/users', [App\Http\Controllers\Admin\UsersController::class, 'getUsers']);
Route::put('/users/{id}', [App\Http\Controllers\Admin\UsersController::class, 'update'])->name('user');
Route::delete('/users/{id}', [App\Http\Controllers\Admin\UsersController::class, 'destroy']);