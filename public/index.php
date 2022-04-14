<?php

use RevitronCharts\Environment;

define('REVITRON_CHARTS', true);
define('BASE_DIR', dirname(__DIR__));
require_once realpath(BASE_DIR . '/src/server/Environment.php');

new Environment()

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Revitron Charts</title>
	<link rel="stylesheet" href="dist/vendor.bundle.css">
	<link rel="stylesheet" href="dist/main.bundle.css">
	<script src="dist/vendor.bundle.js"></script>
	<script src="dist/main.bundle.js"></script>
</head>
<body>
	<rc-navbar></rc-navbar>
	<rc-root unit="<?php echo(getenv('RC_DISPLAY_UNIT')); ?>"></rc-root>
</body>
</html>