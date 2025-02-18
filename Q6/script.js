$(document).ready(function () {
    let quotes = [
        "Believe in yourself and all that you are.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "Don't watch the clock; do what it does. Keep going.",
        "Hardships often prepare ordinary people for an extraordinary destiny."
    ];

    $("#generateQuote").click(function () {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        $("#quote").fadeOut(300, function () {
            $(this).text(quotes[randomIndex]).fadeIn(300);
        });
    });
});
