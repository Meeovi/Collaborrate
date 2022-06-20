@extends('layouts.app')

@push('styles')
<link href="{{ asset('mdb/css/table-editor.min.css') }}" rel="stylesheet">
@endpush

@section('content')
<div class="container">
    @include('alerts')
    <div class="d-flex justify-content-end mb-4">
        <div class="form-outline">
            <input data-mdb-search data-mdb-target="#table_modal" type="text" id="search_modal" class="form-control" />
            <label class="form-label" for="search_modal">Search</label>
        </div>
        <button class="btn btn-primary btn-sm ms-3" data-mdb-add-entry data-mdb-target="#table_modal">
            <i class="fa fa-plus"></i>
        </button>
    </div>
    <hr />
    <div id="user-table"></div>
</div>
@endsection

@push('scripts')
<script src="{{ asset('mdb/js/table-editor.min.js') }}"></script>
<script src="{{ asset('js/user-management.js') }}"></script>
@endpush