$(document).ready(function () {
    $("#lightMode").click(function () {
        $("body").css({
            "background-color": "white",
            "color": "black"
        });
    });

    $("#darkMode").click(function () {
        $("body").css({
            "background-color": "black",
            "color": "white"
        });
    });
});
