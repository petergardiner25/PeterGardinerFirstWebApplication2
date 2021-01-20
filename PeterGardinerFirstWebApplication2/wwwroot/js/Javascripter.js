var submit = document.getElementById("submitbutton");

submit.addEventListener("click", function(){
    let assignment = document.getElementById('assignment').value;
    let project = document.getElementById('project').value;
    let quiz = document.getElementById('quiz').value;
    let exam = document.getElementById('exams').value;
    let intex = document.getElementById('intex').value;
    let grade = " "

    assignmentW = assignment * .5;
    projectW = project * .1;
    quizW = quiz * .1;
    examW = exam * .2;
    intexW = intex * .1; 

    total = assignmentW + projectW + quizW + examW + intexW; 

    if (total >= 94) {
        grade = 'A';
    }
    else if (total < 94 && total >= 90) {
        grade = 'A-';
    }
    else if (total < 90 && total >= 87) {
        grade = 'B+';
    }
    else if (total < 87 && total >= 84) {
        grade = 'B';
    }
    else if (total < 84 && total >= 80) {
        grade = 'B-';
    }
    else if (total < 80 && total >= 77) {
        grade = 'C+';
    }
    else if (total < 77 && total >= 74) {
        grade = 'C';
    }
    else if (total < 74 && total >= 70) {
        grade = 'C-';
    }
    else if (total < 70 && total >= 67) {
        grade = 'D+';
    }
    else if (total < 67 && total >= 64) {
        grade = 'D';
    }
    else if (total < 64 && total >= 60) {
        grade = 'D-';
    }
    else {
        grade = 'E';
    }


    alert(total + ' ' + grade);
});