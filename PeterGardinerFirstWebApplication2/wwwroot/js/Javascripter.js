var submit = document.getElementById("submitbutton");

submit.addEventListener("click", function(){
    let assignment = document.getElementById('assignment').value;
    let project = document.getElementById('project').value;
    let quiz = document.getElementById('quiz').value;
    let exam = document.getElementById('exams').value;
    let intex = document.getElementById('intex').value;

    assignmentW = assignment * .5;
    projectW = project * .1;
    quizW = quiz * .1;
    examW = exam * .2;
    intexW = intex * .1; 

    total = assignmentW + projectW + quizW + examW + intexW; 

    alert(total);
});