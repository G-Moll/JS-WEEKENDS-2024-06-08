<?php
header( "Access-Control-Allow-Origin: http://localhost:3000" );

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "rdk_js_weekends";

$property_id 		= $_POST[ "id" ];

$conn = mysqli_connect( $db_host, $db_user, $db_pass, $db_name );
if( ! $conn ) { die( "DB Connection failed..!" ); }

// HARD DELETE
// $query = "DELETE FROM draftproperties WHERE id=$property_id";
// SOFT DELETE
$query = "UPDATE draftproperties SET available=FALSE WHERE id=$property_id";

$query_result = mysqli_query( $conn, $query );

$json_data = [
	"status" => $query_result
];

echo json_encode( $json_data );
?>
