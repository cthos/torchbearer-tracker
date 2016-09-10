<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class SheetController extends Controller
{
    public function character(Request $request)
    {

        return view('sheet.character');
    }
}
