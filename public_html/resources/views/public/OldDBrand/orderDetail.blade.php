<?php

    if(isset($_GET['q']))
    {
        $id=$_GET['q'];
        echo $id;

        require('config.php');            
        
        $result = $conn->query("SELECT * FROM buyer WHERE id=".$id);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            
            echo $row['id'].' ';
            echo $row['emailAdress'].' ';
            echo $row['country'].' ';
            echo $row['name'].' ';
            echo $row['address1'].' ';
            echo $row['city'].' ';
            echo $row['province'].' ';
            echo $row['postalCode'].' ';
            echo '</br>';


            $result = $conn->query("SELECT * FROM buyerItems WHERE buyerID=".$id);

            if ($result->num_rows > 0) {
                
                while($row = $result->fetch_assoc())
                {
                     echo $row['itemName'].' ';
                     echo $row['itemColor'].' ';
                     echo $row['itemPrice'].' ';
                     echo $row['quantity'].' ';
                     echo '</br>';
                }
            }else {
                echo "0 results";
            }
        } else {
            echo "0 results";
        }
        $conn->close();
    }

?>