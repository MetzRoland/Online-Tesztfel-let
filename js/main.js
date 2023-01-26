const allQuestions = [...fourChoiceQuestions, ...trueFalseQuestions];
const mainEl = document.querySelector(".main");

let html = "";

for([index,question] of fourChoiceQuestions.entries()){
    html = `
        <div class="question-div question-div-4a" id="question-div${index}">
            <div class="description-div">
                <p class="question">${question.question}</p>
                <p class="description">${question.description}</p>
            </div>

            <div class="anwsers-div">
                <ul class="choice-list">
                    <li class="choice">
                        <input name="anwser${index}4a" type="radio" value="${question.choises[0]}">${question.choises[0]}</input>
                    </li>
                    <li class="choice">
                        <input name="anwser${index}4a" type="radio" value="${question.choises[1]}">${question.choises[1]}</input>
                    </li>
                    <li class="choice">
                        <input name="anwser${index}4a" type="radio" value="${question.choises[2]}">${question.choises[2]}</input>
                    </li>
                    <li class="choice">
                        <input name="anwser${index}4a" type="radio" value="${question.choises[3]}">${question.choises[3]}</input>
                    </li>
                </ul>
            </div>
        </div>
    `
    

    mainEl.insertAdjacentHTML("beforeend",html);
}

for([index,question] of trueFalseQuestions.entries()){
    html = `
        <div class="question-div question-div-tf" id="question-div${index}">
            <div class="description-div">
                <p class="question">${question.question}</p>
                <p class="description">${question.description}</p>
            </div>

            <div class="anwsers-div">
                <ul class="choice-list">
                    <li class="choice">
                        <input name="anwser${index}tf" type="radio" value="${question.choises[0]}">${question.choises[0]}</input>
                    </li>
                    <li class="choice">
                        <input name="anwser${index}tf" type="radio" value="${question.choises[1]}">${question.choises[1]}</input>
                    </li>
                </ul>
            </div>
        </div>
    `
    

    mainEl.insertAdjacentHTML("beforeend",html);
}

if(mainEl){
    mainEl.insertAdjacentHTML("beforeend",'<button class="submit-btn" type="submit">Ellenőrzés!</button>');
}

const submitBtn = document.querySelector(".submit-btn");
const questionDivs1 = document.querySelectorAll(".question-div-4a");
const questionDivs2 = document.querySelectorAll(".question-div-tf");
const allQuestionDivs = [...questionDivs1,...questionDivs2];
let score = 0;

submitBtn.addEventListener("click",() => {
    questionDivs1.forEach((element,index) => {
        let anwserList = [...document.querySelectorAll(`#${element.id} input`)];
            
        for(anwser of anwserList){
            if(anwser.checked && fourChoiceQuestions[index].anwser === anwser.defaultValue){
                score++;
            }
        }
    });
    
    questionDivs2.forEach((element,index) => {
        let anwserList = [...document.querySelectorAll(`#${element.id} input`)];
            
        for(anwser of anwserList){
            if(anwser.checked && trueFalseQuestions[index].anwser === anwser.defaultValue){
                score++;
            }
        }
    });
    
    console.log(`Your score is ${score} / ${allQuestions.length}`);
    mainEl.insertAdjacentHTML("beforeend",`<p class="result-text">Pontszámod: ${score} / ${allQuestions.length}</p>`);
    
    let percentResult = (score / allQuestions.length) * 100;
    mainEl.insertAdjacentHTML("beforeend",`<p class="result-text">Százalék: ${percentResult.toFixed(0)}%</p>`);
});
