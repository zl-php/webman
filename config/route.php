<?php
/**
 * This file is part of webman.
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the MIT-LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @author    walkor<walkor@workerman.net>
 * @copyright walkor<walkor@workerman.net>
 * @link      http://www.workerman.net/
 * @license   http://www.opensource.org/licenses/mit-license.php MIT License
 */

use Webman\Route;

Route::get('/index', [app\controller\IndexController::class, 'test']);
Route::get('/ws', [app\controller\Websocket::class, 'index']);
Route::get('/queue', [app\controller\QueueController::class, 'queue']);



// 处理404
Route::fallback(function(){
    return json(['errcode' => 404, 'message' => '404 not found']);
});

// 关闭默认路由
Route::disableDefaultRoute();
