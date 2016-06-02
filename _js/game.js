var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
    var Game = function(){
        this.init = function(){
            $(".but_start_game").on("click", startGame);
        };
        var startGame = function(){
            
        };
    };
    return Game;
 })(jQuery);