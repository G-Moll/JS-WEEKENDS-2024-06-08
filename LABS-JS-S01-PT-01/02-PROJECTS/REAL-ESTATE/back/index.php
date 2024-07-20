<?php
header( "Access-Control-Allow-Origin: http://localhost:3000" );
$json_data = [
	"info" => "php data",
	"data" => [
		[
			"id" => 1,
			"available" => 1,
			"property" => "Aparment E&R 2024",
			"location" => 1,
			"price" => 20000
		],
		[
			"id" => 2,
			"available" => 1,
			"property" => "New Aparment E&R 2025",
			"location" => 1,
			"price" => 8000
		],
		[
			"id" => 3,
			"available" => 1,
			"property" => "Tiny House E&R 2025",
			"location" => 1,
			"price" => 28000
		],
		[
			"id" => 4,
			"available" => 1,
			"property" => "New Building E&R 2026",
			"location" => 1,
			"price" => 38000
		]
	]
];

echo json_encode( $json_data );
?>
