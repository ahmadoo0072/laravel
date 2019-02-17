<?php
session_start();

require('config.php');

if(isset($_POST['User'])){
    $obj =$_POST["User"];
	if(isset($_SESSION["cart"])){
		$old=$_SESSION["cart"];
        $id=0;

        //$stmt = $mysqli->prepare("INSERT INTO CountryLanguage VALUES (?, ?, ?, ?)");
        //$stmt->bind_param('sssd', $code, $language, $official, $percent);
        //$stmt->execute();

        $sql = "INSERT INTO buyer (phoneNumber,emailAdress,country,name,address1,address2,city,postalCode)
        VALUES ('". $obj[0]."','".$obj[1]."','".$obj[2]."','".$obj[3]."','".$obj[4]."','".$obj[4]."','".$obj[6]."','".$obj[7]."')";

        if ($conn->query($sql) === TRUE) {
            $id = $conn->insert_id;
            $sql="";
            for ($i=0; $i < sizeof($old); $i++) {
                $mobile=$old[$i][0];
                $a=1;
                if($i > 0){
                    $sql.=";";
                }
                while ($a < sizeof($old[$i])) {
                    if($a > 2){
                        $sql.=";";
                    }
                    
                    $sql.= "INSERT INTO buyerItems (itemName,itemColor,itemPrice,quantity,buyerID) VALUES
                    ('".$mobile.' '.$old[$i][$a++]."','".$old[$i][$a++]."','";
                    
                    $item = intval(str_replace(".","",str_replace("$","",$old[$i][$a++])));
                    $total = intval(str_replace(".","",str_replace("$","",$old[$i][$a++])));

                    $sql.= $item . "','". $total/$item ."','".$id."')";
                }
            }
            if ($conn->multi_query($sql) === TRUE) {
                echo ' Order accept ';
                unset($_SESSION["cart"]);
            }else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
	}
	echo "Success";
}
else{
	echo "Not Success";
}
$conn->close();
?>