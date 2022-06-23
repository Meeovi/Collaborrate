<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'admin']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('user-management');
    }

    /**
     * Update the user data in the storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255',
            'email' => 'required',
            'roleId' => 'required|integer|between:1,2'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'Error',
                'message' => $validator->errors(),
                'data' => null
            ], 400);
        }

        $username = $request->input('username');
        $email = $request->input('email');
        $role_id = $request->input('roleId');

        $user = User::findOrFail($id);

        $user->name = $username;
        $user->email = $email;
        $user->role_id = $role_id;

        $user->save();

        return response()->json([
            'status' => 'Success',
            'message' => 'User data updated successfully',
            'data' => $user
        ], 200);
    }

    /**
     * Remove the user from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        $user->delete();

        return response()->json([
            'status' => 'Success',
            'message' => 'User deleted',
            'data' => $user
        ], 200);
    }

    /**
     * Get the users list from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUsers()
    {
        $users = User::with('role')->get();

        return response($users, 200);
    }

    /**
     * Get the roles list from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function getRoles()
    {
        $roles =  Role::select('name', 'id')->get()->toArray();

        return response($roles, 200);
    }
}
