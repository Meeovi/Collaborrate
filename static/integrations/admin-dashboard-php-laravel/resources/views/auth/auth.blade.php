@extends('../layouts/app')

@section('content')
<div class="container pt-5">
    @include('alerts')
    <div class="row d-flex justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body p-4">
                    <!-- Pills navs -->
                    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link @if($errors->register->isEmpty()) active @endif" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link @if(!$errors->register->isEmpty()) active @endif" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Register</a>
                        </li>
                    </ul>
                    <!-- Pills navs -->

                    <!-- Pills content -->
                    <div class="tab-content">
                        <div class="tab-pane fade @if($errors->register->isEmpty()) show active @endif" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                            <form method="POST" action="{{ route('auth/login') }}">
                                @csrf
                                <div class="text-center mb-3">
                                    <p>Sign in with:</p>
                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-google"></i>
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-github"></i>
                                    </button>
                                </div>

                                <p class="text-center">or:</p>

                                <!-- Email input -->
                                <div class="form-outline mb-5">
                                    <input type="text" id="login" name="login" class="form-control{{ $errors->has('name') || $errors->has('email') ? ' is-invalid' : '' }}" />
                                    @if ($errors->has('name') || $errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('name') ? : $errors->first('email') }}</strong>
                                    </span>
                                    @endif
                                    <label class="form-label" for="loginName">Email or username</label>
                                </div>

                                <!-- Password input -->
                                <div class="form-outline mb-5">
                                    <input type="password" id="password" name="password" class="form-control @error('password') is-invalid @enderror" />
                                    @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                    <label class="form-label" for="loginPassword">Password</label>
                                </div>

                                <!-- 2 column grid layout -->
                                <div class="row mb-4">
                                    <div class="col-md-6 d-flex justify-content-center">
                                        <!-- Checkbox -->
                                        <div class="form-check mb-3 mb-md-0">
                                            <input class="form-check-input" type="checkbox" value="" id="loginCheck" name="loginCheck" checked />
                                            <label class="form-check-label" for="loginCheck">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-md-6 d-flex justify-content-center">
                                        <!-- Simple link -->
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                <!-- Submit button -->
                                <button type="submit" class="btn btn-primary btn-block mb-4">
                                    Sign in
                                </button>

                                <!-- Register buttons -->
                                <div class="text-center">
                                    <p>Not a member? <a href="#!">Register</a></p>
                                </div>
                            </form>
                        </div>
                        <div class="tab-pane fade @if(!$errors->register->isEmpty()) show active @endif" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                            <form method="POST" action="{{ route('auth/register') }}">
                                @csrf
                                <div class="text-center mb-3">
                                    <p>Sign up with:</p>
                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-google"></i>
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-github"></i>
                                    </button>
                                </div>

                                <p class="text-center">or:</p>

                                <!-- Name input -->
                                <div class="form-outline mb-5">
                                    <input type="text" id="register_name" class="form-control @error('register_name') is-invalid @enderror" name="register_name" />
                                    @error('register_name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                    <label class="form-label" for="registerName">Username</label>
                                </div>

                                <!-- Email input -->
                                <div class="form-outline mb-5">
                                    <input type="email" id="register_email" class="form-control @error('register_email') is-invalid @enderror" name="register_email" />
                                    @error('register_email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                    <label class="form-label" for="registerEmail">Email</label>
                                </div>

                                <!-- Avatar url input -->
                                <div class="form-outline mb-5">
                                    <input type="text" id="avatar" class="form-control" name="avatar" />
                                    <label class="form-label" for="avatar">Avatar URL</label>
                                </div>


                                <!-- Password input -->
                                <div class="form-outline mb-5">
                                    <input type="password" id="register_password" class="form-control @error('register_password') is-invalid @enderror" name="register_password" />
                                    @error('register_password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                    <label class="form-label" for="registerPassword">Password</label>
                                </div>

                                <!-- Repeat Password input -->
                                <div class="form-outline mb-5">
                                    <input type="password" id="password_confirm" name="register_password_confirmation" class="form-control @error('register_password_confirmation') is-invalid @enderror" />
                                    @error('register_password_confirmation')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                    <label class="form-label" for="password_confirm">Repeat password</label>
                                </div>

                                <!-- Submit button -->
                                <button type="submit" class="btn btn-primary btn-block mb-3">
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                    <!-- Pills content -->
                </div>
            </div>
        </div>
    </div>
</div>
@endsection