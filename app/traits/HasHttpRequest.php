<?php
# @Author : zhoulei1
# @Time   : 2022-09-22
# @File   : HasHttpRequest.php

namespace app\traits;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;

trait HasHttpRequest
{
    protected $httpClient = null;

    protected static $defaults = [
        'curl' => [
            CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4,
        ],
    ];

    public function getHttpClient(): ClientInterface
    {
        if (!($this->httpClient instanceof ClientInterface)) {
            if (property_exists($this, 'app') && $this->app['http_client']) {
                $this->httpClient = $this->app['http_client'];
            } else {
                $this->httpClient = new Client();
            }
        }

        return $this->httpClient;
    }

    public function httpGet($url, array $query = [])
    {
        return $this->request($url, 'GET', ['query' => $query]);
    }

    public function httpPost($url, array $data = [])
    {
        return $this->request($url, 'POST', ['form_params' => $data]);
    }

    public function httpPostJson($url, array $data = [], array $query = [])
    {
        return $this->request($url, 'POST', ['query' => $query, 'json' => $data]);
    }

    public function request($url, $method = 'GET', array $options = [], $returnRaw = false)
    {
        $method = strtoupper($method);

        $options = array_merge(self::$defaults, $options);

        $options = $this->isJsonOptions($options);

        $response = $this->getHttpClient()->request($method, $url, $options);
        $response->getBody()->rewind();

        return  $returnRaw ? $response : $this->response($response);
    }

    protected function isJsonOptions(array $options): array
    {
        if (isset($options['json']) && is_array($options['json'])) {
            $options['headers'] = array_merge($options['headers'] ?? [], ['Content-Type' => 'application/json']);

            if (empty($options['json'])) {
                $options['body'] = \GuzzleHttp\json_encode($options['json'], JSON_FORCE_OBJECT);
            } else {
                $options['body'] = \GuzzleHttp\json_encode($options['json'], JSON_UNESCAPED_UNICODE);
            }

            unset($options['json']);
        }

        return $options;
    }

    // 转换为数组
    protected function response($response)
    {
        return json_decode($response->getBody()->getContents(), true);
    }


}