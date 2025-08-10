
let correctAnswers=0;
let incorrectAnswers=0;
let unattempted=0;
let questions = [
    {
        question: 'What is Walter White’s profession at the start of the series?',
        optionA: 'High school chemistry teacher',
        optionB: 'Police officer',
        optionC: 'Mechanic',
        optionD: 'Pharmacist',
        correctAnswer: 'High school chemistry teacher'
    },
    {
        question: 'What is the street name of Walter White’s alter ego?',
        optionA: 'Heisenberg',
        optionB: 'Eisenberg',
        optionC: 'Schrödinger',
        optionD: 'Blue King',
        correctAnswer: 'Heisenberg'
    },
    {
        question: 'Who is Walter White’s former student and later partner in crime?',
        optionA: 'Hank Schrader',
        optionB: 'Saul Goodman',
        optionC: 'Jesse Pinkman',
        optionD: 'Gustavo Fring',
        correctAnswer: 'Jesse Pinkman'
    },
    {
        question: 'What color is the methamphetamine produced by Walt and Jesse?',
        optionA: 'White',
        optionB: 'Blue',
        optionC: 'Yellow',
        optionD: 'Clear',
        correctAnswer: 'Blue'
    },
    {
        question: 'What fast-food restaurant chain does Gustavo Fring own?',
        optionA: 'Los Pollos Hermanos',
        optionB: 'Pollos Amigos',
        optionC: 'El Pollo Feliz',
        optionD: 'Chicken Brothers',
        correctAnswer: 'Los Pollos Hermanos'
    },
    {
        question: 'What type of cancer is Walter White diagnosed with?',
        optionA: 'Lung cancer',
        optionB: 'Pancreatic cancer',
        optionC: 'Liver cancer',
        optionD: 'Throat cancer',
        correctAnswer: 'Lung cancer'
    },
    {
        question: 'Who is Hank Schrader married to?',
        optionA: 'Skyler White',
        optionB: 'Marie Schrader',
        optionC: 'Jane Margolis',
        optionD: 'Lydia Rodarte-Quayle',
        correctAnswer: 'Marie Schrader'
    },
    {
        question: 'What is the name of Saul Goodman’s real persona?',
        optionA: 'Jimmy McGill',
        optionB: 'James Gordon',
        optionC: 'Saul Bernstein',
        optionD: 'Michael Ehrmantraut',
        correctAnswer: 'Jimmy McGill'
    },
    {
        question: 'Which character says the line, "I am the one who knocks"?',
        optionA: 'Hank Schrader',
        optionB: 'Walter White',
        optionC: 'Jesse Pinkman',
        optionD: 'Mike Ehrmantraut',
        correctAnswer: 'Walter White'
    },
    {
        question: 'What is the name of Jesse Pinkman’s girlfriend who dies in season 2?',
        optionA: 'Andrea Cantillo',
        optionB: 'Jane Margolis',
        optionC: 'Wendy S.',
        optionD: 'Marie Schrader',
        correctAnswer: 'Jane Margolis'
    },
    {
        question: 'What poisonous plant does Walter use to harm Brock?',
        optionA: 'Hemlock',
        optionB: 'Lily of the Valley',
        optionC: 'Oleander',
        optionD: 'Foxglove',
        correctAnswer: 'Lily of the Valley'
    },
    {
        question: 'What is Mike Ehrmantraut’s previous profession?',
        optionA: 'Private detective',
        optionB: 'Lawyer',
        optionC: 'Ex-cop',
        optionD: 'FBI agent',
        correctAnswer: 'Ex-cop'
    },
    {
        question: 'Who kills Gustavo Fring?',
        optionA: 'Jesse Pinkman',
        optionB: 'Hector Salamanca',
        optionC: 'Walter White',
        optionD: 'Mike Ehrmantraut',
        correctAnswer: 'Hector Salamanca'
    },
    {
        question: 'What does "DEA" stand for, where Hank Schrader works?',
        optionA: 'Drug Enforcement Agency',
        optionB: 'Drug Enforcement Administration',
        optionC: 'Danger Enforcement Agency',
        optionD: 'Defense Enforcement Administration',
        correctAnswer: 'Drug Enforcement Administration'
    },
    {
        question: 'Who is Lydia Rodarte-Quayle associated with?',
        optionA: 'Madrigal Electromotive',
        optionB: 'Los Pollos Hermanos',
        optionC: 'DEA',
        optionD: 'Schrader Minerals',
        correctAnswer: 'Madrigal Electromotive'
    },
    {
        question: 'What is the name of Walt and Skyler’s car wash?',
        optionA: 'Sparkle Car Wash',
        optionB: 'A1A Car Wash',
        optionC: 'Blue Crystal Car Wash',
        optionD: 'Supreme Shine Car Wash',
        correctAnswer: 'A1A Car Wash'
    },
    {
        question: 'Which chemical is used by Walt and Jesse to dissolve bodies?',
        optionA: 'Sulfuric acid',
        optionB: 'Hydrochloric acid',
        optionC: 'Hydrofluoric acid',
        optionD: 'Nitric acid',
        correctAnswer: 'Hydrofluoric acid'
    },
    {
        question: 'What does Walt throw at a car in frustration in season 5?',
        optionA: 'A brick',
        optionB: 'A pizza',
        optionC: 'A wrench',
        optionD: 'A chair',
        correctAnswer: 'A pizza'
    },
    {
        question: 'Who kills Hank Schrader?',
        optionA: 'Jack Welker',
        optionB: 'Todd Alquist',
        optionC: 'Walter White',
        optionD: 'Jesse Pinkman',
        correctAnswer: 'Jack Welker'
    },
    {
        question: 'What is the final song played in the series finale?',
        optionA: 'Crystal Blue Persuasion',
        optionB: 'Baby Blue',
        optionC: 'Goodbye My Lover',
        optionD: 'Don’t Stop Believin’',
        correctAnswer: 'Baby Blue'
    }
];


        document.querySelector('.container').innerHTML=`
        
        <ol>
        <li><b>Number of Questions:</b>${questions.length}</li>
        <li><b>Question Format:</b> Each question has 4 options — only one is correct.</li>
        <li>
          <b>Negative Marking:</b>
          <ul>
            <li><b>i) Correct answer:</b> ✅ +1 point</li>
            <li><b>ii) Wrong answer:</b> ❌ 0 points</li>
            <li><b>iii) Unattempted question:</b> 0 points</li>
          </ul>
        </li>
        <li><b>Skipping a Question:</b> You may choose not to answer a question and move to the next one.</li>
        <li><b>No Going Back:</b> Once you move to the next question, you cannot return to the previous one.</li>
        <li><b>Timing:</b> No time limit per question unless specified, but complete the quiz in one sitting.</li>
      </ol>
        
        `;

        document.querySelector('.next-container').innerHTML=`
        
        <button onclick="playQuiz()">Play Quiz</button>
        
        `;

        let i;
        function nextQ(nextIndex){
            if(nextIndex>=questions.length){
                document.querySelector('.wrapper').innerHTML=`
                
                <div class="score-container">
                    <div class="heading"><p>Result</p>
                    <hr>
                </div>
                <div class="your-score">
                    <div class="your-score-circle ">
                        <span class="number">${correctAnswers}</span>
                        <span>Your Score</span>
                    </div>
                </div>

                <div class="other-scores">
                    <div class="row">
                        <div class="max-score-box">
                            <span class="number">${questions.length}</span>
                            <span>Max Score</span>
                        </div>
                        <div class="attempted-box">
                            <span class="number">${correctAnswers+incorrectAnswers}</span>
                            <span>Attempted</span>
                        </div>  
                    </div>
                    <div class="row">
                        <div class="unattempted-box">
                            <span class="number">${questions.length-(correctAnswers+incorrectAnswers)}</span>
                            <span>Unattempted</span>
                        </div>
                        <div class="wrong-box">
                            <span class="number">${incorrectAnswers}</span>
                            <span>Wrong</span>
                        </div>
                </div>
            </div>
            <div class="ending">
                <div><hr></div>
                <div class="btn"><button onclick=playAgain()>Play Again</button></div>
            </div>
        </div>

                
                
                `;
            }
            i=nextIndex;
            document.querySelector('.container').innerHTML=`

            <div class="question"><span>${questions[i].question}</span></div>
            <div id="status"></div>
            <div id="options-box">
                <div class="option-a "><button class="option">${questions[i].optionA}</button></div>
                <div class="option-b "><button class="option">${questions[i].optionB}</button></div>
                <div class="option-c "><button class="option">${questions[i].optionC}</button></div>
                <div class="option-d "><button class="option">${questions[i].optionD}</button></div>
            </div>
        
            `;

            document.querySelector('.next-container').innerHTML=`
        
            <div><span>${i+1} of ${questions.length} Questions</span></div>
            <div><button onclick=nextQ(${i+1})>Next</button></div>
        
            `;

            document.querySelectorAll('.option').forEach(opt=>{
                opt.addEventListener('click',()=>{
                    document.querySelectorAll('.option').forEach(btn=>{
                        btn.disabled=true
                    });
                    if(opt.innerText!==questions[i].correctAnswer){
                        opt.classList.add('incorrect');
                        document.querySelector('#status').innerHTML=`
                        
                        <span>Inorrect Answer!!❌❌</span>

                        `;
                        incorrectAnswers+=1;
                    }
                    else{
                        
                        document.querySelector('#status').innerHTML=`
                        
                        <span>Correct Answer!!✅✅</span>

                        `;
                        correctAnswers+=1;
                    }
                    unattempted=questions.length-(correctAnswers+incorrectAnswers);
                    document.querySelectorAll('.option').forEach(btn=>{
                        if(btn.innerText===questions[i].correctAnswer){
                            btn.classList.add('correct');
                        }
                    });
                })
            })


        }

        function playQuiz(){
            document.querySelector('.container').classList.add('quiz-mode');
            document.querySelector('.next-container').classList.add('quiz-mode');
            nextQ(0);
        }
        function playAgain(){
                correctAnswers=0;
                incorrectAnswers=0;
                unattempted=0;
            document.querySelector('.wrapper').innerHTML=`
            
             <div class="container">
            <ol>
              <li><b>Number of Questions:</b> ${questions.length}</li>
              <li><b>Question Format:</b> Each question has 4 options — only one is correct.</li>
              <li>
                <b>Negative Marking:</b>
                <ul>
                <li><b>i) Correct answer:</b> ✅ +1 point</li>
                <li><b>ii) Wrong answer:</b> ❌ 0 points</li>
                <li><b>iii) Unattempted question:</b> 0 points</li>
            </ul>
                </li>
                <li><b>Skipping a Question:</b> You may choose not to answer a question and move to the next one.</li>
                <li><b>No Going Back:</b> Once you move to the next question, you cannot return to the previous one.</li>
                <li><b>Timing:</b> No time limit per question unless specified, but complete the quiz in one sitting.</li>
            </ol>

            </div>
            <div class="next-container"><button onclick=playQuiz()>Play Quiz</button></div>
            </div>
            
            
            `;
        }
        

