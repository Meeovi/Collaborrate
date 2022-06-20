<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class ProfileController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Update the user profile data in the storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return mixed
     */
    public function updateProfile(Request $request, $id)
    {

        $request->validate([
            'username' => 'required|string|max:255',
            'avatar' => 'required|string|max:255|url',
        ]);

        $username = $request->input('username');
        $avatar = $request->input('avatar');

        $user = User::findOrFail($id);
        $user->name = $username;
        $user->avatar = $avatar;

        $user->save();

        return back();
    }

    /**
     * Update the user password in the storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return mixed
     */
    public function updatePassword(Request $request, $id)
    {

        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required|min:8',
            'new_password_confirmation' => 'required|same:new_password',
        ]);

        $data = $request->all();

        $user = User::findOrFail($id);

        if (!Hash::check($data['current_password'], $user->password)) {
            return back()->with('error', 'You have entered wrong password');
        } else {
            $user->password = Hash::make($data['new_password']);
            $user->save();

            return back();
        }
    }

    /**
     * Show the user profile.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = Auth::user();
        return view('user-profile', ['user' => $user]);
    }
}
