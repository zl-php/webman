<?php

namespace app\controller;

use support\Request;
use app\traits\HasHttpRequest;

class IndexController
{
    use HasHttpRequest;

    public function test(Request $request)
    {
        $ip = $request->get('ip');

        $par = ['type' => 'json', 'ip' => $ip];

        return json($this->httpGet('http://ip.zxinc.org/api.php', $par));

        //throw new InvalidRequestException("错误");
    }

}
