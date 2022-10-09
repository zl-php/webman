<?php
# @Author : zhoulei1
# @Time   : 2022-09-21
# @File   : SendMail.php
namespace app\queue\redis;

use Webman\RedisQueue\Consumer;
use support\Cache;

class SendMail implements Consumer
{
    // 要消费的队列名
    public $queue = 'send-mail';

    // 连接名，对应 plugin/webman/redis-queue/redis.php 里的连接`
    public $connection = 'default';

    // 消费
    public function consume($data)
    {
        Cache::set('key-'.rand(), serialize($data), 60);
    }
}

