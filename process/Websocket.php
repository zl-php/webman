<?php
# @Author : zhoulei1
# @Time   : 2022-09-21
# @File   : Websocket.php
namespace process;

use Workerman\Redis\Client;
use Workerman\Connection\TcpConnection;

class Websocket
{
    // TCP 握手
    public function onConnect(TcpConnection $connection){}

    // WebSocket 握手
    public function onWebSocketConnect(TcpConnection $connection, $http_buffer)
    {
        $domains = ['127.0.0.1'];
        if (!in_array(parse_url($_SERVER['HTTP_ORIGIN'])['host'], $domains)) {
            $connection->close();
        }

        // 鉴权
        $uid = $_GET['token'];
        if(!isset($uid) || empty($uid)){
            $connection->send(json_encode(['event' => 'auth_error', 'data' => ['message'=>'鉴权失败']]));
        }

        $connection->id = $uid;
        $connection->send(json_encode(['event' => 'connect_succeeded', 'data' => ['id'=> $connection->id]]));
    }

    public function onWorkerStart()
    {
        global $redis;
        $redis = new Client('redis://127.0.0.1:6379');
    }


    public function onMessage(TcpConnection $connection, $data)
    {
        global $redis;
        $redis->set('test_key', rand());

        $data = json_decode($data, true);

        if (!$data) return;
        $event = $data['event'];
        switch ($event) {
            case 'ping':
                $connection->send(json_encode(['event' => 'pong', 'data' => []]));
                return;
            case 'todo':
                $uid = $connection->id;
                $connection->send(json_encode(['event'=>'todo_succeeded', 'data'=>$this->todoList($uid)]));
                return;
            default:
                return $connection->send($this->error(null, 'Unknown event'));
        }
    }


    public function onClose(TcpConnection $connection)
    {
        echo '客户端'. $connection->id. '断开连接'.PHP_EOL;
    }


    private function todoList($uid)
    {
        $list = [
            '1111111','2222222222', 'cccccccccccc', 'dffffffffff'
        ];

        return $list;
    }

}