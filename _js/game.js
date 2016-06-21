/*<!-- GAME.JS -->*/
var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function ($) {
    var Game = function () {
        this.init = function () {
            $(".but_start_game").on("click", startGame);
        };
        var startGame = function () {
            $(".but_start_game").off("click");
            BubbleShoot.ui.hideDialog();
        };
    };
    return Game;
})(jQuery);