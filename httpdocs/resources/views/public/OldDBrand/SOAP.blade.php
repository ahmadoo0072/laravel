<?php

/*$xml = new SimpleXMLElement(
'<person>
 <child role="son">
  <child role="daughter"/>
 </child>
 <child role="daughter">
  <child role="son">
   <child role="son"/>
  </child>
 </child>
</person>');

foreach ($xml->children() as $second_gen) {
    echo ' The person begot a ' . $second_gen['role'];

    foreach ($second_gen->children() as $third_gen) {
        echo ' who begot a ' . $third_gen['role'] . ';';

        foreach ($third_gen->children() as $fourth_gen) {
            echo ' and that ' . $third_gen['role'] .
                ' begot a ' . $fourth_gen['role'];
        }
    }
}*/
    $curl_handle = curl_init();
    curl_setopt($curl_handle, CURLOPT_URL, 'http://www.leopardscod.com/webservice/getAllCitiesTest/format/json/'); // Write here Test or Production Link
    curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl_handle, CURLOPT_POST, 1);
    curl_setopt($curl_handle, CURLOPT_POSTFIELDS, array(
        'api_key' => '21AD2130166164213ECE2276F3872EFD',
        'api_password' => 'MKRNAQEEBI6402225'
    ));

    $buffer = curl_exec($curl_handle);
    curl_close($curl_handle);

    echo $buffer;

    echo '</br></br>';

    $json= json_decode($buffer);

    echo $json->city_list[0]->name;

    foreach ($json->city_list as $key=>$value) {
        echo $value->name .'    '. $value->id;
        echo '</br></br>';
    }

    

    /*
    $curl_handle = curl_init();

    // For Direct Link Access use below commented link
    //curl_setopt($curl_handle, CURLOPT_URL, 'http://www.leopardscod.com/webservice/trackBookedPacket/?api_key=XXXX&api_password=XXXX&track_numbers=XXXXXXXX');  // For Get Mother/Direct Link

    curl_setopt($curl_handle, CURLOPT_URL, 'http://www.leopardscod.com/webservice/trackBookedPacketTest/format/json/');  // Write here Test or Production Link
    curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl_handle, CURLOPT_POST, 1);
    curl_setopt($curl_handle, CURLOPT_POSTFIELDS, array(
        'api_key' => '21AD2130166164213ECE2276F3872EFD',
        'api_password' => 'MKRNAQEEBI6402225',
        'track_numbers' => 'string'                      // E.g. 'XXYYYYYYYY' OR 'XXYYYYYYYY,XXYYYYYYYY,XXYYYYYY' 10 Digits each number
    ));

    $buffer = curl_exec($curl_handle);
    echo buffer;
    curl_close($curl_handle);*/
?>