<?php

namespace app\controller;

use support\Request;
use support\Cache;


class IndexController
{
    public function test(Request $request)
    {
        Cache::set('key', 'value', 60);
    }

}
