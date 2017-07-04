/**
 * Created by ZengTianSheng on 2017/3/24.
 */
export function swipe(dir, fun) {
    var startX,
        startY,
        endX,
        endY,
        door;
    document.addEventListener('touchstart', touchStart, false);
    document.addEventListener('touchmove', touchMove, false);
    document.addEventListener('touchend', function () {
        if (door) {
            switch (dir) {
                case 'left':
                    if ((endX - startX) > 150 &&(Math.abs(endY-startY)<Math.abs(endX-startX))) {
                        fun('l');
                        endX = 0;
                        endY = 0;
                        startX = 0;
                        startY = 0;
                    }
                    break;
                case 'right':
                    if ((startX - endX ) > 150 &&(Math.abs(endY-startY)<Math.abs(endX-startX))) {
                         fun('r');
                        endX = 0;
                        endY = 0;
                        startX = 0;
                        startY = 0;
                    }
                    break;
                case 'top':
                    if (startY - endY > 150 &&(Math.abs(endY-startY)>Math.abs(endX-startX))) {
                        fun('t');
                        endX = 0;
                        endY = 0;
                        startX = 0;
                        startY = 0;
                    }
                    break;
                case 'bottom':
                    if (endY - startY > 150 &&(Math.abs(endY-startY)>Math.abs(endX-startX))) {
                        fun('b');
                        endX = 0;
                        endY = 0;
                        startX = 0;
                        startY = 0;
                    }
                    break;
            }
        }
        door = false;
    });
    function touchStart(event) {
        var touch = event.touches[0];
        startX = Number(touch.pageX);
        startY = Number(touch.pageY);
    }
    function touchMove(event) {
        event.preventDefault();
        var touch = event.touches[0];
        endX = Number(touch.pageX);
        endY = Number(touch.pageY);
        door = true;
    }
}