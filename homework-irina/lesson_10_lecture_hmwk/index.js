var FPS_COUNT = 40;
var gameState = {
	pixel: {
		x: 0,
		y: 150
	}
};
document.getElementsByClassName('account1')[0].innerHTML=0;
var pixel = document.getElementsByClassName('pixel')[0];

function render () {
	console.log('>>>: DRAW FRAME:' );
	pixel.style.left = gameState.pixel.x + 'px';
	pixel.style.top = gameState.pixel.y + 'px';
}




setInterval(render, 1000/ FPS_COUNT);

var gameState1 = {
    pixel1: {
        m: 780,
        n: 150,
    }
};

var pixel1 = document.getElementsByClassName('pixel-1')[0];
function render1 () {
    console.log('>>>: DRAW FRAME:' );
    pixel1.style.left = gameState1.pixel1.m + 'px';
    pixel1.style.top = gameState1.pixel1.n + 'px';
}


window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key === 40) {
    gameState.pixel.y+=10;
   }else if (key === 38) {
    gameState.pixel.y-=10;
   }
   if (key == 83) {
    gameState1.pixel1.n+=10;
   }else if (key == 87) {
    gameState1.pixel1.n-=10;
   }
   if(key == 32) {
    clearInterval(move);
   }

   var c = gameState1.pixel1.n
    var k = [c+10, c+20, c+30, c+40, c+50, c+60, c+70, c+80, c+90, c+100];

}




setInterval(render1, 1000/ FPS_COUNT)
var ballState = {
    pixelB: {
        x1: 190,
        y1: 390
    }
};

function add() {
    return document.getElementsByClassName('account2')[0].innerHTML++;
}

var ball = document.getElementsByClassName('ball')[0];

function render2 () {
    console.log('>>>: DRAW FRAME:' );
    ball.style.top = ballState.pixelB.x1 + 'px';
    ball.style.left = ballState.pixelB.y1 + 'px';
    ballState.pixelB.x1+=2;
    ballState.pixelB.y1+=8;

if(ballState.pixelB.x1 == 290) {
        clearInterval(move);
        ball.style.display="none";
        add();

} 
    if (ballState.pixelB.x1 == 284) {
        if(ballState.pixelB.y1 >= gameState1.pixel1.n &&  ballState.pixelB.y1 <= gameState1.pixel1.n+100){
        clearInterval(move);
        var moveback=setInterval(render3, 1000/ FPS_COUNT);
        }
    }


}

    
    var move = setInterval(render2, 1000/ FPS_COUNT);

function render3() {
    ball.style.top = ballState.pixelB.x1 + 'px';
    ball.style.left = ballState.pixelB.y1 + 'px';
    ballState.pixelB.x1-=2;
    ballState.pixelB.y1-=8;
    
}
