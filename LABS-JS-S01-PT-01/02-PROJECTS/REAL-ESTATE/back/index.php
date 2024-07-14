<?php
header( "Access-Control-Allow-Origin: *" );
$json_data = [
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
		]
	]
];

echo json_encode( $json_data );
?>
