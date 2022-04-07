<?php

use RevitronCharts\Relay;

define('BASE_DIR', dirname(dirname(__DIR__)));
define('RELAY', true);

require_once realpath(BASE_DIR . '/src/api/Relay.php');

new Relay();
