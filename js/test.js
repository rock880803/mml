$(document).ready(function () {
    var x = 10;
    var y = 20;
    $(".img-resp").mouseover(function (e) {
        var tooTip = "<div id='tooTip'><img src'" + this.href + "'></img></div>";
        $("body").append(tooTip);
        $("#tooTip").css({
            position: "absolute",
            'top': (e.pageY + y) + "px", "left": (e.pageX + x) + "px"
        }).show("fast");
    }).mouseout(function () {
        $("#tooTip").remove();
    }).mousemove(function (e) {
        $("#tooTip").css({
            position: "absolute",
            'top': (e.pageY + y) + "px", "left": (e.pageX + x) + "px"
        });
    });
});