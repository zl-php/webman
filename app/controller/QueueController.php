<?php
# @Author : zhoulei1
# @Time   : 2022-09-21
# @File   : Queue.php
namespace app\controller;

use support\Request;
use support\Response;
use Webman\RedisQueue\Redis;
use app\exception\InvalidRequestException;
use app\model\User;
use app\traits\HasHttpRequest;

class QueueController
{
    use HasHttpRequest;


    public function queue(Request $request)
    {
        $ip = $request->get('ip');

        $par = ['type' => 'json', 'ip' => $ip];

        return json($this->httpGet('http://ip.zxinc.org/api.php', $par));

        //throw new InvalidRequestException("错误");

//        // 队列名
//        $queue = 'send-mail';
//        // 数据，可以直接传数组，无需序列化
//        $data = ['to' => 'tom@gmail.com', 'content' => 'hello'];
//        // 投递消息
//        Redis::send($queue, $data);
//
//        return json(['code' => 0, 'msg' => 'ok']);
    }
}