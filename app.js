
/* add index, value of true and false */



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
  /*
  return `
  <div id="startContainer">
             <h2>This App Quiz will check your knowledge about U S History regards to presidency and the year served in office.</h2>
    <button type="button" id="start">Start Quiz</button>
    </div>`;*/

}

/* ----------------------------Template for the next page--------------------------------*/

/* 
 HTML template that shows  the evolution  of question number and the Score 

 */

 function evolutionQuestionAndScore(){

  console.log('`evolutionQuestionAndScore` ran' );
  /*
   return `
    <ul class="result">
    <li id="questionNumber">
    QUestion Number: ${store.currentQuestion +1}/${STORE.questions.length}
    </li>
    <li id="score">
    Score: ${STORE.score}/${store.questions.length}
    </li>
    </ul?
   `;*/

 }

 /**
  * ---------------------Answers Options for one question ----------------------------*/

  function generateAnswerOptionsHtml(){

    console.log('`generateAnswerOptionsHtml` ran' );
    const answerOptionsArray = store.questions[store.currentQuestions].answers;
    let answersOptionHtml = " ";
    let i= 0;
    /*answersOptionsArray.forEach(answer => {
      answersOptionHtml +=
      /*  still to be fixed    <why </input> ---------------------------------------- */
      /*<div id="input1" >
         <input type="radio" id="option${i+1}" name="option" value="Ronald-Reagan"/>
         <label for="option${i+1}"> ${answer}</label>
      </div>

    });*/

   /* const answersOptionArray = store.questions[STORE.currentQuestion].answers;*/

  }

  /*--------------------- Generate Html template for one question -------------------------------*/
  function generateQuestionHtmlTemplate(){

    console.log('`generateQuestionHtmlTemplate` ran');
    let currentQuestion = store.questions[store.currentQuestion];

    return `
    <form class="firstForm">
    <div class="usQuestion">
    <p> ${currentQuestion.question}</p>
    </div>
    <div class="option">
      ${generateAnswerOptionsHTML()};
    </div>
    </div>
    `

  }




/********** RENDER FUNCTION(S) **********/





// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// Html template generator //


function select(){
  console.log(select);
  $('#start').after(h3Template);
  
}

function callBack(){
  
  $('#start').click(select);

}
function h3Template(){
  return '<h3>Souleymane Kone</h3>';
}

$(callBack);


function renderHtmlDoc(){

  const  htmlDocElement = htmlDoc;
  
  $('.startContainer').html(htmlDocElement);
  
}
function htmlDoc (){
  return `${'.container'}`;
}
$(renderHtmlDoc);
