@extends('layouts.app')

@section('content')
<div class="container">
    <!--Section: Content-->
    <section>
        <div class="row">
            <div class="col-md-8 mb-5 mb-md-0">
                @include('alerts')
                <div class="card mb-5">
                    <div class="card-header py-3">
                        <strong>Edit profile</strong>
                    </div>
                    <div class="card-body text-center">
                        <div class="mb-3">
                            <strong>Profile photo</strong>
                        </div>

                        <form method="POST" action="{{ route('profile', ['id' => $user->id]) }}">
                            @method('PUT')
                            @csrf
                            <div class="d-flex justify-content-center mb-5">
                                <img class="rounded-circle shadow-1 mb-3" src="{{ Auth::user()->avatar }}" alt="avatar" style="width: 150px;">
                            </div>

                            <div class="form-outline mb-5">
                                <input type="text" id="username" name="username" class="form-control @error('username') is-invalid @enderror" value="{{ Auth::user()->name }}" />
                                @error('username')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                                <label class="form-label" for="username">Username</label>
                            </div>

                            <div class="form-outline mb-5">
                                <input readonly type="email" id="email" name="email" class="form-control @error('email') is-invalid @enderror" value="{{ Auth::user()->email }}" />
                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                                <label class="form-label" for="email">Email</label>
                            </div>

                            <div class="form-outline mb-5">
                                <input type="text" id="avatar" name="avatar" class="form-control @error('avatar') is-invalid @enderror" value="{{ Auth::user()->avatar }}" />
                                @error('avatar')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                                <label class="form-label" for="username">Avatar</label>
                            </div>

                            <button type="submit" class="btn btn-primary mb-2">
                                Update profile
                            </button>
                        </form>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header py-3"><strong>Change password</strong></div>
                    <div class="card-body text-center pt-4">

                        <form method="POST" action="{{ route('password', ['id' => $user->id]) }}">
                            @method('PUT')
                            @csrf
                            <div class="form-outline mb-5">
                                <input type="password" id="current-password" name="current_password" class="form-control @error('current_password') is-invalid @enderror" />
                                @error('current_password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                                <label class="form-label" for="current-password">Current password</label>
                            </div>

                            <div class="form-outline mb-5">
                                <input type="password" id="new-password" name="new_password" class="form-control @error('new_password') is-invalid @enderror" />
                                @error('new_password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                                <label class="form-label" for="new-password">New password</label>
                            </div>

                            <div class="form-outline mb-5">
                                <input type="password" id="password-confirmation" name="new_password_confirmation" class="form-control @error('new_password_confirmation') is-invalid @enderror" />
                                @error('new_password_confirmation')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                                <label class="form-label" for="password-confirmation">Confirm new password</label>
                            </div>

                            <button type="submit" class="btn btn-primary mb-2">Apply</button>
                        </form>

                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-5 mb-md-0">
                <div class="card">
                    <div class="card-body text-center">

                        <img class="rounded-circle shadow-1 mb-3" src="{{ Auth::user()->avatar }}" alt="avatar" style="width: 150px;">

                        <p class="mb-1"><strong>John Doe</strong></p>
                        <p class="mb-2"><small>Founder</small></p>
                        <p class="mb-2 text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia deserunt pariatur voluptatem consequuntur! Aliquid, placeat nobis odit delectus ad est, nemo repudiandae possimus repellendus voluptas debitis, numquam modi asperiores beatae?</p>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Section: Content-->
</div>
@endsection