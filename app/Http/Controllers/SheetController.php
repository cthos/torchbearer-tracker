<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class SheetController extends Controller
{
    public function character($id, Request $request)
    {
        return view('sheet.character')->withCharId($id);
    }

    public function gm(Request $request)
    {
        return view('sheet.gm');
    }
}
