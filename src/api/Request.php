<?php

namespace RevitronCharts;

defined('RELAY') or exit('Direct access not permitted');

/**
 * The Request class handles the actual request to the Directus API.
 *
 * @copyright 2022 Marc Anton Dahmen
 * @author Marc Anton Dahmen
 * @license MIT
 */
class Request {
	/**
	 * Make a GET request to the Directus API using a given route.
	 *
	 * @param string $route
	 * @return string the JSON formatted response
	 */
	public static function get(string $route) {
		if (empty(getenv('API_KEY')) || empty(getenv('API_URL')) || empty($route)) {
			return json_encode(array('error' => 'invalid configuration!'));
		}

		$url = rtrim(getenv('API_URL'), '/') . '/' . ltrim($route, '/');

		$headers = array(
			'Accept: application/json',
			'Authorization: Bearer ' . getenv('API_KEY'),
		);

		$options = array(
			CURLOPT_HTTPHEADER => $headers,
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_TIMEOUT => 30,
			CURLOPT_FOLLOWLOCATION => true,
			CURLOPT_FRESH_CONNECT => 1,
			CURLOPT_URL => $url,
			CURLOPT_SSL_VERIFYPEER => false,
			CURLOPT_SSL_VERIFYSTATUS => false
		);

		$curl = curl_init();
		curl_setopt_array($curl, $options);
		$output = curl_exec($curl);

		$response = $output;

		if (curl_errno($curl)) {
			$response = json_encode(curl_getinfo($curl));
		}

		curl_close($curl);

		return $response;
	}
}
