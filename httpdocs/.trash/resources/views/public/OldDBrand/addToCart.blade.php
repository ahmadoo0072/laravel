<?php
session_start();

if(isset($_POST['Cart'])){
	$obj =$_POST["Cart"];
	if(isset($_SESSION["cart"])){
		$old=$_SESSION["cart"];
		$old[sizeof($old)]=$obj;
		unset($_SESSION["cart"]);
		$_SESSION["cart"]=$old;
		for($i=0;$i<sizeof($old);$i++)
        {
			for($j=0;$j<sizeof($old[$i]);$j++)
			{
				echo $old[$i][$j]+'  ';
			}
		}
		echo 'Success old';
	}
	else{
		$_SESSION["cart"]=array($obj);
		echo 'Success new';
	}
}
else{
	echo "Not Success";
}
?>