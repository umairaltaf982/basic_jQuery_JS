$(document).ready(function () {
    let maxChars = 100;

    $("#message").keyup(function () {
        let textLength = $(this).val().length;
        let remaining = maxChars - textLength;

        $("#charCount").text(remaining);

        if (remaining <= 0) {
            $(this).val($(this).val().substring(0, maxChars));
            $("#charCount").text(0);
        }
    });
});
