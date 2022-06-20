<nav #main-navbar class="navbar navbar-light bg-light">
    <div class="container d-flex justify-content-between align-items-center">
        @auth()
        <div class="d-flex">
            <button data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" class="btn shadow-0 p-0 me-3 d-block d-xxl-none" aria-controls="#sidenav-1" aria-haspopup="true">
                <i class="fas fa-bars fa-lg"></i>
            </button>
        </div>
        @else
        <a class="navbar-brand" href="#">
            <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="30" alt="" loading="lazy" />
        </a>
        @endauth

        @auth()
        <div class="nav-item avatar dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-mdb-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img height="38px" width="38px" src="{{ Auth::user()->avatar }}" class="rounded-circle z-depth-0" alt="avatar image">
            </a>
            <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-55">
                <a class="dropdown-item" href="{{ route('user-profile') }}">{{ __('Profile') }}</a>
                <a class="dropdown-item" href="{{ route('auth/logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    {{ __('Logout') }}
                </a>

                <form id="logout-form" action="{{ route('auth/logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
            </div>
        </div>
        @endauth
    </div>
</nav>