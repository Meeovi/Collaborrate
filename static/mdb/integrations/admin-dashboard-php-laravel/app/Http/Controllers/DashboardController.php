<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
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
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $data = \App\Models\TrafficData::orderBy('created_at', 'asc')->get();

        $impressions = collect($data)->map(function ($value) {
            return $value->impressions;
        });

        $clicks = collect($data)->map(function ($value) {
            return $value->clicks;
        });

        $labels = collect($data)->map(function ($value) {
            return $value->created_at->todatestring();
        });

        return view('dashboard', [
            'data' => $data,
            'impressions' => json_encode($impressions, JSON_NUMERIC_CHECK),
            'clicks' => json_encode($clicks, JSON_NUMERIC_CHECK),
            'labels' => json_encode($labels, JSON_NUMERIC_CHECK)
        ]);
    }

    /**
     * Get the traffic data from storage.
     *
     * @return \Illuminate\Http\Response
     */
    public function getTrafficData()
    {
        $data = \App\Models\TrafficData::orderBy('created_at', 'asc')->get();

        return response($data, 200);
    }
}
