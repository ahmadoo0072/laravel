<?php
session_start();
?>
<!DOCTYPE html>
<!--[if IEMobile 7]><html class="no-js ie iem7" lang="en" dir="ltr"><![endif]-->
<!--[if lte IE 6]><html class="no-js ie lt-ie9 lt-ie8 lt-ie7" lang="en" dir="ltr"><![endif]-->
<!--[if (IE 7)&(!IEMobile)]><html class="no-js ie lt-ie9 lt-ie8" lang="en" dir="ltr"><![endif]-->
<!--[if IE 8]><html class="no-js ie lt-ie9" lang="en" dir="ltr"><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><html class="no-js ie" lang="en" dir="ltr"><![endif]-->
<!--[if !IE]><!-->
<html class="no-js" lang="en" dir="ltr">
<!--<![endif]-->

<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!-- /Added by HTTrack -->

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <title>Cart // ACellShop</title>
    <?php require 'shop/header.php';
    
    if(isset($_SESSION["cart"])){
        $cart=$_SESSION["cart"];
        $item = <<<EOT
            <div class="l-main" id="main">
                <a id="main-content"></a>
                <h1 class="l-main-title">
                    <div class="inner">Cart</div>
                </h1>
                <div class="l-content" role="article">
                    <div class="view view-commerce-cart-form view-id-commerce_cart_form view-display-id-default view-commerce-cart-content view-dom-id-e102ffb8c2d6ad34002f24780a782287">
                        <div class="view-content">
                            <div class="view__inner">
                                <div class="commerce-line-item-views-form">
                                    <form accept-charset="UTF-8" id="views-form-commerce-cart-form-default" method="post" action="/cart" class="views-form-commerce-cart-form-default">
                                        <div>
EOT;
        $k=0;
        for($i=0;$i<sizeof($cart);$i++)
        {
            $item .= <<<EOT
                                            <div class="view-grouping">
                                                <h2 class="view-grouping-header">
                                                    <a class="inner" href="#">
                                                        <div class="field field--name-field-device-name-auto field--type-text field--label-hidden">
                                                        {$cart[$i][0]}</div>
                                                    </a>
                                                </h2>
                                                <div class="view-grouping-content">
EOT;
            $j=1;
            while($j<sizeof($cart[$i])){
                $k++;
                                                    $item .= <<<EOT
                                                    <div id="{$k}" class="views-row">
                                                        <div class="views-field-inventory-wrapper">
                                                            <div class="views-field views-field-field-coverage-auto views-field-inventory">
                                                                <div class="field-content">{$cart[$i][$j++]}</div>
                                                            </div>
                                                            <div class="views-field views-field-field-texture views-field-inventory">
                                                                <div class="field-content">{$cart[$i][$j++]}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="views-field-details-wrapper">
                                                            <div class="views-field views-field-commerce-unit-price views-field-details views-field-price">
                                                                <div class="field-content">
                                                                    <table class="inline commerce-price-savings-formatter-prices commerce-price-savings-formatter-prices-inline commerce-price-savings-formatter-prices-count-1 commerce-price-savings-formatter-prices-unchanged">
                                                                        <tbody>
                                                                            <tr class="commerce-price-savings-formatter-price-row odd">
                                                                                <td class="commerce-price-savings-formatter-list">
                                                                                    <span class="price-amount">{$cart[$i][$j++]}</span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                            <div class="views-field views-field-edit-quantity views-field-details views-field-edit">
                                                                <div class="field-content">
                                                                    <div class="form-item form-item-edit-quantity-6 form-type-numberfield form-type--text form-type--text-monoline">
                                                                        <div class="form-item__inner">
                                                                        <input type="number" class="form-text form-number" min="0" step="1"
                                                                                value="1" id="edit-edit-quantity-6"
                                                                                title="Change quantity">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="views-field views-field-edit-delete views-field-details views-field-edit">
                                                                <div class="field-content">
                                                                    <input type="button" onclick="deleteItem({$k})" value="X" title="Remove" class="delete-line-item icn-font btn form-submit button">
                                                                </div>
                                                            </div>
                                                            <div class="views-field views-field-commerce-total views-field-details views-field-price">
                                                                <div class="field-content">
                                                                    <table class="inline commerce-price-savings-formatter-prices commerce-price-savings-formatter-prices-inline commerce-price-savings-formatter-prices-count-1 commerce-price-savings-formatter-prices-unchanged">
                                                                        <tbody>
                                                                            <tr class="commerce-price-savings-formatter-price-row odd">
                                                                                <td class="commerce-price-savings-formatter-list"><span class="totalable-amount price-amount">{$cart[$i][$j++]}</span></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
EOT;
}

$item .= <<<EOT
                                                </div>
                                            </div>
EOT;
        }
        $item .= <<<EOT
                                            <div class="commerce-order-handler-area-order-total">
                                                <ul class="commerce-price-formatted-components">
                                                    <li class="component-item component-type-commerce-price-formatted-amount"><span class="component-entry component-title">Order total:</span> <span class="component-entry component-total" id="total-cart-price">$</span></li>
                                                </ul>
                                            </div>
                                            <div id="edit-actions" class="form-actions commerce-line-item-actions form-wrapper">
                                                <input type="button" class="btn form-submit button" value="Checkout" name="op" id="edit-checkout">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="l-breadcrumb">
                    <h2 class="element-invisible">You are here</h2>
                    <ul class="breadcrumb">
                        <li class="itm breadcrumb-start"><a href="/"><i aria-hidden="true" class="icn">⋈</i><span class="title">Home</span></a></li>
                        <li class="itm"><span class="custom-breadcrumbs-none">Empty Cart</span></li>
                    </ul>
                </nav>
            </div>
EOT;
    echo $item;
    }
    else{
        echo <<<EOT
        <div class="l-main" id="main">
            <a id="main-content"></a>                
            <div class="l-content" role="article">
                <article class="node node--feature-article node--full node--feature-article--full feature-article--empty-cart feature-article--img--hasImage feature-article--theme--bright theme--bright feature-article--var--default" style="background-color:#eeeef0;" role="article">
                    <div id="node-feature-article-full-group-content" class="group group-content">
                        <div class="group__inner">
                            <div id="node-feature-article-full-group-copy" class="group group-copy">
                                <h2 class="field--headline">Your Cart is Empty</h2>
                                <h3 class="field field--name-field-subheadline field--type-text field--label-hidden">
                                    I'm sorry Dave, I'm afraid there's nothing here.  </h3>
                                <div class="field field--name-body field--type-text-with-summary field--label-hidden">
                                    It appears that your shopping cart is empty. We're eagerly awaiting your money. Remember: the more you spend, the quicker we all get to buy Lamborghinis.  </div>
                                <nav class="field field--name-field-link field--type-link-field field--label-hidden">
                                    <a class="btn btn--main-action" title="Check out our shop!" href="../shop.php">Start Shopping</a> 
                                </nav>
                            </div>
                            <figure id="node-feature-article-full-group-figure" class="group group-figure">
                                <img width="1066" height="1085" title="Feed me." alt="" src="http://acellshop.com/sites/default/files/images/features/hal9000-ibk-cart-empty.jpg">
                            </figure>
                        </div>
                    </div>
                </article>
            </div>
            <nav class="l-breadcrumb">
                <h2 class="element-invisible">You are here</h2>
                <ul class="breadcrumb">
                    <li class="itm breadcrumb-start">
                        <a href="/">
                    <i aria-hidden="true" class="icn">⋈</i>
                    <span class="title">Home</span></a></li>
                    <li class="itm"><span class="custom-breadcrumbs-none">Empty Cart</span></li>
                </ul>
            </nav>
        </div>
EOT;
    }
    ?>
    
    <?php require 'shop/footer.php'; ?>