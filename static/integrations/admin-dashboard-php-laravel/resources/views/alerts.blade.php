@if ($message = Session::get('success'))
<div class="alert alert-dismissible fade show" role="alert" data-mdb-color="success">
    {{ $message }}
    <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close"></button>
</div>
@endif


@if ($message = Session::get('error'))
<div class="alert alert-dismissible fade show" role="alert" data-mdb-color="danger">
    {{ $message }}
    <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close"></button>
</div>
@endif


@if ($message = Session::get('warning'))
<div class="alert alert-dismissible fade show" role="alert" data-mdb-color="warning">
    {{ $message }}
    <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close"></button>
</div>
@endif


@if ($message = Session::get('info'))
<div class="alert alert-dismissible fade show" role="alert" data-mdb-color="info">
    {{ $message }}
    <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close"></button>
</div>
@endif


@if ($errors->any())
{{ $message }}
<div class="alert alert-dismissible fade show" role="alert" data-mdb-color="danger">
    Please check the form below for errors
    <button type="button" class="btn-close" data-mdb-dismiss="alert" aria-label="Close"></button>
</div>
@endif