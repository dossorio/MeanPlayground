/**
 * Created by dossorio on 29/04/2014.
 */

$.fn.tanks = function () {

    /* pg = Canvas Playground */
    var pg = document.createElement('canvas'),
        pgCxt = pg.getContext('2d');

    pg.height = this.height();
    pg.width = this.width();
    pg.textContent = 'Please update your browser urgently! :(';

    $(pg).appendTo(this);

    var pos = {
        x: 200,
        y: 200,
        move: function (x, y) {
            this.y = y;
            console.log('Pos: ' + this.x + ' - ' + x + ', ' + this.y + ' - ' + y);
        }
    };

    pgCxt.fillRect(200, 200, 25, 25);

    /* keys 37, 38, 39 and 40 */
    $(document).keydown(function(e){
        switch(e.keyCode){
            case 37:
                console.log('left');
                break;
            case 38:
                console.log('up');
                pgCxt.clearRect(pos.x, pos.y, 25, 25);
                pos.y = pos.y - 4;
                pos.move(pos.x, pos.y);
                pgCxt.fillRect(pos.x, pos.y, 25, 25);
                break;
            case 39:
                console.log('right');
                break;
            case 40:
                console.log('down');
                break;
        }
    });
};

$(function () {
    $('.tanks').tanks();
});
