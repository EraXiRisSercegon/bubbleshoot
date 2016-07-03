/*<!-- GAME.JS -->*/
var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function ($) {
    var Game = function () {
        var curBubble;
        var board;
        this.init = function () {
            $(".but_start_game").on("click", startGame);
        };
        var startGame = function () {
            $(".but_start_game").off("click");
            BubbleShoot.ui.hideDialog();
            curBubble = getNextBubble();
            board = new BubbleShoot.Board();
            BubbleShoot.ui.drawBoard(board);
            $("#game").on("click", clickGameScreen);
        };
        var getNextBubble = function () {
            var bubble = BubbleShoot.Bubble.create();
            bubble.getSprite().addClass("cur_bubble");
            $("#board").append(bubble.getSprite());
            return bubble;
        }
        var clickGameScreen = function (e) {
            var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(), e);
            var duration = 750;
            var distance = 1000;
            var distX = Math.sin(angle) * distance;
            var distY = Math.cos(angle) * distance;
            var bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
            var coords = {
                x: bubbleCoords.left + distX,
                y: bubbleCoords.top - distY
            };
            BubbleShoot.ui.fireBubble(curBubble, coords, duration);
        };
    };
    return Game;
})(jQuery);