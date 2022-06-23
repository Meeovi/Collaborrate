@extends('layouts.app')

@section('content')
<div class="container">
    <!--Section: Index-->
    <section>
        <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="card text-center">
                            <div class="card-header bg-light border-0">
                                <strong>Indexed Pages on Google</strong>
                            </div>
                            <div class="card-body">
                                <p class="mb-2">Unique pages</p>
                                <h5>34</h5>

                                <hr />

                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="mb-2"><small>Percentage change</small></p>
                                        <p class="mb-2 text-success">
                                            <i class="fas fa-caret-up me-1"></i><span>3.0%</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p class="mb-2"><small>Absolute change</small></p>
                                        <p class="mb-2 text-success">
                                            <i class="fas fa-caret-up me-1"></i><span>1</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 mb-4">
                        <div class="card text-center">
                            <div class="card-header bg-light border-0">
                                <strong>Indexed Queries on Google</strong>
                            </div>
                            <div class="card-body">
                                <p class="mb-2">Unique Keywords</p>
                                <h5>860</h5>

                                <hr />

                                <div class="d-flex justify-content-between">
                                    <div>
                                        <p class="mb-2"><small>Percentage change</small></p>
                                        <p class="mb-2 text-danger">
                                            <i class="fas fa-caret-down me-1"></i><span>-12.7%</span>
                                        </p>
                                    </div>
                                    <div>
                                        <p class="mb-2"><small>Absolute change</small></p>
                                        <p class="mb-2 text-danger">
                                            <i class="fas fa-caret-down me-1"></i><span>-125</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div id="chart-devices-1"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <div id="chart-devices-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <div id="chart-pages-and-queries" style="height: 390px"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Section: Index-->

    <!--Section: KPI-->
    <section class="mb-4">
        <div class="card">
            <div class="card-header text-center py-3 bg-light border-0">
                <strong>Google Organic Search KPIs</strong>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover text-nowrap">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Impressions</th>
                                <th scope="col">Clicks</th>
                                <th scope="col">Site CTR</th>
                                <th scope="col">Average Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Value</th>
                                <td>17,842</td>
                                <td>168</td>
                                <td>0.94%</td>
                                <td>48.5</td>
                            </tr>
                            <tr>
                                <th scope="row">Percentage change</th>
                                <td>
                                    <span class="text-success">
                                        <i class="fas fa-caret-up me-1"></i><span>17.7%</span>
                                    </span>
                                </td>
                                <td>
                                    <span class="text-danger">
                                        <i class="fas fa-caret-down me-1"></i><span>-38.2%</span>
                                    </span>
                                </td>
                                <td>
                                    <span class="text-success">
                                        <i class="fas fa-caret-up me-1"></i><span>25.0%</span>
                                    </span>
                                </td>
                                <td>
                                    <span class="text-success">
                                        <i class="fas fa-caret-up me-1"></i><span>10.3%</span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Absolute change</th>
                                <td>
                                    <span class="text-success">
                                        <i class="fas fa-caret-up me-1"></i><span>3,825</span>
                                    </span>
                                </td>
                                <td>
                                    <span class="text-danger">
                                        <i class="fas fa-caret-down me-1"></i><span>-104</span>
                                    </span>
                                </td>
                                <td>
                                    <span class="text-success">
                                        <i class="fas fa-caret-up me-1"></i><span>0.31%</span>
                                    </span>
                                </td>
                                <td>
                                    <span class="text-success">
                                        <i class="fas fa-caret-up me-1"></i><span>4.52</span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    <!--Section: KPI-->

    <!--Section: Content-->
    <section>
        <div class="card">
            <div class="card-body">
                <div class="mb-4" id="chart-impressions-and-clicks" style="height: 300px"></div>

                <div class="table-responsive">
                    <table class="table text-nowrap">
                        <thead>
                            <tr>
                                <th scope="col">Day</th>
                                <th scope="col">Impressions</th>
                                <th scope="col">Clicks</th>
                                <th scope="col">Site CTR</th>
                                <th scope="col">Average position</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach( $data as $value )
                            <tr>
                                <th scope="row">{{$value->created_at->todatestring()}}</th>
                                <td>{{$value->impressions}}</td>
                                <td>{{$value->clicks}}</td>
                                <td>{{round($value->clicks / $value->impressions * 100, 2)}}%</td>
                                <td>{{$value->position}}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    <!--Section: Content-->
</div>
@endsection

@push('scripts')
<script src="{{ asset('js/dashboard-charts.js') }}"></script>
@endpush