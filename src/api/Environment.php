<?php

namespace RevitronCharts;

defined('RELAY') or exit('Direct access not permitted');

/**
 * The Environment class handles merging environment variables
 * with a given configuration.
 *
 * @copyright 2022 Marc Anton Dahmen
 * @author Marc Anton Dahmen
 * @license MIT
 */
class Environment {
	/**
	 * The environment constructor.
	 */
	public function __construct() {
		$configFile = BASE_DIR . '/config/config.php';

		if (is_readable($configFile)) {
			$config = require_once $configFile;

			foreach ($config as $key => $value) {
				putenv("$key=$value");
			}
		}
	}
}
