<!DOCTYPE html>
<!--[if IEMobile 7]><html class="no-js ie iem7" lang="en" dir="ltr"><![endif]-->
<!--[if lte IE 6]><html class="no-js ie lt-ie9 lt-ie8 lt-ie7" lang="en" dir="ltr"><![endif]-->
<!--[if (IE 7)&(!IEMobile)]><html class="no-js ie lt-ie9 lt-ie8" lang="en" dir="ltr"><![endif]-->
<!--[if IE 8]><html class="no-js ie lt-ie9" lang="en" dir="ltr"><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><html class="no-js ie" lang="en" dir="ltr"><![endif]-->
<!--[if !IE]><!-->
<html class="no-js" lang="en" dir="ltr">
<!--<![endif]-->

<head>
    <title>Checkout // ACellShop</title>
    @include('public.OldDBrand.shop.header')
        <div id="main" class="l-main">
            <a id="main-content"></a>
            <h1 class="l-main-title">
                <div class="inner">Checkout</div>
            </h1>
            <div role="article" class="l-content page--commerce-checkout-form-checkout">
                <form class="commerce-checkout-form-checkout" method="post" id="commerce-checkout-form-checkout" accept-charset="UTF-8">
                    <div>
                    <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
                        <fieldset class="account form-wrapper" id="edit-account">
                            <legend><span class="fieldset-legend">Account information</span></legend>
                            <div class="fieldset-wrapper">
                                <div id="account-login-container">
                                    <div id="edit-account-login" class="form-wrapper">
                                    
                                        <div class="form-item form-item-account-login-mail form-type-textfield form-type--text form-type--text-monoline">
                                            <label for="edit-account-login-mail">
                                                <span class="label__inner">Phone Number<span class="form-required" title="This field is required.">*</span></span>
                                            </label>
                                            <div class="form-item__inner">
                                                <input type="text" id="phoneNumber" value="" size="60" maxlength="128" class="form-text required" />
                                            </div>
                                        </div>

                                        <div class="form-item form-item-account-login-mail form-type-textfield form-type--text form-type--text-monoline">
                                            <label for="edit-account-login-mail">
                                                <span class="label__inner">E-mail address<span class="form-required" title="This field is required.">*</span></span>
                                            </label>
                                            <div class="form-item__inner">
                                                <input autocomplete="email" type="text" id="emailAdress" value="" size="60" maxlength="128" class="form-text required" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="customer_profile_billing form-wrapper" id="edit-customer-profile-billing">
                            <legend><span class="fieldset-legend">Billing information</span></legend>
                            <div class="fieldset-wrapper">
                                <div class="field-type-addressfield field-name-commerce-customer-address field-widget-addressfield-standard form-wrapper"
                                    id="edit-customer-profile-billing-commerce-customer-address">
                                    <div id="customer-profile-billing-commerce-customer-address-add-more-wrapper">
                                        <div id="addressfield-wrapper">
                                            <div id="edit-customer-profile-billing-commerce-customer-address-und-0" class="form-wrapper">
                                                <div class="form-item form-item-customer-profile-billing-commerce-customer-address-und-0-country form-type-select form-type--selectbox">
                                                    <label for="edit-customer-profile-billing-commerce-customer-address-und-0-country"><span class="label__inner">Country<span class="form-required" title="This field is required.">*</span></span></label>
                                                    <div class="form-item__inner">
                                                        <select id="country" class="country form-select required" autocomplete="country" id="edit-customer-profile-billing-commerce-customer-address-und-0-country">
                                                            <option value="PK">Pakistan</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="addressfield-container-inline name-block">
                                                    <div class="form-item form-item-customer-profile-billing-commerce-customer-address-und-0-name-line form-type-textfield form-type--text form-type--text-monoline">
                                                        <label for="edit-customer-profile-billing-commerce-customer-address-und-0-name-line">
                                                            <span class="label__inner">Full name<span class="form-required" title="This field is required.">*</span></span>
                                                        </label>
                                                        <div class="form-item__inner">
                                                            <input class="name-block form-text required" autocomplete="name" type="text" id="name" value="" size="30" maxlength="30" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="street-block">
                                                    <div class="form-item form-item-customer-profile-billing-commerce-customer-address-und-0-thoroughfare form-type-textfield form-type--text form-type--text-monoline">
                                                        <label for="edit-customer-profile-billing-commerce-customer-address-und-0-thoroughfare">
                                                            <span class="label__inner">Address 1<span class="form-required" title="This field is required.">*</span></span>
                                                        </label>
                                                        <div class="form-item__inner">
                                                            <input class="thoroughfare form-text required" autocomplete="address-line1" type="text" id="address1" value="" size="30" maxlength="50" />
                                                        </div>
                                                    </div>
                                                    <div class="form-item form-item-customer-profile-billing-commerce-customer-address-und-0-premise form-type-textfield form-type--text form-type--text-monoline">
                                                        <label>
                                                            <span class="label__inner">Address 2</span>
                                                        </label>
                                                        <div class="form-item__inner">
                                                            <input class="premise form-text" autocomplete="address-line2" type="text"
                                                                id="address1"
                                                                value="" size="30" maxlength="50" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="addressfield-container-inline locality-block">
                                                    
                                                    <div class="form-item form-item-customer-profile-billing-commerce-customer-address-und-0-administrative-area form-type-select form-type--selectbox">
                                                        <label for="edit-customer-profile-billing-commerce-customer-address-und-0-administrative-area"><span class="label__inner">City<span class="form-required" title="This field is required.">*</span></span></label>
                                                        <div class="form-item__inner">
                                                            <select class="state form-select required" autocomplete="address-level1" 
                                                            id="city">
<?php
    /*$curl_handle = curl_init();
    curl_setopt($curl_handle, CURLOPT_URL, 'http://www.leopardscod.com/webservice/getAllCities/format/json/'); // Write here Test or Production Link
    curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl_handle, CURLOPT_POST, 1);
    curl_setopt($curl_handle, CURLOPT_POSTFIELDS, array(
        'api_key' => '21AD2130166164213ECE2276F3872EFD',
        'api_password' => 'MKRNAQEEBI6402225'
    ));

    $buffer = curl_exec($curl_handle);
    curl_close($curl_handle);
    $json= json_decode($buffer);

    echo $json->city_list[0]->name;

    foreach ($json->city_list as $key=>$value) {
        echo '<option value="'.$value->id.'">'. $value->name.'</option>';
    }*/
?>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form-item form-item-customer-profile-billing-commerce-customer-address-und-0-postal-code form-type-textfield form-type--text form-type--text-monoline">
                                                        <label for="edit-customer-profile-billing-commerce-customer-address-und-0-postal-code">
                                                            <span class="label__inner">ZIP code<span class="form-required" title="This field is required.">*</span></span>
                                                        </label>
                                                        <div class="form-item__inner">
                                                            <input class="postal-code form-text required" autocomplete="postal-code" type="text" id="postalCode" value="" size="10" maxlength="11" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="checkout-buttons form-wrapper" id="edit-buttons">
                            <div class="fieldset-wrapper">
                                <input class="checkout-continue btn form-submit button" type="submit" id="edit-continue" name="op" value="Submit to Shipping" />
                                <span class="checkout-processing element-invisible"></span>
                                <span class="button-operator">or</span>
                                <input class="checkout-cancel btn form-submit button" type="submit" id="edit-cancel" name="op" value="Cancel" />
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>

            <nav class="l-breadcrumb">
                <h2 class="element-invisible">You are here</h2>
                <ul class="breadcrumb">
                    <li class="itm breadcrumb-start"><a href="/"><i class="icn" aria-hidden="true">&#8904;</i><span class="title">Home</span></a></li>
                    <li
                        class="itm"><a href="/checkout">Checkout</a></li>
                        <li class="itm"><span class="nolink">Checkout</span></li>
                </ul>
            </nav>
        </div>

    @include('public.OldDBrand.shop.footer')