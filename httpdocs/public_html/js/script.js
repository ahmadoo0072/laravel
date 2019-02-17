$(function() {
    $('#step-1-next').click(function(e) {
        e.preventDefault();
        if($('input[name=customer_phone]').val().length>0) {
            $.ajax({
                type:'POST',
                url:'/order',
                data:{
                    _token : $('input[name=_token]').val(),
                    customer_name : $('input[name=customer_name]').val(),
                    customer_phone : $('input[name=customer_phone]').val(),
                    is_ajax : 1
                },
                success:function(data){
                    $('.nav-tabs > li:nth-of-type(2) > a').removeClass('disabled').click();
                    $('li.validation-error').remove();
                    $(this).removeClass('order-form-error');
                }
            });
        }
    });
    
    $('#kubahub').click(function(e) {
        e.preventDefault();
        $( ".kuba" ).append( '<div class="col-md-6"><div class="form-group"><select name="color[]" class="form-control"><option value="matte_black">Matte Black</option><option value="jet_black">Jet Black</option><option value="matte_white">Matte White</option><option value="white_carbon_fiber">White Carbon Fiber</option><option value="black_carbon_fiber">Black Carbon Fiber</option><option value="red_carbon_fiber">Red Carbon Fiber</option><option value="blue_carbon_fiber">Blue Carbon Fiber</option><option value="hyper_black_titanium">Hyper Black Titanium</option><option value="brushed_silver">Brushed Silver</option><option value="brushed_gold">Brushed Gold</option><option value="matte_purple">Matte Purple</option><option value="matte_blue">Matte Blue</option><option value="matte_yellow">Matte Yellow</option><option value="matte_orange">Matte Orange</option><option value="matte_red">Matte Red</option><option value="nacked">Nacked</option><option value="transparent_matte">Transparent Matte</option><option value="dark_wooden">Dark Wooden</option></select></div></div><div class="col-md-6"><div class="form-group"><input class="form-control required" placeholder="" name="model[]" type="text"></div></div>' );
    });
});