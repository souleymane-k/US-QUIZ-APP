const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who was the president of the United States in 1960?',
      answers: [
        'Ronald Reagan',
        'Dwight Eisenhower',
        'Barack Obama',
        'Jimmy Carter'
      ],
      correctAnswer: 'Dwight Eisenhower'
    },
    {
      question: 'Who was the president of the United States in 1970?',
      answers: [
        'Ronald Reagan',
        'Jimmy Carter',
        'Richard Nixon',
        'Harry Truman'
      ],
      correctAnswer: 'Richard Nixon'
    },
    {
      question: 'Who was the president of the United States in 1980?',
      answers: [
        'Bill Clinton',
        'George W Bush',
        'Lyndon Johnson',
        'Jimmy Carter'
      ],
      correctAnswer: 'Jimmy Carter'
    },
    {
      question: 'Who was the president of the United States in 1990?',
      answers: [
        'George Bush',
        'George W Bush',
        'Bill Clinton',
        'Richard Nixon'
      ],
      correctAnswer: 'George Bush'
    },
    {
      question: 'Who was the president of the United States in 2000?',
      answers: [
        'Barack Obama',
        'George W Bush',
        'Lyndon Johnson',
        'Bill Clinton'
      ],
      correctAnswer: 'Bill Clinton'
    },
    {
    question: 'Who was the president of the United States in 2010?',
      answers: [
        'George W Bush',
        'Donald J Trump',
        'Barack Obama',
        'Jimmy Carter'
      ],
      correctAnswer: 'Barack Obama'
    },
    {
      question: 'Who is the current president of the United States 2020?',
      answers: [
        'George W Bush',
        'Dwight Eisenhower',
        'Donald J Trump',
        'Jimmy Carter'
      ],
      correctAnswer: 'Donald J Trump'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};



/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
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
/* HTML template for the start pages */
function generateStartScreenHtmlT(){

  console.log('`generateStartScreenHtmlT` ran');
  
  return `
  <div id="startContainer">
             <h2>This App Quiz will check your knowledge about U S History regards to presidency and the year served in office.</h2>
             <a href="file:///Users/desolo/Desktop/US-QUIZ-APP/index.html" id="start">Start Quiz</a>
    </div>`;

}

/* ----------------------------Template for the next page--------------------------------*/

/* 
 HTML template that shows  the evolution  of question number and the Score 

 */

 function evolutionQuestionAndScore(){

  console.log('`evolutionQuestionAndScore` ran' );
  
   return `
    <ul class="result">
    <li id="questionNumber">
    Question Number: ${store.currentQuestion +1}/${store.questions.length}
    </li>
    <li id="score">
    Score: ${store.score}/${store.questions.length}
    </li>
    </ul?
   `;

 }

 /**
  * ---------------------Answers Options for one question ----------------------------*/

  function generateAnswerOptionsHtml(){

    console.log('`generateAnswerOptionsHtml` ran' );
    const answerOptionsArray = store.questions[store.currentQuestion].answers;
    let answersOptionHtml = " ";
     for (let i= 0; i<store.length; i++){
    answersOptionsArray.forEach(answer => {
      answersOptionHtml += `<div id="input-container${i}"> 
      <input type="radio" id="option${i+1}" name="option" value="${answer}" index="$(i+1)" require/>
      <label for="option${i+1}">${answer}</label>
  </div>
   `;
      
    });
   return answersOptionHtml;
  }
}
   /* const answersOptionArray = store.questions[STORE.currentQuestion].answers;*/
       /*};

  

  /*--------------------- Generate Html template for one question -------------------------------*/
  function generateQuestionHtmlTemplate(){

    console.log('`generateQuestionHtmlTemplate` ran');
    let currentQuestion = store.questions[store.currentQuestion];

    return `
    <form id="question-form"  class="question-form" >
    <div class="usQuestion">
    <p> ${currentQuestion.question}</p>
    </div>
    <div class="option">
      ${generateAnswerOptionsHTML()};
    </div>
    </div>
     
    `
    /** double check the button */

  };

  /** Generate html template for the result */
  function generateResultsScreen() {
    console.log('`generateResults, ran');
    return `
      <div class="results">
        <form id="js-restart-quiz">
            <div class="group">
              <div class="item-double">
                <label>Your Score is: ${store.score}/${store.questions.length}</label>
              </div>
              <div class="item">
                <button type="button" id="restart"> Restart Quiz </button>
              </div>
              </div>
          </form>
      </div>
    `;
  }
  
/**User with feedback weather or not their result is correct or not */
function generateFeedback(){
  console.log('`generateFeedback, ran`');
  let correctAnswer = store.questions[STORE.currentQuestion].correctAnswer;
  let html = '';
  if (answerStatus === 'correct') {
    html = `
    <div class="right-answer">That is correct!</div>
    `;
  }
  else if (answerStatus === 'incorrect') {
    html = `
      <div class="wrong-answer">That is incorrect. The correct answer is ${correctAnswer}.</div>
    `;
  }
  return html;
}

/********** RENDER FUNCTION(S) **********/
function render(){
  event.preventDefault();
  console.log('render, ran');
  let html = " ";
  if (store.currentQuizStarted === false){
    $('main').html(generateStartScreenHtmlT());
    return;
  }
  else if (store.currentQuestion >= 0 && store.currentQuestion <store.questions.length){
    html = evolutionQuestionAndScore();
    html += generateQuestionHtmlTemplate()
    $('main').html(html);
  }
  else{
    $('main').html(generateResultsScreen());
  }
}


// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
/* handle click start button -----------------------------*/
function handleStartClicked(){
  console.log(handleStartClicked);
  $('main').on('click', '#start', function (event) {
    store.quizStarted = true;
    render();
  });
}
/* handle click next button -----------------------------*/
function handleNextQuestionbutton(){
$('body').on('click', '#btn-next', (evnt)=>{

  render();
});

}
/* handle submit button for the submission of the form */
function handleFormSubmission(){
  $('body').on('submit', '#question-form', function (event) {
    event.preventDefault();
    const currentQuestion = store.questions[store.currentQuestion]
    /** let the user checked box*/
    let selectedOption = $('input[name=options]:checked').val();


    /**
     * Creates an id '#input-container' + the index of 
     * the current question in the answers array.
     * 
     * Example: #input-container-0
     */
    let optionContainerId = `#input-container-${currentQuestion.answers.findIndex(i => i === selectedOption)}`;

    if (selectedOption === currentQuestion.correctAnswer) {
      store.score++;
      $(optionContainerId).append(generateFeedback('correct'));
    }
    else {
      $(optionContainerId).append(generateFeedback('incorrect'));
    }
    store.currentQuestion++;
    // hide the submit button
    $('#btn-sbt').hide();
    // disable all inputs
    $('input[type=radio]').each(() => {
      $('input[type=radio]').attr('disabled', true);
    });
    // show the next button
    $('#btn-next').show();

  });
}
/**
 * Reset the all data to  restart the quiz
 */
function restartQuiz() {
  store.quizStarted = false;
  store.currentQuestion = 0;
  store.score = 0;
}

function handleRestartButton() {
  $('body').on('click', '#restart', () => {
    restartQuiz();
    render();
  });
}


function handleQuizApp(){
  render();
  handleStartClicked();
  handleNextQuestionbutton();
  handleFormSubmission();
  handleRestartButton();
}

$(handleQuizApp);

// Html template generator //


/*function select(){
  console.log(select);
  $('#start').after(h3Template);
  
}

function callBack(){
  
  $('#start').click(select);

}
function h3Template(){
  return '<h3>Souleymane Kone</h3>';
}

$(callBack);*/



