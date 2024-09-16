<?php
header( "Access-Control-Allow-Origin: http://localhost:3000" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "rdk_js_weekends";

$property_id 		= $_POST[ "id" ];
$property_data 		= $_POST[ "property" ];
$location_data 		= $_POST[ "location" ];
$price_data 		= $_POST[ "price" ];

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB Connection failed..!" ); }

$query = "UPDATE draftproperties SET property='$property_data', location=$location_data, price=$price_data WHERE id=$property_id";
$query_result = mysqli_query( $conn, $query );

$json_data = [
	"status" => $query_result
];

echo json_encode( $json_data );
?>
