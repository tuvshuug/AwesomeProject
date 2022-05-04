<?php
	$CN=mysqli_connect("localhost","root","");
	$DB=mysqli_select_db($CN,"cst");

    $EncodedData = file_get_contents('php://input');
    $DecodedData = json_decode($EncodedData,true);

	$RollNo=$DecodedData["RollNo"];
	$StudentName=$DecodedData["StudentName"];
	$Course=$DecodedData["Course"];

	$IQ="insert into studentmaster(RollNo, StudentName, Course) values($RollNo, '$StudentName', '$Course')";

	$R=mysqli_query($CN, $IQ);

	if($R)
	{
		$Message="Student has been registered successfully";
	}

	else{
		$Message="Server Error..Please try later";
}

	for($i = 1; $i <= 10; $i++) {
		$Response[]=array("id"=> $i, "Message$i"=>$Message);
	}
	
 	echo json_encode($Response);

 ?>

