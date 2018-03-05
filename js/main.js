var bomberman = document.getElementById("bomberman");
var bombermanLeft = 0;
var bombermanTop = 0;
/* arrow keys are only triggered by onkeydown, not onkeypress

keycodes are:

    left = 37

    up = 38

    right = 39

    down = 40

*/

document.onkeydown = movement;

function movement(e) {

  if (e.keyCode == 39) {

    bombermanLeft += 5;

    bomberman.style.left = bombermanLeft + 'px';

  } else if (e.keyCode == 37) {

    bombermanLeft += -5;

    bomberman.style.left = bombermanLeft + 'px';

  } else if (e.keyCode == 38) {

    bombermanTop += -5;

    bomberman.style.top = bombermanTop + 'px';

  } else if (e.keyCode == 40) {

    bombermanTop += 5;

    bomberman.style.top = bombermanTop + 'px';

  }

  movement();

}