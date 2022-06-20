<div id="sidenav-1" class="sidenav" role="navigation" data-mdb-hidden="false" data-mdb-accordion="true" data-mdb-mode="side">
    <a class="ripple d-flex justify-content-center py-4" href="#!" data-mdb-ripple-color="primary">
        <img id="MDB-logo" src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png" alt="MDB Logo" draggable="false" />
    </a>

    <ul class="sidenav-menu">
        <li class="sidenav-item">
            <a class="sidenav-link" href="{{ route('dashboard') }}">
                <i class="fas fa-th-large me-3"></i><span>Dashboard</span>
            </a>
        </li>
        <li class="sidenav-item">
            <a class="sidenav-link" href="{{ route('user-profile') }}">
                <i class="fas fa-user me-3"></i><span>Profile</span>
            </a>
        </li>
        @if(Auth::user()->role->name === 'admin')
        <li class="sidenav-item">
            <a class="sidenav-link" href="{{ route('user-management') }}">
                <i class="fas fa-user me-3"></i><span>Users management</span>
            </a>
        </li>
        @endif
    </ul>

    <hr />

    <ul class="sidenav-menu">
        <li class="sidenav-item">
            <a class="sidenav-link" href="https://mdbootstrap.com/docs/standard/getting-started/installation" target=”_blank”>
                <i class="fas fa-download me-3"></i><span>Getting started</span>
            </a>
        </li>
        <li class="sidenav-item">
            <a class="sidenav-link" href="https://mdbootstrap.com/docs/standard/" target=”_blank”>
                <i class="fas fa-cubes me-3"></i><span>Components</span>
            </a>
        </li>
    </ul>
</div>

@push('scripts')
<script src="{{ asset('js/sidenav.js') }}"></script>
@endpush