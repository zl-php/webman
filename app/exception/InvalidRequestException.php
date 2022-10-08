<?php
# @Author : zhoulei1
# @Time   : 2022-09-21
# @File   : InvalidRequestException.php

namespace app\exception;

use Exception;
use Throwable;

class InvalidRequestException extends Exception
{
    public function __construct($message = "Invalid Request.", $code = 400, Throwable $previous = null)
    {
        parent::__construct($message, $code, $previous);
    }

    public function render()
    {
        $result = config('app.debug') ? [
            'errcode' => $this->getCode(),
            'errmsg' => $this->getMessage(),
            'data' => [],
            'exception' => get_class($this),
            'file' => $this->getFile(),
            'line' => $this->getLine()
        ] : [
            'errcode' => $this->getCode(),
            'errmsg' => $this->getMessage(),
            'data' => []
        ];

        return json($result);
    }
}