<?php

namespace RevitronCharts;

defined('REVITRON_CHARTS') or exit('Direct access not permitted');

/**
 * The Relay class serves as the main entry point and forwards a given route to
 * the Directus API.
 *
 * @copyright 2022 Marc Anton Dahmen
 * @author Marc Anton Dahmen
 * @license MIT
 */
class Relay {
	/**
	 * The Relay constructor.
	 */
	public function __construct() {
		$this->autoload();
		new Environment();

		header('Content-Type: application/json; charset=utf-8');

		$route = array_key_first($_GET);
		echo Request::get($route);
	}

	/**
	 * Set up autoloading.
	 */
	private function autoload() {
		spl_autoload_register(function ($class) {
			$prefix = 'RevitronCharts\\';

			if (strpos($class, $prefix) === 0) {
				$file = BASE_DIR . '/src/server/' . str_replace('\\', '/', substr($class, strlen($prefix))) . '.php';

				if (file_exists($file)) {
					require_once $file;
				}
			}
		});
	}
}
