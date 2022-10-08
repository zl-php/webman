<?php
# @Author : zhoulei1
# @Time   : 2022-09-21
# @File   : Websocket.php


namespace app\controller;

use support\Request;

class Websocket
{
    public function index(Request $request)
    {
        return view('websocket/ws');
    }
}
