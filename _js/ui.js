/*<!-- UI.JS -->*/
/*
Description:The "ui" class handles the user interface and some of the other page
display functionality.
*/
var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.ui = (function ($) {
    var ui = {
        init: function () {},
        hideDialog: function () {
            $(".dialog").fadeOut(300);
        }
    };
    return ui;
})(jQuery);