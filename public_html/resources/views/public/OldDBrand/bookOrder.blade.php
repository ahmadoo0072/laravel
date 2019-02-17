<?php
$curl_handle = curl_init();

// For Direct Link Access use below commented link
//curl_setopt($curl_handle, CURLOPT_URL, 'http://www.leopardscod.com/webservice/trackBookedPacket/?api_key=XXXX&api_password=XXXX&track_numbers=XXXXXXXX');  // For Get Mother/Direct Link

curl_setopt($curl_handle, CURLOPT_URL, 'http://www.leopardscod.com/webservice/trackBookedPacketTest/format/json/');  // Write here Test or Production Link
curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($curl_handle, CURLOPT_POST, 1);
curl_setopt($curl_handle, CURLOPT_POSTFIELDS, array(
    'api_key' => '21AD2130166164213ECE2276F3872EFD',
    'api_password' => 'MKRNAQEEBI6402225',
    'booked_packet_weight' => 250,                    // Weight should in 'Grams' e.g. '2000'
    //'booked_packet_vol_weight_w' => int,              // Optional Field (You can keep it empty), Volumetric Weight Width
    //'booked_packet_vol_weight_h' => int,              // Optional Field (You can keep it empty), Volumetric Weight Height
    //'booked_packet_vol_weight_l' => int,              // Optional Field (You can keep it empty), Volumetric Weight Length
    'booked_packet_no_piece' => 1,                  // No. of Pieces should an Integer Value
    'booked_packet_collect_amount' => int,            // Collection Amount on Delivery
    //'booked_packet_order_id' => 'string',             // Optional Filed, (If any) Order ID of Given Product
    
    'origin_city' => 789,                        // Params: 'self' or 'integer_value' e.g. 'origin_city' => 'self' or 'origin_city' => 789 (where 789 is Lahore ID)
                                                      // If 'self' is used then Your City ID will be used.
                                                      // 'integer_value' provide integer value (for integer values read 'Get All Cities' api documentation)
    'destination_city' => 'string',                   // Params: 'self' or 'integer_value' e.g. 'destination_city' => 'self' or 'destination_city' => 789 (where 789 is Lahore ID)
                                                      // If 'self' is used then Your City ID will be used.
                                                      // 'integer_value' provide integer value (for integer values read 'Get All Cities' api documentation)
    
    'shipment_name_eng' => 'ACellShop',                  // Params: 'self' or 'Type any other Name here', If 'self' will used then Your Company's Name will be Used here
    'shipment_email' => 'ahmadoo0072@gmail.com',                     // Params: 'self' or 'Type any other Email here', If 'self' will used then Your Company's Email will be Used here
    'shipment_phone' => 'int',                        // Params: 'self' or 'Type any other Phone Number here', If 'self' will used then Your Company's Phone Number will be Used here
    'shipment_address' => '121 C GULSHEN LAHORE',                   // Params: 'self' or 'Type any other Address here', If 'self' will used then Your Company's Address will be Used here
    'consignment_name_eng' => 'string',               // Type Consignee Name here
    'consignment_email' => 'string',                  // Optional Field (You can keep it empty), Type Consignee Email here
    'consignment_phone' => 'int',                     // Type Consignee Phone Number here
    //'consignment_phone_two' => 'int',                 // Optional Field (You can keep it empty), Type Consignee Second Phone Number here
    //'consignment_phone_three' => 'int',               // Optional Field (You can keep it empty), Type Consignee Third Phone Number here
    'consignment_address' => '////',                // Type Consignee Address here
    'special_instructions' => 'Handle with care',               // Type any instruction here regarding booked packet
));

$buffer = curl_exec($curl_handle);
curl_close($curl_handle);
?>