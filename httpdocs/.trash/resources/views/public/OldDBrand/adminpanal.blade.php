<!DOCTYPE html>
    <meta http-equiv="content-type" content="text/html; charset=UTF8">
<html>
    <head>
    <title>Admin Panal</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsgrid/1.5.2/jsgrid.min.css" />
        <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsgrid/1.5.2/jsgrid-theme.min.css" />
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jsgrid/1.5.2/jsgrid.min.js"></script>
    </head>
    <body>
        <div id="jsGrid"></div>
        <?php
            require('config.php');            
            
            $result = $conn->query("SELECT * FROM buyer");

            $data = array();
            $a=0;
            if ($result->num_rows > 0) {
                // output data of each row
                //emailAdress,country,name,address1,address2,city,province,postalCode
                while($row = $result->fetch_assoc()) {
                    array_push($data , array(
                        "ID"=>$row['id'],
                        "Email Adress"=>$row['emailAdress'],
                        "Country"=>$row['country'],
                        "Name"=>$row['name'],
                        "Address"=>$row['address1'],
                        "City"=>$row['city'],
                        "Province"=>$row['province'],
                        "Postal Code"=>$row['postalCode']
                        ));
                }
            } else {
                echo "0 results";
            }
            $conn->close();
        ?>
        <script>
            var clients = <?php echo json_encode($data);?>;
            $("#jsGrid").jsGrid({
                width: "100%",
                //height: "690px",
        
                //inserting: true,
                //editing: true,
                sorting: true,
                paging: true,
        
                data: clients,
        
                fields: [
                    //emailAdress,country,name,address1,address2,city,province,postalCode
                    { name: "ID", type: "text", width: 50, validate: "required" },
                    { name: "Email Adress", type: "text", width: 130, validate: "required"},
                    { name: "Country", type: "text", width: 50, validate: "required"},
                    { name: "Name", type: "text", width: 100, validate: "required" },
                    { name: "City", type: "text", width: 80, validate: "required"},
                    { name: "Address", type: "text", width: 150, validate: "required"},
                    { name: "Province", type: "text", width: 50, validate: "required"},
                    { name: "Postal Code", type: "text", width: 40, validate: "required"}
                ]
            });
            $('tbody tr').click(function(){
                var text=$('tbody tr td').text();
                window.location ='/orderDetail.php?q='+text[0];
            });
        </script>
    </body>
