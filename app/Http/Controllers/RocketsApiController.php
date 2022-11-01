<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;

class RocketsApiController extends Controller
{
    public function rockets (){
        return Http::get("https://api.spacexdata.com/v3/rockets");
    }
    public function rocket ($id){
        return Http::get("https://api.spacexdata.com/v3/rockets/{$id}");
    }
}
