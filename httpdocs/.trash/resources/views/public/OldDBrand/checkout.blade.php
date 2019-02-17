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
    <?php require 'shop/header.php'; ?>
        <div id="main" class="l-main">
            <a id="main-content"></a>
            <h1 class="l-main-title">
                <div class="inner">Checkout</div>
            </h1>
            <div role="article" class="l-content page--commerce-checkout-form-checkout">
                <form class="commerce-checkout-form-checkout" method="post" id="commerce-checkout-form-checkout" accept-charset="UTF-8">
                    <div>
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
    $curl_handle = curl_init();
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
    }
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

        
    <footer class="l-footer" role="contentinfo">
            <section class="l-region l-region--interact">
                <div class="inner">
                    <nav id="block-menu-menu-social-connection" role="navigation" class="block block--menu block--menu-menu-social-connection">
                        <h4 class="block__title">Meet our SocialBots</h4>

                        <ul class="list">
                            <li class="first leaf itm itm--facebook"><a href="https://www.facebook.com/dbrandSkins" class="facebook" target="_blank"><span class="inner"><i class="icn" aria-hidden="true">f</i><span class="title">Like us on Facebook</span></span></a></li>
                            <li class="leaf itm itm--twitter"><a href="https://twitter.com/dbrandSkins" class="twitter"><span class="inner"><i class="icn" aria-hidden="true">t</i><span class="title">Follow Us on Twitter</span></span></a></li>
                            <li class="last leaf itm itm--youtube"><a href="https://www.youtube.com/dbrandSkins" class="youtube" target="_blank"><span class="inner"><i class="icn" aria-hidden="true">y</i><span class="title">Subscribe to our YouTube Channel</span></span></a></li>
                        </ul>
                    </nav>
                    <nav id="block-mailchimp-lists-newsletter-guests" class="block block--mailchimp-lists block--mailchimp-lists-newsletter-guests block--newsletter">
                        <form class="mailchimp-lists-user-subscribe-form mailchimp-lists-user-subscribe-form-newsletter-guests" action="/iphone-skins"
                            method="post" id="mailchimp-lists-user-subscribe-form-newsletter-guests" accept-charset="UTF-8">
                            <div>
                                <div id="mailchimp-newsletter-newsletter_guests" class="mailchimp-newsletter-wrapper">
                                    <div id="edit-mailchimp-lists-mailchimp-newsletter-guests-title" class="form-item form-type-item">
                                        <div class="form-item__inner">Receive Updates & Offers</div>
                                        <div class="description">Stay up-to-date on new updates, temporary coupons and special offers, targeted at
                                            humans and robots alike!</div>
                                    </div>
                                    <div class="form-item form-item-mailchimp-lists-mailchimp-newsletter-guests-mergevars-EMAIL form-type-emailfield form-type--text form-type--text-monoline">
                                        <label for="edit-mailchimp-lists-mailchimp-newsletter-guests-mergevars-email"><span class="label__inner">Receive Updates &amp; Offers<span class="form-required" title="This field is required.">*</span></span></label>
                                        <div class="form-item__inner"><input placeholder="[ Email Address ]" type="email" id="edit-mailchimp-lists-mailchimp-newsletter-guests-mergevars-email"
                                                name="mailchimp_lists[mailchimp_newsletter_guests][mergevars][EMAIL]" value=""
                                                size="16" maxlength="128" class="form-text form-email required" /></div>
                                    </div>
                                    <div class="form-item form-item-mailchimp-lists-mailchimp-newsletter-guests-mergevars-NAME form-type-textfield form-type--text form-type--text-monoline">
                                        <label for="edit-mailchimp-lists-mailchimp-newsletter-guests-mergevars-name"><span class="label__inner">Name</span></label>
                                        <div class="form-item__inner"><input type="text" id="edit-mailchimp-lists-mailchimp-newsletter-guests-mergevars-name"
                                                name="mailchimp_lists[mailchimp_newsletter_guests][mergevars][NAME]" value="Human"
                                                size="25" maxlength="128" class="form-text" /></div>
                                    </div>
                                </div>
                                <input type="submit" id="edit-submit" name="op" value="Sign Up" class="btn form-submit button"
                                />
                            </div>
                        </form>
                    </nav>
                </div>
            </section>
            <section class="l-region l-region--resources">
                <div class="inner">
                    <nav id="block-menu-menu-skins" role="navigation" class="block block--menu block--menu-menu-skins">
                        <h4 class="block__title">Skins</h4>

                        <ul class="list">
                            <li class="first leaf itm itm--hfx-sbracks"><a href="/iphone-skins" class="hfx-sbracks">iPhone Skins</a></li>
                            <li class="leaf itm itm--hfx-sbracks"><a href="/samsung-galaxy-skins" class="hfx-sbracks">Samsung Galaxy Skins</a></li>
                            <li class="leaf itm itm--hfx-sbracks"><a href="/macbook-skins" class="hfx-sbracks">MacBook Skins</a></li>
                            <li class="leaf itm itm--hfx-sbracks"><a href="/nexus-skins" class="hfx-sbracks">Nexus Skins</a></li>
                            <li class="leaf itm itm--hfx-sbracks"><a href="/razer-blade-skins" class="hfx-sbracks">Razer Blade Skins</a></li>
                            <li class="leaf itm itm--hfx-sbracks"><a href="/lg-g-skins" class="hfx-sbracks">LG G Skins</a></li>
                            <li class="last leaf itm itm--hfx-sbracks"><a href="/xperia-skins" class="hfx-sbracks">Xperia Skins</a></li>
                        </ul>
                    </nav>
                    <nav id="block-menu-menu-orders" role="navigation" class="block block--menu block--menu-menu-orders">
                        <h4 class="block__title">More Skins</h4>

                        <ul class="list">
                            <li class="first leaf itm itm--hfx-sbracks"><a href="/audio-technica-skins" class="hfx-sbracks">Audio Technica Skins</a></li>
                            <li class="leaf itm itm--hfx-sbracks"><a href="/dell-xps-skins" class="hfx-sbracks">Dell XPS Skins</a></li>
                            <li class="leaf itm itm--hfx-sbracks"><a href="/moto-skins" class="hfx-sbracks">Moto Skins</a></li>
                            <li class="leaf itm itm--hfx-sbracks"><a href="/htc-skins" class="hfx-sbracks">HTC Skins</a></li>
                            <li class="leaf itm itm--hfx-sbracks"><a href="/oneplus-skins" class="hfx-sbracks">OnePlus Skins</a></li>
                            <li class="leaf itm itm--hfx-sbracks"><a href="/ipad-skins" class="hfx-sbracks">iPad Skins</a></li>
                            <li class="last leaf itm itm--hfx-sbracks"><a href="/xbox-ps4-skins" class="hfx-sbracks">Xbox &amp; PlayStation Skins</a></li>
                        </ul>
                    </nav>
                    <nav id="block-menu-menu-bits-and-bytes" role="navigation" class="block block--menu block--menu-menu-bits-and-bytes">
                        <h4 class="block__title"> Bits and Bytes</h4>

                        <ul class="list">
                            <li class="first leaf itm itm--hfx-sbracks"><a href="/contact" class="hfx-sbracks">Contact Us</a></li>
                            <li class="leaf itm itm--hfx-sbracks"><a href="/contests" class="hfx-sbracks">Contests</a></li>
                            <li class="last leaf itm itm--hfx-sbracks"><a href="/winners" class="hfx-sbracks">UnboxTherapy Giveaway</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
            <section class="l-region l-region--footer">
                <div class="inner">
                    <div id="block-block-1" class="block block--block block--block-1 block--copyright">
                        ACellShop ©3016 - All rights reserved.</div>
                    <nav id="block-menu-menu-footer" role="navigation" class="block block--menu block--menu-menu-footer">

                        <ul class="list">
                            <li class="first leaf itm itm--hfx-dualframe-h"><a href="/about/terms-of-sale" class="hfx-dualframe-h">Terms of Sale</a></li>
                            <li class="leaf itm itm--hfx-dualframe-h"><a href="/about/privacy-policy" class="hfx-dualframe-h">Privacy Policy</a></li>
                            <li class="last leaf itm itm--hfx-dualframe-h"><a href="/about/terms-of-use" class="hfx-dualframe-h">Terms of Use</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </footer>

        <div id="page-overlay" class="l-page-overlay"></div>

    </div>

    <!-- BEGIN Google Code for Remarketing Tag -->
    <!-- http://google.com/ads/remarketingsetup -->
    <script type="text/javascript">
        /* <![CDATA[ */
        var google_conversion_id = 968322868;
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        /* ]]> */
    </script>
    <div class="element-invisible">
        <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>
    </div>
    <noscript>
        <div style="display:inline;">
            <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/968322868/?value=0&amp;guid=ON&amp;script=0"
            />
        </div>
    </noscript>
    <!-- END Google Code for Remarketing Tag -->

    <!-- Fresh URL by wistia.com -->
    <script src="//fast.wistia.net/labs/fresh-url/v1.js" async></script>

    <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"7619304e7b","applicationID":"5390901","transactionName":"ZAZTMUNWDBAEB0xdXV1McAZFXg0NSgdXWV9WEVIAblQKBgYPV0FGbBFeEEVSEA==","queueTime":0,"applicationTime":129,"atts":"SEFQRwtMHx4=","errorBeacon":"bam.nr-data.net","agent":""}</script>

    <script src="../checkout.js" async></script>
    
    </body>
</html>
