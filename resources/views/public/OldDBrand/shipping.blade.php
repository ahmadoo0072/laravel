<!DOCTYPE html>
    <!--[if IEMobile 7]><html class="no-js ie iem7" lang="en" dir="ltr"><![endif]-->
    <!--[if lte IE 6]><html class="no-js ie lt-ie9 lt-ie8 lt-ie7" lang="en" dir="ltr"><![endif]-->
    <!--[if (IE 7)&(!IEMobile)]><html class="no-js ie lt-ie9 lt-ie8" lang="en" dir="ltr"><![endif]-->
    <!--[if IE 8]><html class="no-js ie lt-ie9" lang="en" dir="ltr"><![endif]-->
    <!--[if (gte IE 9)|(gt IEMobile 7)]><html class="no-js ie" lang="en" dir="ltr"><![endif]-->
    <!--[if !IE]><!--><html class="no-js" lang="en" dir="ltr"><!--<![endif]-->

<!-- Mirrored from dbrand.com/shipping by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 01 Sep 2016 11:25:56 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>
    <title>Shipping // ACellShop</title>
    <?php require 'shop/header.php'; ?>
<!--meta charset="utf-8" /><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={xpid:"XAEOWVZaGwYDXVFbBwA="};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var o=e[n]={exports:{}};t[n][0].call(o.exports,function(e){var o=t[n][1][e];return r(o||e)},o,o.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(t,e,n){function r(t){try{s.console&&console.log(t)}catch(e){}}var o,i=t("ee"),a=t(15),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,e,n){r(n.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,o){try{d?d-=1:i("err",[o||new UncaughtException(t,e,n)])}catch(s){try{i("ierr",[s,(new Date).getTime(),!0])}catch(c){}}return"function"==typeof f&&f.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function o(t){i("err",[t,(new Date).getTime()])}var i=t("handle"),a=t(16),s=t("ee"),c=t("loader"),f=window.onerror,u=!1,d=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(l){"stack"in l&&(t(8),t(7),"addEventListener"in window&&t(5),c.xhrWrappable&&t(9),u=!0)}s.on("fn-start",function(t,e,n){u&&(d+=1)}),s.on("fn-err",function(t,e,n){u&&(this.thrown=!0,o(n))}),s.on("fn-end",function(){u&&!this.thrown&&d>0&&(d-=1)}),s.on("internal-error",function(t){i("ierr",[t,(new Date).getTime(),!0])})},{}],3:[function(t,e,n){t("loader").features.ins=!0},{}],4:[function(t,e,n){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(8),s=t(7),c="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",l="resource",p="-start",h="-end",m="fn"+p,w="fn"+h,v="bstTimer",y="pushState";t("loader").features.stn=!0,t(6);var g=NREUM.o.EV;o.on(m,function(t,e){var n=t[0];n instanceof g&&(this.bstStart=Date.now())}),o.on(w,function(t,e){var n=t[0];n instanceof g&&i("bst",[n,e,this.bstStart,Date.now()])}),a.on(m,function(t,e,n){this.bstStart=Date.now(),this.bstType=n}),a.on(w,function(t,e){i(v,[e,this.bstStart,Date.now(),this.bstType])}),s.on(m,function(){this.bstStart=Date.now()}),s.on(w,function(t,e){i(v,[e,this.bstStart,Date.now(),"requestAnimationFrame"])}),o.on(y+p,function(t){this.time=Date.now(),this.startPath=location.pathname+location.hash}),o.on(y+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+c]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["c"+c]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["webkitC"+c]()},!1)),document[f]("scroll",r,!1),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],5:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&o(e)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,e){return t[1]}var a=t("ee").get("events"),s=t(17)(a),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,e){if(t[1]){var n=t[1];if("function"==typeof n){var r=c(n,"nr@wrapped",function(){return s(n,"fn-",null,n.name||"anonymous")});this.wrapped=t[1]=r}else"function"==typeof n.handleEvent&&s.inPlace(n,["handleEvent"],"fn-")}}),a.on(d+"-start",function(t){var e=this.wrapped;e&&(t[1]=e)})},{}],6:[function(t,e,n){var r=t("ee").get("history"),o=t(17)(r);e.exports=r,o.inPlace(window.history,["pushState","replaceState"],"-")},{}],7:[function(t,e,n){var r=t("ee").get("raf"),o=t(17)(r),i="equestAnimationFrame";e.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],8:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function o(t,e,n){this.method=n,this.timerDuration="number"==typeof t[1]?t[1]:0,t[0]=a(t[0],"fn-",this,n)}var i=t("ee").get("timer"),a=t(17)(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";e.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],9:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",s)}function o(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,w,"fn-",s)}function i(t){v.push(t),h&&(g=-g,b.data=g)}function a(){for(var t=0;t<v.length;t++)r([],v[t]);v.length&&(v=[])}function s(t,e){return e}function c(t,e){for(var n in t)e[n]=t[n];return e}t(5);var f=t("ee"),u=f.get("xhr"),d=t(17)(u),l=NREUM.o,p=l.XHR,h=l.MO,m="readystatechange",w=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],v=[];e.exports=u;var y=window.XMLHttpRequest=function(t){var e=new p(t);try{u.emit("new-xhr",[e],e),e.addEventListener(m,o,!1)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(c(p,y),y.prototype=p.prototype,d.inPlace(y.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,e){r(t,e),i(e)}),u.on("open-xhr-start",r),h){var g=1,b=document.createTextNode(g);new h(a).observe(b,{characterData:!0})}else f.on("fn-end",function(t){t[0]&&t[0].type===m||a()})},{}],10:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<d;r++)t.removeEventListener(u[r],this.listener,!1);if(!e.aborted){if(n.duration=(new Date).getTime()-this.startTime,4===t.readyState){e.status=t.status;var i=o(t,this.lastSize);if(i&&(n.rxSize=i),this.sameOrigin){var a=t.getResponseHeader("X-NewRelic-App-Data");a&&(e.cat=a.split(", ").pop())}}else e.status=0;n.cbTime=this.cbTime,f.emit("xhr-done",[t],t),s("xhr",[e,n,this.startTime])}}}function o(t,e){var n=t.responseType;if("json"===n&&null!==e)return e;var r="arraybuffer"===n||"blob"===n||"json"===n?t.response:t.responseText;return h(r)}function i(t,e){var n=c(e),r=t.params;r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.sameOrigin=n.sameOrigin}var a=t("loader");if(a.xhrWrappable){var s=t("handle"),c=t(11),f=t("ee"),u=["load","error","abort","timeout"],d=u.length,l=t("id"),p=t(14),h=t(13),m=window.XMLHttpRequest;a.features.xhr=!0,t(9),f.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,p&&(p>34||p<10)||window.opera||t.addEventListener("progress",function(t){e.lastSize=t.loaded},!1)}),f.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),f.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),f.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],o=this;if(n&&r){var i=h(r);i&&(n.txSize=i)}this.startTime=(new Date).getTime(),this.listener=function(t){try{"abort"===t.type&&(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof e.onload))&&o.end(e)}catch(n){try{f.emit("internal-error",[n])}catch(r){}}};for(var a=0;a<d;a++)e.addEventListener(u[a],this.listener,!1)}),f.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),f.on("xhr-load-added",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),f.on("xhr-load-removed",function(t,e){var n=""+l(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),f.on("addEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-added",[t[1],t[2]],e)}),f.on("removeEventListener-end",function(t,e){e instanceof m&&"load"===t[0]&&f.emit("xhr-load-removed",[t[1],t[2]],e)}),f.on("fn-start",function(t,e,n){e instanceof m&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=(new Date).getTime()))}),f.on("fn-end",function(t,e){this.xhrCbStart&&f.emit("xhr-cb-time",[(new Date).getTime()-this.xhrCbStart,this.onload,e],e)})}},{}],11:[function(t,e,n){e.exports=function(t){var e=document.createElement("a"),n=window.location,r={};e.href=t,r.port=e.port;var o=e.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("index.php")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=e.hostname||n.hostname,r.pathname=e.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!e.protocol||":"===e.protocol||e.protocol===n.protocol,a=e.hostname===document.domain&&e.port===n.port;return r.sameOrigin=i&&(!e.hostname||a),r}},{}],12:[function(t,e,n){function r(){}function o(t,e,n){return function(){return i(t,[(new Date).getTime()].concat(s(arguments)),e?null:this,n),e?void 0:this}}var i=t("handle"),a=t(15),s=t(16),c=t("ee").get("tracer"),f=NREUM;"undefined"==typeof window.newrelic&&(newrelic=f);var u=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit"],d="api-",l=d+"ixn-";a(u,function(t,e){f[e]=o(d+e,!0,"api")}),f.addPageAction=o(d+"addPageAction",!0),e.exports=newrelic,f.interaction=function(){return(new r).get()};var p=r.prototype={createTracer:function(t,e){var n={},r=this,o="function"==typeof e;return i(l+"tracer",[Date.now(),t,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[Date.now(),r,o],n),o)try{return e.apply(this,arguments)}finally{c.emit("fn-end",[Date.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){p[e]=o(l+e)}),newrelic.noticeError=function(t){"string"==typeof t&&(t=new Error(t)),i("err",[t,(new Date).getTime()])}},{}],13:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],14:[function(t,e,n){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),e.exports=r},{}],15:[function(t,e,n){function r(t,e){var n=[],r="",i=0;for(r in t)o.call(t,r)&&(n[i]=e(r,t[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],16:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,o=n-e||0,i=Array(o<0?0:o);++r<o;)i[r]=t[e+r];return i}e.exports=r},{}],17:[function(t,e,n){function r(t){return!(t&&"function"==typeof t&&t.apply&&!t[a])}var o=t("ee"),i=t(16),a="nr@original",s=Object.prototype.hasOwnProperty,c=!1;e.exports=function(t){function e(t,e,n,o){function nrWrapper(){var r,a,s,c;try{a=this,r=i(arguments),s="function"==typeof n?n(r,a):n||{}}catch(u){d([u,"",[r,a,o],s])}f(e+"start",[r,a,o],s);try{return c=t.apply(a,r)}catch(l){throw f(e+"err",[r,a,l],s),l}finally{f(e+"end",[r,a,c],s)}}return r(t)?t:(e||(e=""),nrWrapper[a]=t,u(t,nrWrapper),nrWrapper)}function n(t,n,o,i){o||(o="");var a,s,c,f="-"===o.charAt(0);for(c=0;c<n.length;c++)s=n[c],a=t[s],r(a)||(t[s]=e(a,f?s+o:o,i,s))}function f(e,n,r){if(!c){c=!0;try{t.emit(e,n,r)}catch(o){d([o,e,n,r])}c=!1}}function u(t,e){if(Object.defineProperty&&Object.keys)try{var n=Object.keys(t);return n.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(r){d([r])}for(var o in t)s.call(t,o)&&(e[o]=t[o]);return e}function d(e){try{t.emit("internal-error",e)}catch(n){}}return t||(t=o),e.inPlace=n,e.flag=a,e}},{}],ee:[function(t,e,n){function r(){}function o(t){function e(t){return t&&t instanceof r?t:t?s(t,a,i):i()}function n(n,r,o){t&&t(n,r,o);for(var i=e(o),a=l(n),s=a.length,c=0;c<s;c++)a[c].apply(i,r);var u=f[w[n]];return u&&u.push([v,n,r,i]),i}function d(t,e){m[t]=l(t).concat(e)}function l(t){return m[t]||[]}function p(t){return u[t]=u[t]||o(n)}function h(t,e){c(t,function(t,n){e=e||"feature",w[n]=e,e in f||(f[e]=[])})}var m={},w={},v={on:d,emit:n,get:p,listeners:l,context:e,buffer:h};return v}function i(){return new r}var a="nr@context",s=t("gos"),c=t(15),f={},u={},d=e.exports=o();d.backlog=f},{}],gos:[function(t,e,n){function r(t,e,n){if(o.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[e]=r,r}var o=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){o.buffer([t],r),o.emit(t,e,n)}var o=t("ee").get("handle");e.exports=r,r.ee=o},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!g++){var t=y.info=NREUM.info,e=u.getElementsByTagName("script")[0];if(t&&t.licenseKey&&t.applicationID&&e){c(w,function(e,n){t[e]||(t[e]=n)});var n="https"===m.split(":")[0]||t.sslForHttp;y.proto=n?"https://":"http://",s("mark",["onload",a()],null,"api");var r=u.createElement("script");r.src=y.proto+t.agent,e.parentNode.insertBefore(r,e)}}}function o(){"complete"===u.readyState&&i()}function i(){s("mark",["domContent",a()],null,"api")}function a(){return(new Date).getTime()}var s=t("handle"),c=t(15),f=window,u=f.document,d="addEventListener",l="attachEvent",p=f.XMLHttpRequest,h=p&&p.prototype;NREUM.o={ST:setTimeout,CT:clearTimeout,XHR:p,REQ:f.Request,EV:f.Event,PR:f.Promise,MO:f.MutationObserver},t(12);var m=""+location,w={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-974.min.js"},v=p&&h&&h[d]&&!/CriOS/.test(navigator.userAgent),y=e.exports={offset:a(),origin:m,features:{},xhrWrappable:v};u[d]?(u[d]("DOMContentLoaded",i,!1),f[d]("load",r,!1)):(u[l]("onreadystatechange",o),f[l]("onload",r)),s("mark",["firstbyte",a()],null,"api");var g=0},{}]},{},["loader",2,10,4,3]);</script>
<meta http-equiv="cleartype" content="on" />
<meta name="MobileOptimized" content="width" />
<link rel="apple-touch-icon-precomposed" href="../sites/all/themes/dbrand_v3/apple-touch-icon-precomposed.png" />
<link rel="apple-touch-icon-precomposed" href="../sites/all/themes/dbrand_v3/apple-touch-icon-precomposed-144x144.png" sizes="144x144" />
<link rel="apple-touch-icon-precomposed" href="../sites/all/themes/dbrand_v3/apple-touch-icon-precomposed-72x72.png" sizes="72x72" />
<link rel="apple-touch-icon-precomposed" href="../sites/all/themes/dbrand_v3/apple-touch-icon-precomposed-114x114.png" sizes="114x114" />
<meta name="HandheldFriendly" content="true" />
<link rel="profile" href="http://www.w3.org/1999/xhtml/vocab" />
<link rel="shortcut icon" href="../sites/all/themes/dbrand_v3/favicon.ico" type="image/vnd.microsoft.icon" />
<meta name="generator" content="Drupal 7 (http://drupal.org)" />
<meta name="viewport" content="width=device-width, user-scalable=no" />
<link rel="canonical" href="shipping.php" />
<link rel="shortlink" href="shipping.php" />
    <meta name="theme-color" content="#000000">
    <link rel="icon" sizes="192x192" href="../sites/all/themes/dbrand_v3/img/misc/favicon-hires.png">
    <style>
@import url("../sites/all/themes/dbrand_v3/css/global.css?octltk");
</style>
<style>
@import url("../sites/all/modules/custom/checkout/css/shipping-info3031.css?octltk");
</style>
    <script src="../sites/all/themes/dbrand_v3/js/global-serve.js?octltk"></script>
<script src="../sites/all/modules/custom/checkout/js/shipping-info3031.js?octltk"></script>
<script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","www.google-analytics.com/analytics.js","ga");ga("create", "UA-30756221-1", {"cookieDomain":"auto"});ga("send", "pageview");</script>
<script>jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","googleanalytics":{"trackOutbound":1,"trackMailto":1,"trackDownload":1,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip"},"urlIsAjaxTrusted":{"\/shop\/samsung-galaxy-s7-skins":true}});</script>
</head>

<body class="html not-front not-logged-in page-shipping section-shipping">

    <a href="#main-content" class="element-invisible element-focusable">Skip to main content</a>
        <div class="l-page">
    <header class="l-header" role="banner">
        <div class="inner">

              <nav id="block-menu-menu-toggle-menu" role="navigation" class="block block--menu block--menu-menu-toggle-menu">
    
  <ul class="list"><li class="first last leaf itm itm--btn-menu-toggle"><a href="#menu" id="btn-menu-toggle" class="btn-menu-toggle"><span class="inner"><i class="icn" aria-hidden="true">&#8801;</i><span class="title">Toggle Menu</span></span></a></li>
</ul></nav>
<nav id="block-menu-menu-cart" role="navigation" class="block block--menu block--menu-menu-cart">
    
  <ul class="list"><li class="first last leaf itm itm--btn-menu-cart"><a href="../cart.php" id="btn-menu-cart" class="btn-menu-cart"><span class="inner"><i class="icn" aria-hidden="true">7</i><span class="title">Cart</span></span></a></li>
</ul></nav>
<nav id="block-block-3" class="block block--block block--block-3 block--brand">
      <a href="index.php" title="Home" rel="home" class="site-logo">
    <span class="inner title"><span class="delicious-seo">ACellShop  inc.</span></span>
  </a>
</nav>

            <div id="nav-vertical-wrapper" class="wrapper nav-vertical-wrapper">
                <div class="inner">
                      <nav id="block-system-main-menu" role="navigation" class="block block--system block--menu block--system-main-menu">
      
  <ul class="list"><li class="first leaf itm itm--btn-menu-info"><a href="index.php" class="btn-menu-info"><span class="inner"><i class="icn" aria-hidden="true">1</i><span class="title">Skins</span></span></a></li>
<li class="leaf itm itm--btn-menu-shop"><a href="../shop.php" class="btn-menu-shop"><span class="inner"><i class="icn" aria-hidden="true">2</i><span class="title">Shop</span></span></a></li>
<li class="leaf itm itm--btn-menu-customs"><a href="index.php" class="btn-menu-customs"><span class="inner"><i class="icn" aria-hidden="true">3</i><span class="title">Customs</span></span></a></li>
<li class="leaf itm itm--btn-menu-contact"><a href="contact.php" id="btn-menu-contact" class="btn-menu-contact"><span class="inner"><i class="icn" aria-hidden="true">4</i><span class="title">Contact</span></span></a></li>
<li class="leaf itm itm--btn-menu-howto"><a href="skins/how-to-apply.php" class="btn-menu-howto"><span class="inner"><i class="icn" aria-hidden="true">8</i><span class="title">How To</span></span></a></li>
<li class="last leaf active-trail itm itm--btn-menu-shipping itm--active-trail"><a href="shipping.php" id="btn-menu-shipping" class="btn-menu-shipping active-trail"><span class="inner"><i class="icn" aria-hidden="true">9</i><span class="title">Shipping</span></span></a></li>
</ul></nav>
                      <nav id="block-menu-menu-side-menu" role="navigation" class="block block--menu block--menu-menu-side-menu">
      
  <ul class="list"><li class="first leaf itm itm--btn-menu-search"><a href="index.php" class="btn-menu-search"><span class="inner"><i class="icn" aria-hidden="true">5</i><span class="title">Find</span></span></a></li>
<li class="last leaf itm itm--btn-menu-account"><a href="humans.php" class="btn-menu-account"><span class="inner"><i class="icn" aria-hidden="true">6</i><span class="title">Account</span></span></a></li>
</ul></nav>
                </div>
            </div>

        </div>
    </header-->

    <div id="main" class="l-main">
        <a id="main-content"></a>

                            <h1 class="l-main-title">
                <div class="inner">Shipping</div>
            </h1>
                
        
                
        <div role="article" class="l-content">

            
            <div id="sip" class="sip">
    <div class="group group--destination">
        <div class="inner">
            <h3 class="label"><span class="inner">I would like to ship to</span></h3>
            <div class="select-wrapper">
                <select id="sip--select" name="sip--select" class="select">
                    <option value="0" selected="selected">[my country]</option>
                                            <option value="US">United States</option>
                                            <option value="CA">Canada</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="IN">India</option>
                                            <option value="AU">Australia</option>
                                            <option value="DE">Germany</option>
                                            <option value="-" disabled="disabled">––––––</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AX">Aland Islands</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AS">American Samoa</option>
                                            <option value="AD">Andorra</option>
                                            <option value="AO">Angola</option>
                                            <option value="AI">Anguilla</option>
                                            <option value="AQ">Antarctica</option>
                                            <option value="AG">Antigua and Barbuda</option>
                                            <option value="AR">Argentina</option>
                                            <option value="AM">Armenia</option>
                                            <option value="AW">Aruba</option>
                                            <option value="AT">Austria</option>
                                            <option value="AZ">Azerbaijan</option>
                                            <option value="BS">Bahamas</option>
                                            <option value="BH">Bahrain</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="BB">Barbados</option>
                                            <option value="BY">Belarus</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BZ">Belize</option>
                                            <option value="BJ">Benin</option>
                                            <option value="BM">Bermuda</option>
                                            <option value="BT">Bhutan</option>
                                            <option value="BO">Bolivia</option>
                                            <option value="BA">Bosnia and Herzegovina</option>
                                            <option value="BW">Botswana</option>
                                            <option value="BV">Bouvet Island</option>
                                            <option value="BR">Brazil</option>
                                            <option value="IO">British Indian Ocean Territory</option>
                                            <option value="VG">British Virgin Islands</option>
                                            <option value="BN">Brunei</option>
                                            <option value="BG">Bulgaria</option>
                                            <option value="BF">Burkina Faso</option>
                                            <option value="BI">Burundi</option>
                                            <option value="KH">Cambodia</option>
                                            <option value="CM">Cameroon</option>
                                            <option value="CV">Cape Verde</option>
                                            <option value="BQ">Caribbean Netherlands</option>
                                            <option value="KY">Cayman Islands</option>
                                            <option value="CF">Central African Republic</option>
                                            <option value="TD">Chad</option>
                                            <option value="CL">Chile</option>
                                            <option value="CN">China</option>
                                            <option value="CX">Christmas Island</option>
                                            <option value="CC">Cocos (Keeling) Islands</option>
                                            <option value="CO">Colombia</option>
                                            <option value="KM">Comoros</option>
                                            <option value="CG">Congo (Brazzaville)</option>
                                            <option value="CD">Congo (Kinshasa)</option>
                                            <option value="CK">Cook Islands</option>
                                            <option value="CR">Costa Rica</option>
                                            <option value="HR">Croatia</option>
                                            <option value="CU">Cuba</option>
                                            <option value="CW">Curaçao</option>
                                            <option value="CY">Cyprus</option>
                                            <option value="CZ">Czech Republic</option>
                                            <option value="DK">Denmark</option>
                                            <option value="DJ">Djibouti</option>
                                            <option value="DM">Dominica</option>
                                            <option value="DO">Dominican Republic</option>
                                            <option value="EC">Ecuador</option>
                                            <option value="EG">Egypt</option>
                                            <option value="SV">El Salvador</option>
                                            <option value="GQ">Equatorial Guinea</option>
                                            <option value="ER">Eritrea</option>
                                            <option value="EE">Estonia</option>
                                            <option value="ET">Ethiopia</option>
                                            <option value="FK">Falkland Islands</option>
                                            <option value="FO">Faroe Islands</option>
                                            <option value="FJ">Fiji</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="GF">French Guiana</option>
                                            <option value="PF">French Polynesia</option>
                                            <option value="TF">French Southern Territories</option>
                                            <option value="GA">Gabon</option>
                                            <option value="GM">Gambia</option>
                                            <option value="GE">Georgia</option>
                                            <option value="GH">Ghana</option>
                                            <option value="GI">Gibraltar</option>
                                            <option value="GR">Greece</option>
                                            <option value="GL">Greenland</option>
                                            <option value="GD">Grenada</option>
                                            <option value="GP">Guadeloupe</option>
                                            <option value="GU">Guam</option>
                                            <option value="GT">Guatemala</option>
                                            <option value="GG">Guernsey</option>
                                            <option value="GN">Guinea</option>
                                            <option value="GW">Guinea-Bissau</option>
                                            <option value="GY">Guyana</option>
                                            <option value="HT">Haiti</option>
                                            <option value="HM">Heard Island and McDonald Islands</option>
                                            <option value="HN">Honduras</option>
                                            <option value="HK">Hong Kong S.A.R., China</option>
                                            <option value="HU">Hungary</option>
                                            <option value="IS">Iceland</option>
                                            <option value="ID">Indonesia</option>
                                            <option value="IR">Iran</option>
                                            <option value="IQ">Iraq</option>
                                            <option value="IE">Ireland</option>
                                            <option value="IM">Isle of Man</option>
                                            <option value="IL">Israel</option>
                                            <option value="IT">Italy</option>
                                            <option value="CI">Ivory Coast</option>
                                            <option value="JM">Jamaica</option>
                                            <option value="JP">Japan</option>
                                            <option value="JE">Jersey</option>
                                            <option value="JO">Jordan</option>
                                            <option value="KZ">Kazakhstan</option>
                                            <option value="KE">Kenya</option>
                                            <option value="KI">Kiribati</option>
                                            <option value="KW">Kuwait</option>
                                            <option value="KG">Kyrgyzstan</option>
                                            <option value="LA">Laos</option>
                                            <option value="LV">Latvia</option>
                                            <option value="LB">Lebanon</option>
                                            <option value="LS">Lesotho</option>
                                            <option value="LR">Liberia</option>
                                            <option value="LY">Libya</option>
                                            <option value="LI">Liechtenstein</option>
                                            <option value="LT">Lithuania</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MO">Macao S.A.R., China</option>
                                            <option value="MK">Macedonia</option>
                                            <option value="MG">Madagascar</option>
                                            <option value="MW">Malawi</option>
                                            <option value="MY">Malaysia</option>
                                            <option value="MV">Maldives</option>
                                            <option value="ML">Mali</option>
                                            <option value="MT">Malta</option>
                                            <option value="MH">Marshall Islands</option>
                                            <option value="MQ">Martinique</option>
                                            <option value="MR">Mauritania</option>
                                            <option value="MU">Mauritius</option>
                                            <option value="YT">Mayotte</option>
                                            <option value="MX">Mexico</option>
                                            <option value="FM">Micronesia</option>
                                            <option value="MD">Moldova</option>
                                            <option value="MC">Monaco</option>
                                            <option value="MN">Mongolia</option>
                                            <option value="ME">Montenegro</option>
                                            <option value="MS">Montserrat</option>
                                            <option value="MA">Morocco</option>
                                            <option value="MZ">Mozambique</option>
                                            <option value="MM">Myanmar</option>
                                            <option value="NA">Namibia</option>
                                            <option value="NR">Nauru</option>
                                            <option value="NP">Nepal</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="AN">Netherlands Antilles</option>
                                            <option value="NC">New Caledonia</option>
                                            <option value="NZ">New Zealand</option>
                                            <option value="NI">Nicaragua</option>
                                            <option value="NE">Niger</option>
                                            <option value="NG">Nigeria</option>
                                            <option value="NU">Niue</option>
                                            <option value="NF">Norfolk Island</option>
                                            <option value="MP">Northern Mariana Islands</option>
                                            <option value="KP">North Korea</option>
                                            <option value="NO">Norway</option>
                                            <option value="OM">Oman</option>
                                            <option value="PK">Pakistan</option>
                                            <option value="PW">Palau</option>
                                            <option value="PS">Palestinian Territory</option>
                                            <option value="PA">Panama</option>
                                            <option value="PG">Papua New Guinea</option>
                                            <option value="PY">Paraguay</option>
                                            <option value="PE">Peru</option>
                                            <option value="PH">Philippines</option>
                                            <option value="PN">Pitcairn</option>
                                            <option value="PL">Poland</option>
                                            <option value="PT">Portugal</option>
                                            <option value="PR">Puerto Rico</option>
                                            <option value="QA">Qatar</option>
                                            <option value="RE">Reunion</option>
                                            <option value="RO">Romania</option>
                                            <option value="RU">Russia</option>
                                            <option value="RW">Rwanda</option>
                                            <option value="BL">Saint Barthélemy</option>
                                            <option value="SH">Saint Helena</option>
                                            <option value="KN">Saint Kitts and Nevis</option>
                                            <option value="LC">Saint Lucia</option>
                                            <option value="MF">Saint Martin (French part)</option>
                                            <option value="PM">Saint Pierre and Miquelon</option>
                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                            <option value="WS">Samoa</option>
                                            <option value="SM">San Marino</option>
                                            <option value="ST">Sao Tome and Principe</option>
                                            <option value="SA">Saudi Arabia</option>
                                            <option value="SN">Senegal</option>
                                            <option value="RS">Serbia</option>
                                            <option value="SC">Seychelles</option>
                                            <option value="SL">Sierra Leone</option>
                                            <option value="SG">Singapore</option>
                                            <option value="SX">Sint Maarten</option>
                                            <option value="SK">Slovakia</option>
                                            <option value="SI">Slovenia</option>
                                            <option value="SB">Solomon Islands</option>
                                            <option value="SO">Somalia</option>
                                            <option value="ZA">South Africa</option>
                                            <option value="GS">South Georgia and the South Sandwich Islands</option>
                                            <option value="KR">South Korea</option>
                                            <option value="SS">South Sudan</option>
                                            <option value="ES">Spain</option>
                                            <option value="LK">Sri Lanka</option>
                                            <option value="SD">Sudan</option>
                                            <option value="SR">Suriname</option>
                                            <option value="SJ">Svalbard and Jan Mayen</option>
                                            <option value="SZ">Swaziland</option>
                                            <option value="SE">Sweden</option>
                                            <option value="CH">Switzerland</option>
                                            <option value="SY">Syria</option>
                                            <option value="TW">Taiwan</option>
                                            <option value="TJ">Tajikistan</option>
                                            <option value="TZ">Tanzania</option>
                                            <option value="TH">Thailand</option>
                                            <option value="TL">Timor-Leste</option>
                                            <option value="TG">Togo</option>
                                            <option value="TK">Tokelau</option>
                                            <option value="TO">Tonga</option>
                                            <option value="TT">Trinidad and Tobago</option>
                                            <option value="TN">Tunisia</option>
                                            <option value="TR">Turkey</option>
                                            <option value="TM">Turkmenistan</option>
                                            <option value="TC">Turks and Caicos Islands</option>
                                            <option value="TV">Tuvalu</option>
                                            <option value="VI">U.S. Virgin Islands</option>
                                            <option value="UG">Uganda</option>
                                            <option value="UA">Ukraine</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="UM">United States Minor Outlying Islands</option>
                                            <option value="UY">Uruguay</option>
                                            <option value="UZ">Uzbekistan</option>
                                            <option value="VU">Vanuatu</option>
                                            <option value="VA">Vatican</option>
                                            <option value="VE">Venezuela</option>
                                            <option value="VN">Vietnam</option>
                                            <option value="WF">Wallis and Futuna</option>
                                            <option value="EH">Western Sahara</option>
                                            <option value="YE">Yemen</option>
                                            <option value="ZM">Zambia</option>
                                            <option value="ZW">Zimbabwe</option>
                                    </select>
            </div>
            <div class="country-flag-wrapper"><figure id="sip--target--country-flag" class="country-flag"></figure></div>
        </div>
    </div>
    <div id="sip--results--positive" class="group--shipping-info-result group--shipping-info-positive">
        <div class="group group--shipping-banner--free-shipping">
            <h2 class="title">Orders over $35 get <strong>free
            <span class="shipping-info-filter--tracked">tracked</span>
            <span class="shipping-info-filter--untracked">
            worldwide</span> shipping</strong></h2>
        </div>
        <div class="group group--shipping-info group--shipping-info--available">
            <div class="inner">
                <div class="header">
                    <div class="bullet-wrapper">
                        <figure class="bullet"></figure>
                    </div>
                    <h3 class="title shipping-info-filter--tracked"><span class="sip--info-target" data-sip-info-type="shipping-class"></span> Shipping Available!</h3>
                    <h3 class="title shipping-info-filter--untracked">We ship to <span class="sip--info-target" data-sip-info-type="country"></span>!</h3>
                </div>
                <div class="copy">
                    <p>Welcome to the wonderful world of dbrand. Since 2011, we've been the global leader in device customization. As our company has grown, so has the importance of <span class="sip--info-target" data-sip-info-type="attributes-1"></span> shipping. We've worked closely with <span class="sip--info-target" data-sip-info-type="carrier"></span>, <span class="sip--info-target" data-sip-info-type="carrier-sub"></span>, to provide you with <span class="sip--info-target" data-sip-info-type="attributes-2"></span> shipping. All orders are sent using <span class="sip--info-target" data-sip-info-type="full-name"></span>.</p>
                </div>
            </div>
        </div>
        <div class="group group--shipping-info group--shipping-info--service">
            <div class="inner">
                <div class="header">
                    <div class="bullet-wrapper">
                        <figure class="bullet"></figure>
                    </div>
                    <h3 class="title">From our warehouse to your doorstep.</h3>
                </div>
                <div class="copy">
                    <p>Here's how this works: Once your order is placed, it enters our system and begins processing. Within 72 hours, often as little as 12, your custom order will be prepared by one of our highly trained fulfillment robots. Once your order is ready,
                    <span class="shipping-info-filter--tracked">a tracking number will automatically be generated by the friendly humans at <span class="sip--info-target" data-sip-info-type="carrier"></span>. The moment your order leaves our facility in Toronto, we'll send a shipping notification to the email you provided during checkout. <span class="sip--info-target" data-sip-info-type="tracking-suffix"></span></span>
                    <span class="shipping-info-filter--untracked">we'll send you an email notification that it's been shipped. The email will include an approximate delivery estimate timeframe. Once your order has been shipped, it will get on a dedicated flight from the <span class="sip--info-target" data-sip-info-type="carrier"></span> facility in New York, headed directly for <span class="sip--info-target" data-sip-info-type="country"></span>. Once it arrives in <span class="sip--info-target" data-sip-info-type="country"></span>, your shipment will be processed by the people who know local delivery in <span class="sip--info-target" data-sip-info-type="country"></span> best: your local postal service.</span>
                    Before you know it, your device will be wearing ACellShop and life will never be the same.</p>
                </div>
            </div>
        </div>
        <div class="group group--shipping-info group--shipping-info--time">
            <div class="inner">
                <div class="header">
                    <div class="bullet-wrapper">
                        <figure class="bullet"></figure>
                    </div>
                    <h3 class="title"><span class="sip--info-target" data-sip-info-type="time"></span></h3>
                </div>
                <div class="copy">
                    <p><span class="sip--info-target" data-sip-info-type="delivery-info"></span></p>
                </div>
            </div>
        </div>
        <div class="group group--shipping-info group--shipping-info--costs">
            <div class="inner">
                <div class="header">
                    <div class="bullet-wrapper">
                        <figure class="bullet"></figure>
                    </div>
                    <h3 class="title"><span class="sip--info-target" data-sip-info-type="costs"></span> Flat Rate Shipping</h3>
                </div>
                <div class="copy">
                    <p><span class="sip--info-target" data-sip-info-type="costs-info"></span></p>
                </div>
            </div>
        </div>
        <div class="group group--shipping-info group--shipping-info--no-tracking shipping-info-filter--untracked">
            <div class="inner">
                <div class="header">
                    <div class="bullet-wrapper">
                        <figure class="bullet"></figure>
                    </div>
                    <h3 class="title">Why is there no tracking?</h3>
                </div>
                <div class="copy">
                    <p>That's an understandable question. At dbrand, we have experience with every shipping provider imaginable. Before switching to <span class="sip--info-target" data-sip-info-type="full-name"></span>, we used a tracked service offered by a well-known logistics company. While the fact that it included a tracking number was fantastic, the reality is that tracking doesn't really mean much if delivery takes forever. With tracked services such as the one we were previously using, the physical delivery route from our warehouse to your doorstep was slow and ineffective. See, these types of services – ones which claim to have tracking, yet aren't true door-to-door couriers like FedEx – use two very inefficient processes: routing and rate shopping. The first one, routing, means that in order to get your package delivered to <span class="sip--info-target" data-sip-info-type="country"></span>, it must first visit a global sorting facility along with hundreds of thousands of other parcels. It spends a few days there getting sorted, at which point it gets rate shopped. What this means is that the sorting facility will ask all the nearby postal services: “Which one of you will deliver this ACellShop package to <span class="sip--info-target" data-sip-info-type="country"></span> for the lowest cost?” Once this lengthy process is complete, the lowest bidder will take control of the package and ship it to your country. By the time all this is done, a week or more has been added to the delivery of your package and the result is still the same: your local postal service actually makes the delivery.</p>
                    <p>By using <span class="sip--info-target" data-sip-info-type="full-name"></span>, we've skipped all the routing and rate shopping. Your package gets on a daily flight from our warehouse in Toronto to the <span class="sip--info-target" data-sip-info-type="carrier"></span> hub in New York. It gets on another flight that very same day, a flight headed directly to <span class="sip--info-target" data-sip-info-type="country"></span>. Once it arrives, your package is taken over by the local postal service, the same one which would be making the delivery had you gotten a tracking number, with the only difference being that there were no delays from tracking scans and re-sorting. The cost is extraordinarily low and every efficiency is used to make sure you get your order as quickly as possible.</p>
                </div>
            </div>
        </div>
    </div>
    <div id="sip--results--negative" class="group--shipping-info-result group--shipping-info-negative">
        <div class="group group--shipping-info group--shipping-info--unavailable">
            <div class="inner">
                <div class="header">
                    <div class="bullet-wrapper">
                        <figure class="bullet"></figure>
                    </div>
                    <h3 class="title">No shipping available</h3>
                </div>
                <div class="copy">
                    <p>Sorry, we don't currently ship to <span class="sip--info-target" data-sip-info-type="country"></span>. If you want to make a request that we support your country, use the button below to contact us.</p>
                    <p><a href="contact.php" class="btn btn-highlighted">Contact Us</a></p>
                </div>
            </div>
        </div>
    </div>
    <div id="sip--results--error" class="group--shipping-info-result group--shipping-info-error">
        <div class="group group--shipping-info group--shipping-info--error">
            <div class="inner">
                <div class="header">
                    <div class="bullet-wrapper">
                        <figure class="bullet"></figure>
                    </div>
                    <h3 class="title">Well, that's embarrassing...</h3>
                </div>
                <div class="copy">
                    <p>No idea what happened here. Try refreshing the page and selecting your country again. If the error persists, please use the button below to contact us.</p>
                    <p><a href="contact.php" class="btn btn-highlighted">Contact Us</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    var sip_feed = {"json_callback_url_base":"\/shipping\/data\/","default":{"country_code":"US","is_valid":true,"shipping_available":true,"country":"the United States","country_flag":"\/sites\/all\/modules\/custom\/checkout\/img\/country-flags\/64\/US.png","time":"2-5 business days","costs":"$3.95","carrier":"USPS","carrier-sub":"the domestic leader in shipping logistics","full-name":"USPS First-Class Parcel","tracked":"1","shipping-class":"Tracked","attributes-1":"reliable, affordable, fast","attributes-2":"affordable, expedited, multi-checkpoint tracked","delivery-info":"As a Canadian company, achieving affordable, quick delivery in the United States isn't easy. Most companies rely on a Canadian provider to figure out all the logistics and complications of getting merchandise cleared across the border. Not dbrand, though. We've developed a direct relationship with USPS to ensure all orders are sent straight from our warehouse in Canada to a USPS hub in the United States. That means no waiting on customs clearances and no additional import fees upon delivery. From the moment your USPS tracking number becomes active, you can expect delivery in as little as 2 business days.","costs-info":"That's right... it doesn't matter what the size of your product is or how many you've ordered. We've found a way to ensure you'll never pay more than $3.95 for the delivery of your order. Don't ask us how we did it, just give us your money before we change our mind."}};
</script>

        </div>

        

        <nav class="l-breadcrumb"><h2 class="element-invisible">You are here</h2><ul class="breadcrumb"><li class="itm breadcrumb-start"><a href="index.php"><i class="icn" aria-hidden="true">&#8904;</i><span class="title">Home</span></a></li><li class="itm"><span class="nolink">Shipping</span></li></ul></nav>    </div>

    
    <?php require 'shop/footer.php'; ?>
<!--footer class="l-footer" role="contentinfo">
          <section class="l-region l-region--interact">
    <div class="inner">
      <nav id="block-menu-menu-social-connection" role="navigation" class="block block--menu block--menu-menu-social-connection">
        <h4 class="block__title">Meet our SocialBots</h4>
    
  <ul class="list"><li class="first leaf itm itm--facebook"><a href="https://www.facebook.com/dbrandSkins" class="facebook" target="_blank"><span class="inner"><i class="icn" aria-hidden="true">f</i><span class="title">Like us on Facebook</span></span></a></li>
<li class="leaf itm itm--twitter"><a href="https://twitter.com/dbrandSkins" class="twitter"><span class="inner"><i class="icn" aria-hidden="true">t</i><span class="title">Follow Us on Twitter</span></span></a></li>
<li class="last leaf itm itm--youtube"><a href="https://www.youtube.com/dbrandSkins" class="youtube" target="_blank"><span class="inner"><i class="icn" aria-hidden="true">y</i><span class="title">Subscribe to our YouTube Channel</span></span></a></li>
</ul></nav>
<nav id="block-mailchimp-lists-newsletter-guests" class="block block--mailchimp-lists block--mailchimp-lists-newsletter-guests block--newsletter">
    
  <form class="mailchimp-lists-user-subscribe-form mailchimp-lists-user-subscribe-form-newsletter-guests" action="https://dbrand.com/shop/samsung-galaxy-s7-skins" method="post" id="mailchimp-lists-user-subscribe-form-newsletter-guests" accept-charset="UTF-8"><div><div id="mailchimp-newsletter-newsletter_guests" class="mailchimp-newsletter-wrapper"><div id="edit-mailchimp-lists-mailchimp-newsletter-guests-title" class="form-item form-type-item">
 <div class="form-item__inner">Receive Updates & Offers</div>
<div class="description">Stay up-to-date on new updates, temporary coupons and special offers, targeted at humans and robots alike!</div>
</div>
<div class="form-item form-item-mailchimp-lists-mailchimp-newsletter-guests-mergevars-EMAIL form-type-emailfield form-type--text form-type--text-monoline">
  <label for="edit-mailchimp-lists-mailchimp-newsletter-guests-mergevars-email"><span class="label__inner">Receive Updates &amp; Offers<span class="form-required" title="This field is required.">*</span></span></label>
 <div class="form-item__inner"><input placeholder="[ Email Address ]" type="email" id="edit-mailchimp-lists-mailchimp-newsletter-guests-mergevars-email" name="mailchimp_lists[mailchimp_newsletter_guests][mergevars][EMAIL]" value="" size="16" maxlength="128" class="form-text form-email required" /></div>
</div>
<div class="form-item form-item-mailchimp-lists-mailchimp-newsletter-guests-mergevars-NAME form-type-textfield form-type--text form-type--text-monoline">
  <label for="edit-mailchimp-lists-mailchimp-newsletter-guests-mergevars-name"><span class="label__inner">Name</span></label>
 <div class="form-item__inner"><input type="text" id="edit-mailchimp-lists-mailchimp-newsletter-guests-mergevars-name" name="mailchimp_lists[mailchimp_newsletter_guests][mergevars][NAME]" value="Human" size="25" maxlength="128" class="form-text" /></div>
</div>
</div><input type="submit" id="edit-submit" name="op" value="Sign Up" class="btn form-submit button" /><input type="hidden" id="form-kEXrVzXqFR8h5-PGLET44YayXxpwJDaleWP9ZnFDxIc" name="form_build_id" value="form-kEXrVzXqFR8h5-PGLET44YayXxpwJDaleWP9ZnFDxIc" />
<input type="hidden" id="edit-mailchimp-lists-user-subscribe-form-newsletter-guests" name="form_id" value="mailchimp_lists_user_subscribe_form_newsletter_guests" />
</div></form></nav>
    </div>
  </section>
          <section class="l-region l-region--resources">
    <div class="inner">
      <nav id="block-menu-menu-skins" role="navigation" class="block block--menu block--menu-menu-skins">
        <h4 class="block__title">Skins</h4>
    
  <ul class="list"><li class="first leaf itm itm--hfx-sbracks"><a href="nexus-skins.php" class="hfx-sbracks">Nexus Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="iphone-skins.php" class="hfx-sbracks">iPhone Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="razer-blade-skins.php" class="hfx-sbracks">Razer Blade Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="macbook-skins.php" class="hfx-sbracks">MacBook Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="samsung-galaxy-skins.php" class="hfx-sbracks">Samsung Galaxy Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="shop/samsung-galaxy-s7-skins.php" class="hfx-sbracks">Samsung Galaxy S7 Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="shop/samsung-galaxy-s7-edge-skins.php" class="hfx-sbracks">Samsung Galaxy S7 Edge Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="lg-g-skins.php" class="hfx-sbracks">LG G Skins</a></li>
<li class="last leaf itm itm--hfx-sbracks"><a href="htc-skins.php" class="hfx-sbracks">HTC Skins</a></li>
</ul></nav>
<nav id="block-menu-menu-orders" role="navigation" class="block block--menu block--menu-menu-orders">
        <h4 class="block__title">More Skins</h4>
    
  <ul class="list"><li class="first leaf itm itm--hfx-sbracks"><a href="audio-technica-skins.php" class="hfx-sbracks">Audio Technica Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="dell-xps-skins.php" class="hfx-sbracks">Dell XPS Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="moto-skins.php" class="hfx-sbracks">Moto Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="xperia-skins.php" class="hfx-sbracks">Xperia Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="pebble-skins.php" class="hfx-sbracks">Pebble Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="xbox-ps4-skins.php" class="hfx-sbracks">Xbox &amp; PlayStation Skins</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="oneplus-skins.php" class="hfx-sbracks">OnePlus Skins</a></li>
<li class="last leaf itm itm--hfx-sbracks"><a href="ipad-skins.php" class="hfx-sbracks">iPad Skins</a></li>
</ul></nav>
<nav id="block-menu-menu-bits-and-bytes" role="navigation" class="block block--menu block--menu-menu-bits-and-bytes">
        <h4 class="block__title"> Bits and Bytes</h4>
    
  <ul class="list"><li class="first leaf itm itm--hfx-sbracks"><a href="contact.php" class="hfx-sbracks">Contact Us</a></li>
<li class="leaf itm itm--hfx-sbracks"><a href="contests.php" class="hfx-sbracks">Contests</a></li>
<li class="last leaf itm itm--hfx-sbracks"><a href="winners.php" class="hfx-sbracks">UnboxTherapy Giveaway</a></li>
</ul></nav>
    </div>
  </section>
          <section class="l-region l-region--footer">
    <div class="inner">
      <div id="block-block-1" class="block block--block block--block-1 block--copyright">
      ACellShop ©3016 - All rights reserved.</div>
<nav id="block-menu-menu-footer" role="navigation" class="block block--menu block--menu-menu-footer">
      
  <ul class="list"><li class="first leaf itm itm--hfx-dualframe-h"><a href="about/terms-of-sale.php" class="hfx-dualframe-h">Terms of Sale</a></li>
<li class="leaf itm itm--hfx-dualframe-h"><a href="about/privacy-policy.php" class="hfx-dualframe-h">Privacy Policy</a></li>
<li class="last leaf itm itm--hfx-dualframe-h"><a href="about/terms-of-use.php" class="hfx-dualframe-h">Terms of Use</a></li>
</ul></nav>
    </div>
  </section>
    </footer>

    <div id="page-overlay" class="l-page-overlay"></div>

</div>
    
    <!-- BEGIN Google Code for Remarketing Tag -->
    <!-- http://google.com/ads/remarketingsetup -->
    <!--script type="text/javascript">
        /* <![CDATA[ */
        var google_conversion_id = 968322868;
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        /* ]]> */
    </script>
    <div class="element-invisible">
        <script type="text/javascript" src="www.googleadservices.com/pagead/f.txt"></script>
    </div>
    <noscript>
        <div style="display:inline;">
            <img height="1" width="1" style="border-style:none;" alt="" src="http://googleads.g.doubleclick.net/pagead/viewthroughconversion/968322868/?value=0&amp;guid=ON&amp;script=0"/>
        </div>
    </noscript>
    <!-- END Google Code for Remarketing Tag -->

    <!-- Fresh URL by wistia.com -->
    <!--script src="wistia.com/labs/fresh-url/v1.js" async></script>

<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"7619304e7b","applicationID":"5390901","transactionName":"ZAZTMUNWDBAEB0xdXV1McAZFXg0NSgBaQgFsAFkAUlwNFhE7S1xbQxNYC1ZoCw0DC2dEU1QG","queueTime":0,"applicationTime":128,"atts":"SEFQRwtMHx4=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>

<!-- Mirrored from dbrand.com/shipping by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 01 Sep 2016 11:25:56 GMT -->

