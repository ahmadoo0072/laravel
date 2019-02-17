;
$("#edit-checkout").click(function() {
    window.location = "/order";
});
$("#pui-form").submit(function(event) {
    event.preventDefault();

    var cartStr = [];

    cartStr[0] = $("#pui-kits h2").text();
    cartStr[0] = cartStr[0].replace("Your ", "");
    cartStr[0] = cartStr[0].replace(" Skins", "");

    $('#pui-kits-target--list li ul li div div .field-content').each(function(j) {
        cartStr[j + 1] = $(this).text();
    });
    console.log(cartStr);
    $.ajax({
        type: "POST",
        url: "/cart/add/1",
        data: { Cart: cartStr.toString() },
        success: function(data) {
            console.log(data);
            //location.reload(true);
        },
        failure: function(errMsg) { alert(errMsg); }
    });
});
//#total-cart-price
//.totalable-amount
$total = 0;
$(".totalable-amount").each(function(j) {
    var str = $(this).text();
    $total += parseFloat(str.replace('$', ''));
});
$('#total-cart-price').text('$' + $total);