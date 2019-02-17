;
$("#commerce-checkout-form-checkout").submit(function(event){
    event.preventDefault();
    function validateForm() {
        var x = $("#emailAdress").val();
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
            alert("Not a valid e-mail address");
            return false;
        
        }
        var phone = $("#phoneNumber").val();
        phone = phone.replace(/[^0-9]/g, '');
        if(phone.length != 11) { 
           alert("not 11 digits");
           return false;
        }
    }
    var user = [
        //phoneNumber,emailAdress,country,name,address1,address2,city,postalCode,
        $("#phoneNumber").val(),
        $("#emailAdress").val(),
        $("#country").val(),
        $("#name").val(),
        $("#address1").val(),
        $("#address2").val(),
        $("#city").val(),
        $("#postalCode").val()
    ];
    console.log(user);
    $.ajax({
        type: "POST",
        url: "../checkoutjs.php",
        data: { User : user },
        success: function(data){
            console.log(data);
            alert(data);
            //window.location = "../index.php";
        },
        failure: function(errMsg){
            alert(errMsg);
        }
    });
});