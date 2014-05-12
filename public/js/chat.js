/**
 * Created by dossorio on 28/04/2014.
 */

$.fn.chat = function () {

    var socket = io.connect('http://localhost');
    var chat = this;

    chat.append('<input name="msg" type="text" placeholder="Write sth & enter"/>');

    chat.keypress(function (e) {
        if (e.keyCode == 13) {
            input = $('input', chat),
                msg = input.val();

            chat.append('<p>You: ' + msg + '</p>');
            input.val('');
            socket.emit('msg sent', { msg: msg });
        }
    });

    socket.on('msg broadcast', function(data){
        chat.append('<p>Others: ' + data.msg + '</p>');
    });

};

$(function () {
    $('.chat').chat();
});
