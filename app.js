
const store = {
  // 5 or more questions are required
  questions: [
    { // Question 1
      question: 'Who was the president of the United States in 1960?',
      answers: [
        'Ronald Reagan',
          'Dwight Eisenhower',
          'Barack Obama',
          'Jimmy Carter'
      ],
      correctAnswer: 'Dwight Eisenhower'
    },
    { // Question 2
      question: 'Who was the president of the United States in 1970?',
      answers: [
          'Ronald Reagan',
          'Jimmy Carter',
          'Richard Nixon',
          'Harry Truman'
      ],
      correctAnswer: 'Richard Nixon'
    },
    { // Question 3
      question: 'Who was the president of the United States in 1980?',
      answers: [
        'Bill Clinton',
        'George W Bush',
        'Lyndon Johnson',
        'Jimmy Carter'
      ],
      correctAnswer: 'Jimmy Carter'
    },
    { // Question 4
      question: 'Who was the president of the United States in 1990?',
        answers: [
          'George Bush',
          'George W Bush',
          'Bill Clinton',
          'Richard Nixon'
        ],
        correctAnswer: 'George Bush'
    },
    { // Question 5
      question: 'Who was the president of the United States in 1995?',
        answers: [
          'George W Bush',
          'Bill Clinton',
          'Barack Obama',
          'Jimmy Carter'
        ],
        correctAnswer: 'Bill Clinton'
      
    },
    { // Question 6
      question: 'Who was the president of the United States in 2000?',
        answers: [
          'George W Bush',
          'Donald J Trump',
          'Barack Obama',
          'Bill Clinton'
        ],
        correctAnswer: 'Bill Clinton'
    },
    { // Question 7
      question: 'Who was the president of the United States in 2005?',
        answers: [
          'George W Bush',
          'Donald J Trump',
          'Barack Obama',
          'Jimmy Carter'
      ],
      correctAnswer: 'George W Bush'
    
    },
    { // Question 8
      question: 'Who was the president of the United States in 2010?',
        answers: [
          'George Bush',
          'George W Bush',
          'Bill Clinton',
          'Barack Obama'
        ],
        correctAnswer: 'Barack Obama'
    },
    { // Question 9
      question: 'Who was the president of the United States in 2015',
        answers: [
          'George Bush',
          'Barack Obama',
          'Bill Clinton',
          'Richard Nixon'
        ],
        correctAnswer: 'Barack Obama'
    },
    { // Question 10
      question: 'Who is the current president of the United States?',
        answers: [
          'George Bush',
          'George W Bush',
          'Donald J. Trump',
          'Richard Nixon'
        ],
        correctAnswer: 'Donald J. Trump'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  submittingAnswer: false,
  score: 0,

  currentQuestionState: {
    answerArray: []
  }
};


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

               
                        /********** TEMPLATE GENERATION FUNCTIONS **********/

                             // These functions return HTML templates

//++++++++++++++++++The HTML for the firstPage page, provides the button to begin quiz+++++++++++++++++

function generateFirstPageHtml() {
  return `
   <div id="container-1">
  <div class="firstPage">
    <form>
      <p>
        This Quiz will check your knowledge about US presidency history.
      </p>
      <button type="submit"id="StartQuizApp" autofocus>Start Quiz</button>
    </form>
  </div>
  </div>
    `;
}
function generateStartQuestionHtml(questionObject) {
  return `
    <div class='quiz-interface'>
      <p> Question: ${questionObject.index}/${store.questions.length}</p>
      <p>
       ${questionObject.question.question}
      </p>

      <form>
      <ol type="1">
        ${generateQuizAnswers(questionObject.question.answers)}
      </ol>
      <button type="submit" class="submit-answer">Submit Answer</button>
      </form> 
      <p>Score: ${store.score}</p>
     </div>
    `;
}


function generateAnswerResults(){
  let answerArray = store.currentQuestionState.answerArray;

  const buttons = {
    next: ' <button type="submit" class="next-question" autofocus>Next Question</button>',
    results: '<button type="submit" class="see-results" autofocus>See Results</button>'
  };

  let correctResponse = `"${answerArray[1]}" is correct`;
  let incorrectResponse = `${answerArray[2]} is not correct. The correct answer is<br><br>
  "${answerArray[1]}"`;

  let isLastQuestion = (store.questionNumber + 1) === (store.questions.length);
  
  return `
    <div class="answer-response" id="container-1">
    <form>
    <p>${answerArray[0] === true ? correctResponse : incorrectResponse}</p>
    <p> Score: ${store.score}</p>
   ${isLastQuestion ? buttons.results : buttons.next}
    </form>
    </div>
  `;
}


function generateQuizAnswers(answers){
  let answerArray = [];
  let indexArray = [];
  answers.forEach(answer => {
    answerArray.push(answer);
    indexArray.push(answers.indexOf(answer));
  });
  return answerArray.map(answer => stringifyAnswerArray(answer)).join('');
}

function stringifyAnswerArray(answer){
  let questionNumber = store.questionNumber;
  let name = store.questions[questionNumber].answers.indexOf(answer);
  return `
  <div id=container-1>
    <li>
      <div class="answer-container" >
      <input type="radio" name="answer" id="answer-${name}" data-answer="${answer}" required>
      <label for="answer-${name}"> ${answer}</label>
     
      </div>
    </li>
    </div>
  `;
}

function generateQuizResultsString(){
  return `
    <div class='quiz-results' id="container-1">
      <p>
       Thank you for taking the USA Presidency History Quiz App. 
         </p>
          <p>You scored ${store.score}/${store.questions.length}</p>            
        <button class="restart-quiz">Restart Quiz</button>      
    </div>   
    
`;
}



/**********************************RENDER FUNCTION(S) ********************************************/

function renderQuiz () {

  if(store.quizStarted === false) {
    if(store.questionNumber === store.questions.length){
      const quizResultsString = generateQuizResultsString();
      $('main').html(quizResultsString); 
    } else {
      const quizWelcomeInterfaceString = generateFirstPageHtml();
      $('main').html(quizWelcomeInterfaceString);
    }
  } else if (store.quizStarted === true) {
    if(store.submittingAnswer === false) {
      const quizInterfaceString = generateStartQuestionHtml(currentQuestion());
      $('main').html(quizInterfaceString);
    } else if (store.submittingAnswer === true) {
      const quizAnswerResponseString = generateAnswerResults();
      $('main').html(quizAnswerResponseString);
    }
  } 
}


//**************quizStarted = true Allows us to start the quiz************
function startQuiz() {
  store.quizStarted = true;
}

//****************currentQuestion************************
function currentQuestion(){
  let index = store.questionNumber;
  let questionObject = store.questions[index];
  return {
    index: index +1,
    question: questionObject
  };
}

// Allows to move to the next question of the quiz

function nextQuestion(){
  if (store.questionNumber < store.questions.length){
    store.questionNumber++;
    store.submittingAnswer =false;
  } else if(store.questionNumber === store.questions.length) {
    store.quizStarted = false;
  }
}

//************ This function Validate the correct  answer**************/

function validateCorrectAnswer() {
  let radios = $('input:radio[name=answer]');
  let selectedAnswer = $('input[name="answer"]:checked').data('answer');
  let questionNumber = store.questionNumber;
  let correctAnswer = store.questions[questionNumber].correctAnswer;
  if (radios.filter(':checked').length === 0) {
   return;
  } else {
    store.submittingAnswer = true;
    if(selectedAnswer === correctAnswer){
      store.score += 1;
      store.currentQuestionState.answerArray = [true, correctAnswer, selectedAnswer];
    } else {
      store.currentQuestionState.answerArray = [false, correctAnswer, selectedAnswer];
    }
  }
}

function seeResults() {
  store.quizStarted = false;
  store.questionNumber ++;
}

function restartQuiz() {
  store.quizStarted = false;
  store.questionNumber = 0;
  store.submittingAnswer = false;
  store.currentQuestionState.answerArray = [];
}

/********************EVENT HANDLER FUNCTIONS for submit, click,*******************/


function handleBeginQuizSubmit(){
  
  $('main').on('click', '#StartQuizApp', (event) =>{
    event.preventDefault();
    startQuiz();
    renderQuiz();
  });
}

function handleSubmitAnswer() {
  $('main').on('click' , '.submit-answer', (event)=>{
    event.preventDefault();
    validateCorrectAnswer();
    renderQuiz();
  });
}

function handleNextQuestionSubmit(){
  $('main').on('click', '.next-question', (event) => {
    event.preventDefault();
    nextQuestion();
    renderQuiz();
  });
}

function handleSeeResultsSubmit(){
  $('main').on('click', '.see-results', (event) => {
    event.preventDefault();
    seeResults();
    renderQuiz();
  });
}

function handleRestartQuizSubmit(){
  $('main').on('click', '.restart-quiz', (event) => {
    event.preventDefault();
    restartQuiz();
    renderQuiz();
  });
}


// This is the call back function which will launch all other functions after the page is loaded

function handleQuiz (){
  renderQuiz();
  handleBeginQuizSubmit();
  handleSubmitAnswer();
  handleNextQuestionSubmit();
  handleRestartQuizSubmit();
  handleSeeResultsSubmit();

}

$(handleQuiz);
