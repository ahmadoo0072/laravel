jQuery(document).ready(function($){var e=window.globalMethods,s={elements:{wrapper:document.querySelector("#iphone-contest-alert--linkwrapper"),$dismiss:$("#iphone-contest-alert--dismiss")},triggers:{dismiss:function(i){i.preventDefault(),e.missionNative.slideTransition(s.elements.wrapper,!1,160),e.missionNative.removeClass(s.elements.wrapper,"active"),e.missionNative.setCookie("iphone-6-contest-alert-dismissed","",4)}}};null!==s.elements.wrapper&&(s.elements.$dismiss.on("click",s.triggers.dismiss),e.missionNative.issetCookie("iphone-6-contest-alert-dismissed")||setTimeout(function(){e.missionNative.slideTransition(s.elements.wrapper,!0,160),e.missionNative.addClass(s.elements.wrapper,"active")},500))});