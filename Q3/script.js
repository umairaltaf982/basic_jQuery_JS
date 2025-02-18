$(document).ready(function () {
    $("#toggleBtn").click(function () {
        $(".more-text").slideToggle();

        if ($(this).text() === "Read More") {
            $(this).text("Read Less");
        } else {
            $(this).text("Read More");
        }
    });
});
