jQuery(document).ready(function() {
    function e() {
        for (var e = t.getElementsByClassName("view-grouping-content"), n, r = 0, m = e.length; m > r; r++) {
            n = 1;
            for (var l = e[r].getElementsByClassName("view-title"), u = 0, o = l.length; o > u; u++) {
                var c = l[u].firstChild,
                    i = c.innerHTML;
                "kit" === i.toLowerCase() && (c.innerHTML += " " + n++)
            }
        }
    }
    var t = null;
    null !== document.getElementById("views-form-commerce-cart-form-default") ? t = document.getElementById("views-form-commerce-cart-form-default") : 0 !== document.getElementsByClassName("view-commerce-cart-summary").length && (t = document.getElementsByClassName("view-commerce-cart-summary")[0]), null !== t && e()
}), jQuery(document).ready(function(e) {
    var t = null;
    if (null !== document.getElementById("views-form-commerce-cart-form-default") && (t = document.getElementById("views-form-commerce-cart-form-default")), null !== t) {
        var n = {
            elements: {
                $textInputs: e(t.querySelectorAll(".form-text")),
                $updateButton: e(t.querySelectorAll("#edit-submit"))
            },
            triggers: {
                textInputReturn: function(e) {
                    13 === e.keyCode && (e.preventDefault(), n.elements.$updateButton.trigger("click"))
                }
            },
            init: function() {
                this.elements.$textInputs.on("keydown", this.triggers.textInputReturn)
            }
        };
        n.init()
    }
});