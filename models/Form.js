
var Form = function(data){
    this.name = data.name;
    this.questions = [];
    var that = this;
    for (var i = 0; i < data.questions.length; i++) {
        var q = data.questions[i];
        that.questions.push(new Question(q));
    }
};