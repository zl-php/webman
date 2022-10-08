<?php
# @Author : zhoulei1
# @Time   : 2022-09-29
# @File   : TaskTest.php
namespace process;

use Workerman\Timer;
use support\Log;

class TaskTest
{

    public function onWorkerStart()
    {
        // 每隔10秒检查一次数据库是否有新用户注册
//        Timer::add(1, function(){
//            Log::debug('LOG', ['AAA'=>1111]);
//        });
    }

}