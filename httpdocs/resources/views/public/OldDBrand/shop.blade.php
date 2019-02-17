@extends('public.layouts.main')

@section('title')
    @parent Shop
@stop

@section('content')
    <div id="main" class="l-main">
        <a id="main-content"></a>
        <h1 class="l-main-title">
                <div class="inner">Shop</div>
            </h1>
        <div role="article" class="l-content">

            
            <div id="pli" class="device-catalog-page device-catalog-wrapper device-catalog-interface">
    <div class="group group--device-finder group--full">
        <div class="group__inner">
            <div class="label-wrapper">
                <h3 class="pli-finder-label catalog-title"><span class="inner">Find your device</span></h3>
            </div>
            <div class="input-wrapper">
                <button id="pli-finder-cancel" class="pli-finder-cancel" type="button"><i class="icn">x</i></button>
                <input id="pli-finder-input" name="pli-finder-input" class="pli-finder-input" type="text" autofocus="autofocus" placeholder="6P, Nexus, Apple, Gaming, ..." />
            </div>
            <div id="pli-finder-empty-result" class="empty-result-message">
                <p>Sorry, Human. The device you're looking for is not currently in our portfolio.</p>
            </div>
        </div>
    </div>
        <!--div class="group group--top-device-collectives device-catalog group--full">
            <div class="group__inner">
                <h2 class="catalog-title">Most popular</h2>
                <div class="devices-list">
                    <div class="group-itm">
                        <div class="grouper">
                            <div class="inner">&#x2605;</div>
                        </div>
                        <div class="devices-sublist">
                                                            <li class="device-itm">
                                    <a href="nexus-skins" class="device">
                                        <figure class="device-figure">
                                            <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/nexus-6p/_thumb.png" title="Nexus Skins" alt="Nexus Skins">
                                        </figure>
                                        <div class="device-title-wrapper">
                                            <h2 class="device-name">Nexus</h2>
                                            <div class="device-manufacturer">Skins</div>
                                        </div>
                                    </a>
                                </li>
                                                            <li class="device-itm">
                                    <a href="iphone-skins" class="device">
                                        <figure class="device-figure">
                                            <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/iphone-6/_thumb.png" title="iPhone Skins" alt="iPhone Skins">
                                        </figure>
                                        <div class="device-title-wrapper">
                                            <h2 class="device-name">iPhone</h2>
                                            <div class="device-manufacturer">Skins</div>
                                        </div>
                                    </a>
                                </li>
                                                            <li class="device-itm">
                                    <a href="samsung-galaxy-skins" class="device">
                                        <figure class="device-figure">
                                            <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/galaxy-note-5/_thumb.png" title="Galaxy Skins" alt="Galaxy Skins">
                                        </figure>
                                        <div class="device-title-wrapper">
                                            <h2 class="device-name">Galaxy</h2>
                                            <div class="device-manufacturer">Skins</div>
                                        </div>
                                    </a>
                                </li>
                                                            <li class="device-itm">
                                    <a href="macbook-skins" class="device">
                                        <figure class="device-figure">
                                            <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/macbook-retina-12-new/_thumb.png" title="MacBook Skins" alt="MacBook Skins">
                                        </figure>
                                        <div class="device-title-wrapper">
                                            <h2 class="device-name">MacBook</h2>
                                            <div class="device-manufacturer">Skins</div>
                                        </div>
                                    </a>
                                </li>
                                                    </div>
                    </div>
                </div>
            </div>
        </div-->
        <div class="group group--devices device-catalog group--full">
        <div class="group__inner">
            <h2 class="catalog-title">All devices</h2>
            <ul id="pli-device-list" class="devices-list">
                                    <li id="pli-device-group--A" class="group-itm">
                        <div class="grouper">
                            <div class="inner">A</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--axon-7" class="device-itm  pli-device-itm">
                                    <a href="shop/zte-axon-7-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/axon-7/_thumb.png" title="Axon 7 Skins" alt="Axon 7 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">ZTE</div>
        <h2 class="device-name">Axon 7<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--G" class="group-itm">
                        <div class="grouper">
                            <div class="inner">G</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--galaxy-note-7" class="device-itm  pli-device-itm">
                                    <a href="shop/samsung-galaxy-note-7-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/galaxy-note-7/_thumb.png" title="Galaxy Note 7 Skins" alt="Galaxy Note 7 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Samsung</div>
        <h2 class="device-name">Galaxy Note 7<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--galaxy-s7" class="device-itm  pli-device-itm">
                                    <a href="shop/samsung-galaxy-s7-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/galaxy-s7/_thumb.png" title="Galaxy S7 Skins" alt="Galaxy S7 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Samsung</div>
        <h2 class="device-name">Galaxy S7<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--galaxy-s7-edge" class="device-itm  pli-device-itm">
                                    <a href="shop/samsung-galaxy-s7-edge-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/galaxy-s7-edge/_thumb.png" title="Galaxy S7 Edge Skins" alt="Galaxy S7 Edge Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Samsung</div>
        <h2 class="device-name">Galaxy S7 Edge<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--galaxy-s7-active" class="device-itm  pli-device-itm">
                                    <a href="shop/galaxy-s7-active-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/galaxy-s7-active/_thumb.png" title="Galaxy S7 Active Skins" alt="Galaxy S7 Active Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Samsung</div>
        <h2 class="device-name">Galaxy S7 Active<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--galaxy-note-5" class="device-itm  pli-device-itm">
                                    <a href="shop/galaxy-note-5" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/galaxy-note-5/_thumb.png" title="Galaxy Note 5 Skins" alt="Galaxy Note 5 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Samsung</div>
        <h2 class="device-name">Galaxy Note 5<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--galaxy-s6" class="device-itm  pli-device-itm">
                                    <a href="shop/galaxy-s6" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/galaxy-s6/_thumb.png" title="Galaxy S6 Skins" alt="Galaxy S6 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Samsung</div>
        <h2 class="device-name">Galaxy S6<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--galaxy-s6-edge" class="device-itm  pli-device-itm">
                                    <a href="shop/galaxy-s6-edge" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/galaxy-s6-edge/_thumb.png" title="Galaxy S6 Edge Skins" alt="Galaxy S6 Edge Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Samsung</div>
        <h2 class="device-name">Galaxy S6 Edge<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--galaxy-note-4" class="device-itm  pli-device-itm">
                                    <a href="shop/galaxy-note-4" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/galaxy-note-4/_thumb.png" title="Galaxy Note 4 Skins" alt="Galaxy Note 4 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Samsung</div>
        <h2 class="device-name">Galaxy Note 4<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--galaxy-s6-edge-plus" class="device-itm  pli-device-itm">
                                    <a href="shop/galaxy-s6-edge-plus" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/galaxy-s6-edge-plus/_thumb.png" title="Galaxy S6 Edge+ Skins" alt="Galaxy S6 Edge+ Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Samsung</div>
        <h2 class="device-name">Galaxy S6 Edge+<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--galaxy-s6-active" class="device-itm  pli-device-itm">
                                    <a href="shop/galaxy-s6-active" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/galaxy-s6-active/_thumb.png" title="Galaxy S6 Active Skins" alt="Galaxy S6 Active Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Samsung</div>
        <h2 class="device-name">Galaxy S6 Active<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--H" class="group-itm">
                        <div class="grouper">
                            <div class="inner">H</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--htc-10" class="device-itm  pli-device-itm">
                                    <a href="shop/htc-10-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/htc-10/_thumb.png" title="HTC 10 Skins" alt="HTC 10 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">HTC</div>
        <h2 class="device-name">HTC 10<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--htc-one-m9" class="device-itm  pli-device-itm">
                                    <a href="shop/htc-one-m9" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/htc-one-m9/_thumb.png" title="HTC One M9 Skins" alt="HTC One M9 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">HTC</div>
        <h2 class="device-name">HTC One M9<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--htc-one-m8" class="device-itm  pli-device-itm">
                                    <a href="shop/htc-one-m8" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/htc-one-m8/_thumb.png" title="HTC One M8 Skins" alt="HTC One M8 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">HTC</div>
        <h2 class="device-name">HTC One M8<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--htc-one-m7" class="device-itm  pli-device-itm">
                                    <a href="shop/htc-one-m7" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/htc-one-m7/_thumb.png" title="HTC One M7 Skins" alt="HTC One M7 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">HTC</div>
        <h2 class="device-name">HTC One M7<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--huawei-p9" class="device-itm  pli-device-itm">
                                    <a href="shop/huawei-p9-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/huawei-p9/_thumb.png" title="P9 Skins" alt="P9 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Huawei</div>
        <h2 class="device-name">P9<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--I" class="group-itm">
                        <div class="grouper">
                            <div class="inner">I</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--iphone-6s" class="device-itm  pli-device-itm">
                                    <a href="shop/iphone-6s" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/iphone-6s/_thumb.png" title="iPhone 6s Skins" alt="iPhone 6s Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPhone 6s<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--iphone-6" class="device-itm  pli-device-itm">
                                    <a href="shop/iphone-6" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/iphone-6/_thumb.png" title="iPhone 6 Skins" alt="iPhone 6 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPhone 6<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--iphone-6s-plus" class="device-itm  pli-device-itm">
                                    <a href="shop/iphone-6s-plus" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/iphone-6s-plus/_thumb.png" title="iPhone 6s Plus Skins" alt="iPhone 6s Plus Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPhone 6s Plus<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--iphone-6-plus" class="device-itm  pli-device-itm">
                                    <a href="shop/iphone-6-plus" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/iphone-6-plus/_thumb.png" title="iPhone 6 Plus Skins" alt="iPhone 6 Plus Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPhone 6 Plus<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--iphone-se" class="device-itm  pli-device-itm">
                                    <a href="shop/iphone-se" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/iphone-se/_thumb.png" title="iPhone SE Skins" alt="iPhone SE Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPhone SE<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--ipad-pro-97" class="device-itm  pli-device-itm">
                                    <a href="shop/ipad-pro-9" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/ipad-pro-97/_thumb.png" title="iPad Pro 9.7 Skins" alt="iPad Pro 9.7 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPad Pro 9.7"<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--ipad-pro-129" class="device-itm  pli-device-itm">
                                    <a href="shop/ipad-pro-12" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/ipad-pro-129/_thumb.png" title="iPad Pro 12.9 Skins" alt="iPad Pro 12.9 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPad Pro 12.9"<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--ipad-air-2" class="device-itm  pli-device-itm">
                                    <a href="shop/ipad-air-2" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/ipad-air-2/_thumb.png" title="iPad Air 2 Skins" alt="iPad Air 2 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPad Air 2<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--ipad-mini-4" class="device-itm  pli-device-itm">
                                    <a href="shop/ipad-mini-4" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/ipad-mini-4/_thumb.png" title="iPad Mini 4 Skins" alt="iPad Mini 4 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPad Mini 4<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--iphone-5s" class="device-itm  pli-device-itm">
                                    <a href="shop/iphone-5s" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/iphone-5s/_thumb.png" title="iPhone 5s Skins" alt="iPhone 5s Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPhone 5s<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--iphone-5" class="device-itm  pli-device-itm">
                                    <a href="shop/iphone-5" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/iphone-5/_thumb.png" title="iPhone 5 Skins" alt="iPhone 5 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPhone 5<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--iphone-4-4s" class="device-itm  pli-device-itm">
                                    <a href="shop/iphone-4-4s" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/iphone-4-4s/_thumb.png" title="iPhone 4/4s Skins" alt="iPhone 4/4s Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple</div>
        <h2 class="device-name">iPhone 4/4s<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--L" class="group-itm">
                        <div class="grouper">
                            <div class="inner">L</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--lg-g5" class="device-itm  pli-device-itm">
                                    <a href="shop/lg-g5-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/lg-g5/_thumb.png" title="G5 Skins" alt="G5 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">LG Electronics</div>
        <h2 class="device-name">G5<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--lg-g4" class="device-itm  pli-device-itm">
                                    <a href="shop/lg-g4" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/lg-g4/_thumb.png" title="G4 Skins" alt="G4 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">LG Electronics</div>
        <h2 class="device-name">G4<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--lg-g3" class="device-itm  pli-device-itm">
                                    <a href="shop/lg-g3" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/lg-g3/_thumb.png" title="G3 Skins" alt="G3 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">LG Electronics</div>
        <h2 class="device-name">G3<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--M" class="group-itm">
                        <div class="grouper">
                            <div class="inner">M</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--macbook-pro-retina-13" class="device-itm  pli-device-itm">
                                    <a href="shop/macbook-pro-retina-13" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/macbook-pro-retina-13/_thumb.png" title="Pro Retina 13 Skins" alt="Pro Retina 13 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple MacBook</div>
        <h2 class="device-name">Pro Retina 13"<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--macbook-pro-retina-15" class="device-itm  pli-device-itm">
                                    <a href="shop/macbook-pro-retina-15" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/macbook-pro-retina-15/_thumb.png" title="Pro Retina 15 Skins" alt="Pro Retina 15 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple MacBook</div>
        <h2 class="device-name">Pro Retina 15"<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--macbook-retina-12-new" class="device-itm  pli-device-itm">
                                    <a href="shop/macbook-retina-12-new" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/macbook-retina-12-new/_thumb.png" title="12 Retina Skins" alt="12 Retina Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple MacBook</div>
        <h2 class="device-name">12" Retina<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--macbook-air-13" class="device-itm  pli-device-itm">
                                    <a href="shop/macbook-air-13" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/macbook-air-13/_thumb.png" title="Air 13 Skins" alt="Air 13 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple MacBook</div>
        <h2 class="device-name">Air 13"<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--macbook-air-11" class="device-itm  pli-device-itm">
                                    <a href="shop/macbook-air-11" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/macbook-air-11/_thumb.png" title="Air 11 Skins" alt="Air 11 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Apple MacBook</div>
        <h2 class="device-name">Air 11"<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--m50x" class="device-itm  pli-device-itm">
                                    <a href="shop/m50x" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/m50x/_thumb.png" title="M50x Skins" alt="M50x Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Audio-Technica</div>
        <h2 class="device-name">M50x<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--m50" class="device-itm  pli-device-itm">
                                    <a href="shop/m50" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/m50/_thumb.png" title="M50 Skins" alt="M50 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Audio-Technica</div>
        <h2 class="device-name">M50<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--m40x" class="device-itm  pli-device-itm">
                                    <a href="shop/m40x" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/m40x/_thumb.png" title="M40x Skins" alt="M40x Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Audio-Technica</div>
        <h2 class="device-name">M40x<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--moto-z-force" class="device-itm  pli-device-itm">
                                    <a href="shop/moto-z-force-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/moto-z-force/_thumb.png" title="Moto Z Force Skins" alt="Moto Z Force Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Motorola</div>
        <h2 class="device-name">Moto Z Force<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--moto-z" class="device-itm  pli-device-itm">
                                    <a href="shop/moto-z-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/moto-z/_thumb.png" title="Moto Z Skins" alt="Moto Z Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Motorola</div>
        <h2 class="device-name">Moto Z<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--moto-x-play" class="device-itm  pli-device-itm">
                                    <a href="shop/moto-x-play" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/moto-x-play/_thumb.png" title="Moto X Play Skins" alt="Moto X Play Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Motorola</div>
        <h2 class="device-name">Moto X Play<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--moto-x-style-pure" class="device-itm  pli-device-itm">
                                    <a href="shop/moto-x-style-pure" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/moto-x-style-pure/_thumb.png" title="Moto X Style Skins" alt="Moto X Style Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Motorola</div>
        <h2 class="device-name">Moto X Style<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--moto-x-2014" class="device-itm  pli-device-itm">
                                    <a href="shop/moto-x-2014" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/moto-x-2014/_thumb.png" title="Moto X (2014) Skins" alt="Moto X (2014) Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Motorola</div>
        <h2 class="device-name">Moto X (2014)<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--moto-x-2013" class="device-itm  pli-device-itm">
                                    <a href="shop/moto-x-2013" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/moto-x-2013/_thumb.png" title="Moto X (2013) Skins" alt="Moto X (2013) Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Motorola</div>
        <h2 class="device-name">Moto X (2013)<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--moto-g-2015" class="device-itm  pli-device-itm">
                                    <a href="shop/moto-g-2015" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/moto-g-2015/_thumb.png" title="Moto G (2015) Skins" alt="Moto G (2015) Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Motorola</div>
        <h2 class="device-name">Moto G (2015)<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--moto-g-2014" class="device-itm  pli-device-itm">
                                    <a href="shop/moto-g-2014" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/moto-g-2014/_thumb.png" title="Moto G (2014) Skins" alt="Moto G (2014) Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Motorola</div>
        <h2 class="device-name">Moto G (2014)<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--moto-g-2013" class="device-itm  pli-device-itm">
                                    <a href="shop/moto-g-2013" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/moto-g-2013/_thumb.png" title="Moto G (2013) Skins" alt="Moto G (2013) Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Motorola</div>
        <h2 class="device-name">Moto G (2013)<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--N" class="group-itm">
                        <div class="grouper">
                            <div class="inner">N</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--nexus-6p" class="device-itm  pli-device-itm">
                                    <a href="shop/nexus-6p" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/nexus-6p/_thumb.png" title="Nexus 6P Skins" alt="Nexus 6P Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Huawei Google</div>
        <h2 class="device-name">Nexus 6P<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--nexus-5x" class="device-itm  pli-device-itm">
                                    <a href="shop/nexus-5x" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/nexus-5x/_thumb.png" title="Nexus 5X Skins" alt="Nexus 5X Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">LG Google</div>
        <h2 class="device-name">Nexus 5X<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--nextbit-robin" class="device-itm  pli-device-itm">
                                    <a href="shop/nextbit-robin" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/nextbit-robin/_thumb.png" title="Robin Skins" alt="Robin Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Nextbit</div>
        <h2 class="device-name">Robin<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--nexus-6" class="device-itm  pli-device-itm">
                                    <a href="shop/nexus-6" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/nexus-6/_thumb.png" title="Nexus 6 Skins" alt="Nexus 6 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Motorola Google</div>
        <h2 class="device-name">Nexus 6<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--nexus-5" class="device-itm  pli-device-itm">
                                    <a href="shop/nexus-5" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/nexus-5/_thumb.png" title="Nexus 5 Skins" alt="Nexus 5 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">LG Google</div>
        <h2 class="device-name">Nexus 5<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--nexus-4" class="device-itm  pli-device-itm">
                                    <a href="shop/nexus-4" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/nexus-4/_thumb.png" title="Nexus 4 Skins" alt="Nexus 4 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">LG Google</div>
        <h2 class="device-name">Nexus 4<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--nexus-9" class="device-itm  pli-device-itm">
                                    <a href="shop/nexus-9" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/nexus-9/_thumb.png" title="Nexus 9 Skins" alt="Nexus 9 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">HTC</div>
        <h2 class="device-name">Nexus 9<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--nexus-7-2013" class="device-itm  pli-device-itm">
                                    <a href="shop/nexus-7-2013" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/nexus-7-2013/_thumb.png" title="Nexus 7 (2013) Skins" alt="Nexus 7 (2013) Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">ASUS Google</div>
        <h2 class="device-name">Nexus 7 (2013)<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--nexus-7-2012" class="device-itm  pli-device-itm">
                                    <a href="shop/nexus-7-2012" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/nexus-7-2012/_thumb.png" title="Nexus 7 (2012) Skins" alt="Nexus 7 (2012) Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">ASUS Google</div>
        <h2 class="device-name">Nexus 7 (2012)<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--O" class="group-itm">
                        <div class="grouper">
                            <div class="inner">O</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--oneplus-3" class="device-itm  pli-device-itm">
                                    <a href="shop/oneplus-3-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/oneplus-3/_thumb.png" title="3 Skins" alt="3 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">OnePlus</div>
        <h2 class="device-name">3<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--oneplus-x" class="device-itm  pli-device-itm">
                                    <a href="shop/oneplus-x" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/oneplus-x/_thumb.png" title="X Skins" alt="X Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">OnePlus</div>
        <h2 class="device-name">X<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--oneplus-2" class="device-itm  pli-device-itm">
                                    <a href="shop/oneplus-2" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/oneplus-2/_thumb.png" title="2 Skins" alt="2 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">OnePlus</div>
        <h2 class="device-name">2<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--oneplus-one" class="device-itm  pli-device-itm">
                                    <a href="shop/oneplus-one" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/oneplus-one/_thumb.png" title="One Skins" alt="One Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">OnePlus</div>
        <h2 class="device-name">One<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--P" class="group-itm">
                        <div class="grouper">
                            <div class="inner">P</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--playstation-4" class="device-itm  pli-device-itm">
                                    <a href="shop/sony-ps4-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/playstation-4/_thumb.png" title="PlayStation 4 Skins" alt="PlayStation 4 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Sony</div>
        <h2 class="device-name">PlayStation 4<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--pebble-time" class="device-itm  pli-device-itm">
                                    <a href="shop/pebble-time" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/pebble-time/_thumb.png" title="Pebble Time Skins" alt="Pebble Time Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Pebble Technology</div>
        <h2 class="device-name">Pebble Time<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--pebble-watch" class="device-itm  pli-device-itm">
                                    <a href="shop/pebble-watch" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/pebble-watch/_thumb.png" title="Pebble Watch Skins" alt="Pebble Watch Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Pebble Technology</div>
        <h2 class="device-name">Pebble Watch<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--playstation-3" class="device-itm  pli-device-itm">
                                    <a href="shop/playstation-3" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/playstation-3/_thumb.png" title="PlayStation 3 Skins" alt="PlayStation 3 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Sony</div>
        <h2 class="device-name">PlayStation 3<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--playstation-vita" class="device-itm  pli-device-itm">
                                    <a href="shop/playstation-vita" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/playstation-vita/_thumb.png" title="PlayStation Vita Skins" alt="PlayStation Vita Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Sony</div>
        <h2 class="device-name">PlayStation Vita<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--R" class="group-itm">
                        <div class="grouper">
                            <div class="inner">R</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--razer-blade-stealth" class="device-itm  pli-device-itm">
                                    <a href="shop/razer-blade-stealth-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/razer-blade-stealth/_thumb.png" title="Blade Stealth Skins" alt="Blade Stealth Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Razer</div>
        <h2 class="device-name">Blade Stealth<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--razer-blade-14-2016" class="device-itm  pli-device-itm">
                                    <a href="shop/razer-blade-14-2016-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/razer-blade-14-2016/_thumb.png" title="Blade 14 (2016) Skins" alt="Blade 14 (2016) Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Razer</div>
        <h2 class="device-name">Blade 14" (2016)<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--razer-blade-14-2015" class="device-itm  pli-device-itm">
                                    <a href="shop/razer-blade-14-2015-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/razer-blade-14-2015/_thumb.png" title="Blade 14 (2015) Skins" alt="Blade 14 (2015) Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Razer</div>
        <h2 class="device-name">Blade 14" (2015)<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--S" class="group-itm">
                        <div class="grouper">
                            <div class="inner">S</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--surface-book" class="device-itm  pli-device-itm">
                                    <a href="shop/surface-book-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/surface-book/_thumb.png" title="Surface Book Skins" alt="Surface Book Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Microsoft</div>
        <h2 class="device-name">Surface Book<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--surface-3" class="device-itm  pli-device-itm">
                                    <a href="shop/surface-3-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/surface-3/_thumb.png" title="Surface 3 Skins" alt="Surface 3 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Microsoft</div>
        <h2 class="device-name">Surface 3<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--surface-pro-3" class="device-itm  pli-device-itm">
                                    <a href="shop/surface-pro-3-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/surface-pro-3/_thumb.png" title="Surface Pro 3 Skins" alt="Surface Pro 3 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Microsoft</div>
        <h2 class="device-name">Surface Pro 3<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--surface-pro-4" class="device-itm  pli-device-itm">
                                    <a href="shop/surface-pro-4" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/surface-pro-4/_thumb.png" title="Surface Pro 4 Skins" alt="Surface Pro 4 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Microsoft</div>
        <h2 class="device-name">Surface Pro 4<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--X" class="group-itm">
                        <div class="grouper">
                            <div class="inner">X</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--xbox-one-s" class="device-itm  pli-device-itm">
                                    <a href="shop/xbox-one-s-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xbox-one-s/_thumb.png" title="Xbox One S Skins" alt="Xbox One S Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Microsoft</div>
        <h2 class="device-name">Xbox One S<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xps-13" class="device-itm  pli-device-itm">
                                    <a href="shop/dell-xps-13-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xps-13/_thumb.png" title="XPS 13 Skins" alt="XPS 13 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Dell</div>
        <h2 class="device-name">XPS 13<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xps-15" class="device-itm  pli-device-itm">
                                    <a href="shop/dell-xps-15-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xps-15/_thumb.png" title="XPS 15 Skins" alt="XPS 15 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Dell</div>
        <h2 class="device-name">XPS 15<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xbox-one" class="device-itm  pli-device-itm">
                                    <a href="shop/xbox-one-skins" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xbox-one/_thumb.png" title="Xbox One Skins" alt="Xbox One Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Microsoft</div>
        <h2 class="device-name">Xbox One<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xbox-360" class="device-itm  pli-device-itm">
                                    <a href="shop/xbox-360" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xbox-360/_thumb.png" title="XBOX 360 Skins" alt="XBOX 360 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Microsoft</div>
        <h2 class="device-name">XBOX 360<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xperia-z5" class="device-itm  pli-device-itm">
                                    <a href="shop/xperia-z5" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xperia-z5/_thumb.png" title="Xperia Z5 Skins" alt="Xperia Z5 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Sony</div>
        <h2 class="device-name">Xperia Z5<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xperia-z5-compact" class="device-itm  pli-device-itm">
                                    <a href="shop/xperia-z5-compact" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xperia-z5-compact/_thumb.png" title="Xperia Z5C Skins" alt="Xperia Z5C Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Sony</div>
        <h2 class="device-name">Xperia Z5C<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xperia-z5-premium" class="device-itm  pli-device-itm">
                                    <a href="shop/xperia-z5-premium" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xperia-z5-premium/_thumb.png" title="Xperia Z5 Premium Skins" alt="Xperia Z5 Premium Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Sony</div>
        <h2 class="device-name">Xperia Z5 Premium<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xperia-z3" class="device-itm  pli-device-itm">
                                    <a href="shop/xperia-z3" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xperia-z3/_thumb.png" title="Xperia Z3 Skins" alt="Xperia Z3 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Sony</div>
        <h2 class="device-name">Xperia Z3<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xperia-z3-compact" class="device-itm  pli-device-itm">
                                    <a href="shop/xperia-z3-compact" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xperia-z3-compact/_thumb.png" title="Xperia Z3C Skins" alt="Xperia Z3C Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Sony</div>
        <h2 class="device-name">Xperia Z3C<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xperia-z2" class="device-itm  pli-device-itm">
                                    <a href="shop/xperia-z2" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xperia-z2/_thumb.png" title="Xperia Z2 Skins" alt="Xperia Z2 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Sony</div>
        <h2 class="device-name">Xperia Z2<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xperia-z1" class="device-itm  pli-device-itm">
                                    <a href="shop/xperia-z1" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xperia-z1/_thumb.png" title="Xperia Z1 Skins" alt="Xperia Z1 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Sony</div>
        <h2 class="device-name">Xperia Z1<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                            <li id="pli-device--xperia-z-ultra" class="device-itm  pli-device-itm">
                                    <a href="shop/xperia-z-ultra" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/xperia-z-ultra/_thumb.png" title="Xperia Z Ultra Skins" alt="Xperia Z Ultra Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">Sony</div>
        <h2 class="device-name">Xperia Z Ultra<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                                    <li id="pli-device-group--Z" class="group-itm">
                        <div class="grouper">
                            <div class="inner">Z</div>
                        </div>
                        <ul class="devices-sublist">
                                                            <li id="pli-device--zenfone-2" class="device-itm  pli-device-itm">
                                    <a href="shop/zenfone-2" class="device pli-device-link">
    <figure class="device-figure">
        <img class="device-thumb" src="../sites/all/themes/dbrand_v3/img/product-preview/zenfone-2/_thumb.png" title="Zenfone 2 Skins" alt="Zenfone 2 Skins">
    </figure>
    <div class="device-title-wrapper">
        <div class="device-manufacturer">ASUS</div>
        <h2 class="device-name">Zenfone 2<span class="element-invisible"> Skins</span></h2>
    </div>
</a>
                                </li>
                                                    </ul>
                    </li>
                            </ul>
        </div>
    </div>
</div>
<script type="text/javascript">
    var pli_feed = {"oneplus-3":{"title":"oneplus 3","title_alt":"3","manufacturer":"oneplus","category":"smartphones","group":"O"},"axon-7":{"title":"axon 7","title_alt":"axon 7","manufacturer":"zte","category":"smartphones","group":"A"},"galaxy-note-7":{"title":"galaxy note 7","title_alt":"galaxy note 7","manufacturer":"samsung","category":"smartphones","group":"G"},"xbox-one-s":{"title":"xbox one s","title_alt":"xbox one s","manufacturer":"microsoft","category":"gaming","group":"X"},"surface-book":{"title":"surface book","title_alt":"surface book","manufacturer":"microsoft","category":"notebooks","group":"S"},"razer-blade-stealth":{"title":"razer blade stealth","title_alt":"blade stealth","manufacturer":"razer","category":"notebooks","group":"R"},"razer-blade-14-2016":{"title":"razer blade 14\" (2016)","title_alt":"blade 14\" (2016)","manufacturer":"razer","category":"notebooks","group":"R"},"razer-blade-14-2015":{"title":"razer blade 14\" (2015)","title_alt":"blade 14\" (2015)","manufacturer":"razer","category":"notebooks","group":"R"},"lg-g5":{"title":"lg g5","title_alt":"g5","manufacturer":"lg electronics","category":"smartphones","group":"L"},"galaxy-s7":{"title":"galaxy s7","title_alt":"galaxy s7","manufacturer":"samsung","category":"smartphones","group":"G"},"galaxy-s7-edge":{"title":"galaxy s7 edge","title_alt":"galaxy s7 edge","manufacturer":"samsung","category":"smartphones","group":"G"},"galaxy-s7-active":{"title":"galaxy s7 active","title_alt":"galaxy s7 active","manufacturer":"samsung","category":"smartphones","group":"G"},"htc-10":{"title":"htc 10","title_alt":"htc 10","manufacturer":"htc","category":"smartphones","group":"H"},"surface-3":{"title":"surface 3","title_alt":"surface 3","manufacturer":"microsoft","category":"tablets","group":"S"},"surface-pro-3":{"title":"surface pro 3","title_alt":"surface pro 3","manufacturer":"microsoft","category":"tablets","group":"S"},"surface-pro-4":{"title":"surface pro 4","title_alt":"surface pro 4","manufacturer":"microsoft","category":"tablets","group":"S"},"xps-13":{"title":"xps 13","title_alt":"xps 13","manufacturer":"dell","category":"notebooks","group":"X"},"xps-15":{"title":"xps 15","title_alt":"xps 15","manufacturer":"dell","category":"notebooks","group":"X"},"lg-g4":{"title":"lg g4","title_alt":"g4","manufacturer":"lg electronics","category":"smartphones","group":"L"},"lg-g3":{"title":"lg g3","title_alt":"g3","manufacturer":"lg electronics","category":"smartphones","group":"L"},"galaxy-note-5":{"title":"galaxy note 5","title_alt":"galaxy note 5","manufacturer":"samsung","category":"smartphones","group":"G"},"galaxy-s6":{"title":"galaxy s6","title_alt":"galaxy s6","manufacturer":"samsung","category":"smartphones","group":"G"},"galaxy-s6-edge":{"title":"galaxy s6 edge","title_alt":"galaxy s6 edge","manufacturer":"samsung","category":"smartphones","group":"G"},"galaxy-note-4":{"title":"galaxy note 4","title_alt":"galaxy note 4","manufacturer":"samsung","category":"smartphones","group":"G"},"galaxy-s6-edge-plus":{"title":"galaxy s6 edge plus","title_alt":"galaxy s6 edge+","manufacturer":"samsung","category":"smartphones","group":"G"},"galaxy-s6-active":{"title":"galaxy s6 active","title_alt":"galaxy s6 active","manufacturer":"samsung","category":"smartphones","group":"G"},"htc-one-m9":{"title":"htc one m9","title_alt":"htc one m9","manufacturer":"htc","category":"smartphones","group":"H"},"htc-one-m8":{"title":"htc one m8","title_alt":"htc one m8","manufacturer":"htc","category":"smartphones","group":"H"},"htc-one-m7":{"title":"htc one m7","title_alt":"htc one m7","manufacturer":"htc","category":"smartphones","group":"H"},"huawei-p9":{"title":"huawei p9","title_alt":"p9","manufacturer":"huawei","category":"smartphones","group":"H"},"iphone-6s":{"title":"iphone 6s","title_alt":"iphone 6s","manufacturer":"apple","category":"smartphones","group":"I"},"iphone-6":{"title":"iphone 6","title_alt":"iphone 6","manufacturer":"apple","category":"smartphones","group":"I"},"iphone-6s-plus":{"title":"iphone 6s plus","title_alt":"iphone 6s plus","manufacturer":"apple","category":"smartphones","group":"I"},"iphone-6-plus":{"title":"iphone 6 plus","title_alt":"iphone 6 plus","manufacturer":"apple","category":"smartphones","group":"I"},"iphone-se":{"title":"iphone se","title_alt":"iphone se","manufacturer":"apple","category":"smartphones","group":"I"},"ipad-pro-97":{"title":"ipad pro 9.7\"","title_alt":"ipad pro 9.7\"","manufacturer":"apple","category":"tablets","group":"I"},"ipad-pro-129":{"title":"ipad pro 12.9\"","title_alt":"ipad pro 12.9\"","manufacturer":"apple","category":"tablets","group":"I"},"ipad-air-2":{"title":"ipad air 2","title_alt":"ipad air 2","manufacturer":"apple","category":"tablets","group":"I"},"ipad-mini-4":{"title":"ipad mini 4","title_alt":"ipad mini 4","manufacturer":"apple","category":"tablets","group":"I"},"iphone-5s":{"title":"iphone 5s","title_alt":"iphone 5s","manufacturer":"apple","category":"smartphones","group":"I"},"iphone-5":{"title":"iphone 5","title_alt":"iphone 5","manufacturer":"apple","category":"smartphones","group":"I"},"iphone-4-4s":{"title":"iphone 4\/4s","title_alt":"iphone 4\/4s","manufacturer":"apple","category":"smartphones","group":"I"},"macbook-pro-retina-13":{"title":"macbook pro retina 13\"","title_alt":"pro retina 13\"","manufacturer":"apple macbook","category":"notebooks","group":"M"},"macbook-pro-retina-15":{"title":"macbook pro retina 15\"","title_alt":"pro retina 15\"","manufacturer":"apple macbook","category":"notebooks","group":"M"},"macbook-retina-12-new":{"title":"macbook retina 12\" (new)","title_alt":"12\" retina","manufacturer":"apple macbook","category":"notebooks","group":"M"},"macbook-air-13":{"title":"macbook air 13\"","title_alt":"air 13\"","manufacturer":"apple macbook","category":"notebooks","group":"M"},"macbook-air-11":{"title":"macbook air 11\"","title_alt":"air 11\"","manufacturer":"apple macbook","category":"notebooks","group":"M"},"m50x":{"title":"m50x","title_alt":"m50x","manufacturer":"audio-technica","category":"wearables","group":"M"},"m50":{"title":"m50","title_alt":"m50","manufacturer":"audio-technica","category":"wearables","group":"M"},"m40x":{"title":"m40x","title_alt":"m40x","manufacturer":"audio-technica","category":"wearables","group":"M"},"moto-z-force":{"title":"moto z force","title_alt":"moto z force","manufacturer":"motorola","category":"smartphones","group":"M"},"moto-z":{"title":"moto z","title_alt":"moto z","manufacturer":"motorola","category":"smartphones","group":"M"},"moto-x-play":{"title":"moto x play","title_alt":"moto x play","manufacturer":"motorola","category":"smartphones","group":"M"},"moto-x-style-pure":{"title":"moto x style\/pure","title_alt":"moto x style","manufacturer":"motorola","category":"smartphones","group":"M"},"moto-x-2014":{"title":"moto x (2014)","title_alt":"moto x (2014)","manufacturer":"motorola","category":"smartphones","group":"M"},"moto-x-2013":{"title":"moto x (2013)","title_alt":"moto x (2013)","manufacturer":"motorola","category":"smartphones","group":"M"},"moto-g-2015":{"title":"moto g (2015)","title_alt":"moto g (2015)","manufacturer":"motorola","category":"smartphones","group":"M"},"moto-g-2014":{"title":"moto g (2014)","title_alt":"moto g (2014)","manufacturer":"motorola","category":"smartphones","group":"M"},"moto-g-2013":{"title":"moto g (2013)","title_alt":"moto g (2013)","manufacturer":"motorola","category":"smartphones","group":"M"},"nexus-6p":{"title":"nexus 6p","title_alt":"nexus 6p","manufacturer":"huawei google","category":"smartphones","group":"N"},"nexus-5x":{"title":"nexus 5x","title_alt":"nexus 5x","manufacturer":"lg google","category":"smartphones","group":"N"},"nextbit-robin":{"title":"nextbit robin","title_alt":"robin","manufacturer":"nextbit","category":"smartphones","group":"N"},"nexus-6":{"title":"nexus 6","title_alt":"nexus 6","manufacturer":"motorola google","category":"smartphones","group":"N"},"nexus-5":{"title":"nexus 5","title_alt":"nexus 5","manufacturer":"lg google","category":"smartphones","group":"N"},"nexus-4":{"title":"nexus 4","title_alt":"nexus 4","manufacturer":"lg google","category":"smartphones","group":"N"},"nexus-9":{"title":"nexus 9","title_alt":"nexus 9","manufacturer":"htc","category":"tablets","group":"N"},"nexus-7-2013":{"title":"nexus 7 (2013)","title_alt":"nexus 7 (2013)","manufacturer":"asus google","category":"tablets","group":"N"},"nexus-7-2012":{"title":"nexus 7 (2012)","title_alt":"nexus 7 (2012)","manufacturer":"asus google","category":"tablets","group":"N"},"oneplus-x":{"title":"oneplus x","title_alt":"x","manufacturer":"oneplus","category":"smartphones","group":"O"},"oneplus-2":{"title":"oneplus 2","title_alt":"2","manufacturer":"oneplus","category":"smartphones","group":"O"},"oneplus-one":{"title":"oneplus one","title_alt":"one","manufacturer":"oneplus","category":"smartphones","group":"O"},"playstation-4":{"title":"playstation 4","title_alt":"playstation 4","manufacturer":"sony","category":"gaming","group":"P"},"xbox-one":{"title":"xbox one","title_alt":"xbox one","manufacturer":"microsoft","category":"gaming","group":"X"},"pebble-time":{"title":"pebble time","title_alt":"pebble time","manufacturer":"pebble technology","category":"wearables","group":"P"},"pebble-watch":{"title":"pebble watch","title_alt":"pebble watch","manufacturer":"pebble technology","category":"wearables","group":"P"},"playstation-3":{"title":"playstation 3","title_alt":"playstation 3","manufacturer":"sony","category":"gaming","group":"P"},"playstation-vita":{"title":"playstation vita","title_alt":"playstation vita","manufacturer":"sony","category":"gaming","group":"P"},"xbox-360":{"title":"xbox 360","title_alt":"xbox 360","manufacturer":"microsoft","category":"gaming","group":"X"},"xperia-z5":{"title":"xperia z5","title_alt":"xperia z5","manufacturer":"sony","category":"smartphones","group":"X"},"xperia-z5-compact":{"title":"xperia z5 compact","title_alt":"xperia z5c","manufacturer":"sony","category":"smartphones","group":"X"},"xperia-z5-premium":{"title":"xperia z5 premium","title_alt":"xperia z5 premium","manufacturer":"sony","category":"smartphones","group":"X"},"xperia-z3":{"title":"xperia z3","title_alt":"xperia z3","manufacturer":"sony","category":"smartphones","group":"X"},"xperia-z3-compact":{"title":"xperia z3 compact","title_alt":"xperia z3c","manufacturer":"sony","category":"smartphones","group":"X"},"xperia-z2":{"title":"xperia z2","title_alt":"xperia z2","manufacturer":"sony","category":"smartphones","group":"X"},"xperia-z1":{"title":"xperia z1","title_alt":"xperia z1","manufacturer":"sony","category":"smartphones","group":"X"},"xperia-z-ultra":{"title":"xperia z ultra","title_alt":"xperia z ultra","manufacturer":"sony","category":"smartphones","group":"X"},"zenfone-2":{"title":"zenfone 2","title_alt":"zenfone 2","manufacturer":"asus","category":"smartphones","group":"Z"}};
</script>

        </div>

        

        <nav class="l-breadcrumb"><h2 class="element-invisible">You are here</h2><ul class="breadcrumb"><li class="itm breadcrumb-start"><a href="index"><i class="icn" aria-hidden="true">&#8904;</i><span class="title">Home</span></a></li><li class="itm"><span class="nolink">Shop</span></li></ul></nav>    </div>

@stop