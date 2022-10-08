<?php
# @Author : zhoulei1
# @Time   : 2022-09-21
# @File   : Handler.php
namespace app\exception;

use Throwable;
use Webman\Exception\ExceptionHandler;
use Webman\Http\Request;
use Webman\Http\Response;

/**
 * Class Handler
 * @package support\exception
 */
class Handler extends ExceptionHandler
{
    /**
     * 不用记录日志的异常
     * @var string[]
     */
    public $dontReport = [
        InvalidRequestException::class
    ];

    public function render(Request $request, Throwable $exception): Response
    {
        if ($exception instanceof InvalidRequestException) {
            return $exception->render();
        }

        return parent::render($request, $exception);
    }
}