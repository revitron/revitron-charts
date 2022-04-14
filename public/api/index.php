<?php

use RevitronCharts\Relay;

define('REVITRON_CHARTS', true);
define('BASE_DIR', dirname(dirname(__DIR__)));

require_once realpath(BASE_DIR . '/src/server/Relay.php');

new Relay();
