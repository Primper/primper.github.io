$(document).ready(function () {

    // The function receives the result of the spell check
    fix_spell = function (data) {
        data.forEach(function (elem) {

            // The function finds the input field by name
            $('#text_field').val(

                // And after that he changes everything to the right
                $('#text_field').val().replace(
                    elem['word'],
                    elem['s'][0] || elem['word']
                )
            );
        });
    }
});

// Keystroke handler
document.addEventListener('keydown', function (e) {

    // If pressed a SPACEBAR or ENTER
    if ((e.keyCode == 32) || (e.keyCode == 13)) {

        // Divide the text into lines
        var lines = $('#text_field').val().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n");

        // After processes each line
        lines.forEach(function (line) {
            if (line.length) {

                // We send a string with the words for verification, and the result is sent to the "fix_spell" function
                $.getScript('http://speller.yandex.net/services/spellservice.json/checkText?text=' + line + '&callback=fix_spell');
            }
        });
    }
});