var count_of_correct = 0;
var questions = [
    {
        text: "Сколько цветов у радуги?",
        options: [1, 100, 7, 6],
        correct: 2
    },
    {
        text: "Самый нелюбимый день недели?",
        options: ["Понедельник", "Пятница", "Суббота", "Среда"],
        correct: 0
    },
    {
        text: "2+2?",
        options: [6, 190, 0, 4],
        correct: 3
    }
];
var i = 0; //отвечает за номер текущего вопроса

function getQuestions(i) {
    document.getElementById("questions").innerHTML = questions[i].text;
    var blocks = document.getElementsByClassName("answers");
    for (var j=0; j<4; j++) {
        blocks[j].innerHTML = questions[i].options[j];
        
    }
}

for (var k=0; k<4; k++) { //4 - количество вариантов ответов на каждый вопрос
    var div_child = document.createElement("div");
    div_child.setAttribute("id", k);
    div_child.classList.add("answers");
    document.getElementById("container").appendChild(div_child);
}
getQuestions(i);
var ans = document.getElementsByClassName("answers");

for(var l=0; l<ans.length; l++) {
    ans[l].onclick = function() {
        ++i;
        //если ответили на все вопросы
        if(i>=questions.length) {
            var elem = document.getElementById("container");
            elem.remove();
            var res = document.getElementById("result");
            res.innerHTML = "Результат: " + count_of_correct + " из " + questions.length;
            res.style.visibility = "visible";
        }
        else {
            getQuestions(i);
            document.addEventListener('click', e => {
            if(e.target.id == questions[i-1].correct) {
                count_of_correct++;
            }
        });
        }
    };
}