$(document).ready(function () {
    $('#welcome').on('click', 'button', function () {
        $('#welcome').hide();

        var quiz = new Quiz(questions);
        quiz.init();
    });
});