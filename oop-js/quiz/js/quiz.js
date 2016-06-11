function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.total = 0;
    this.questionIndex = 0;
}

Quiz.prototype = {
    init: function () {
        console.log('Quiz initialized');

        var self = this;

        var questions = this.questions;
        this.total = questions.length;

        if (this.total) {
            this.initQuestion();
            $('#questionnaire').show();
        } else {
            alert('Sorry, some problem occurs, or questions were not defined');
            $('#welcome').show();
        }

        $('#choices').on('click', 'li', self.checkListItemClick.bind(self));

        $('.container').on('click', '#next', function(){
            $(this).remove();
            $('#answer').removeClass('correct').removeClass('wrong').text('');
            $('#choices').removeClass('wrong').removeClass('correct');
            $('#choices').find('li').removeClass('wrong-item').removeClass('correct-item');

            if (self.total === self.questionIndex) {
                self.finishQuiz();
            } else {
                self.initQuestion();
                $('#choices').on('click', 'li', self.checkListItemClick.bind(self));
            }
        });
    },

    checkListItemClick: function (scope) {
        var self = this,
            $elem = $(scope.target),
            answer = $elem.text();
        self.answerId = $elem.attr('data-index');

        self.checkGuess(answer);
        $('#choices').off('click', 'li');
        $('#choices').after('<button class="btn btn-success pull-right" id="next">Next</button>');
    },

    initQuestion: function () {
        var questionIndex = this.questionIndex,
            total = this.total,
            questionInfo = 'Question ' + (questionIndex+1) + ' of ' + total,
            questionItem = this.getQuestion(),
            question = questionItem.question,
            choices = questionItem.choices;

        this.answer = questionItem.answer;

        $('#question').text(question);
        $('#question-info').text(questionInfo);
        this.drawChoicesItems(choices);
    },

    drawChoicesItems: function (choices) {
        var self = this;
        var itemsData = '';

        choices.forEach(function(item, index){
            item = self.htmlEntities(item);
            itemsData += '<li data-index="' + index + '">' + item + '</li>';
        });

        $('#choices').html(itemsData);
    },

    getQuestion: function () {
        return this.questions[this.questionIndex];
    },

    checkGuess: function(answer) {
        if (this.isCorrect(answer)) {
            this.score++;
            this.displayCorrect();
        } else {
            this.displayWrong();
        }
        this.questionIndex++;
    },

    isCorrect: function (choice) {
        return this.answer === choice;
    },

    displayCorrect: function () {
        var self = this;

        $('#choices').addClass('correct');

        $('#choices').find('li').each(function (index, item) {
            var itemId = $(item).attr('data-index');
            if (itemId === self.answerId) {
                $(item).addClass('correct-item');
            }
        });

        $('#answer').addClass('correct')
                    .text('Correct!');
    },

    displayWrong: function () {
        var self = this;

        $('#choices').addClass('wrong');

        $('#choices').find('li').each(function (index, item) {
            var itemId = $(item).attr('data-index');
            if (itemId === self.answerId) {
                $(item).addClass('wrong-item');
            }
        });

        $('#answer').addClass('wrong')
                    .html('Wrong! Correct answer is: <pre>' + self.getQuestion().answer + '</pre>');
    },

    finishQuiz: function () {
        $('#questionnaire').hide();

        var result = this.score / this.total;
        var message = 'You need more practice! ';
        if (result === 1) {
            message = 'Perfect! ';
        } else if (result > 0.85) {
            message = 'Great Job! ';
        } else if (result > 0.5) {
            message = 'Way to Go! ';
        }

        $('#welcome h2').text('Game Over!');
        $('#welcome p').text(message + 'Your score is: ' + this.score + '/' + this.total);
        // $('#welcome button').text('Start the quiz again');
        $('#welcome button').remove();
        $('#welcome').show();

        this.resetParams();
    },

    resetParams: function () {
        this.score = 0;
        this.total = 0;
        this.questionIndex = 0;
    },

    htmlEntities: function (str) {
        return String(str)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;');
    }
}
