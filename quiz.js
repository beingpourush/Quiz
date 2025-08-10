
let correctAnswers=0;
let incorrectAnswers=0;
let unattempted=0;
let questions=[
    {
        question: 'Who holds the record for the highest individual score in a One Day International (ODI) match?',
        optionA: 'Rohit Sharma',
        optionB: 'Martin Guptill',
        optionC: 'Virender Sehwag',
        optionD: 'Chris Gayle',
        correctAnswer: 'Rohit Sharma'
    },
    {
        question: 'Which country won the first ICC Cricket World Cup in 1975?',
        optionA: 'Australia',
        optionB: 'England',
        optionC: 'West Indies',
        optionD: 'India',
        correctAnswer: 'West Indies'
    },
    {
        question: 'Who was the captain of the Indian cricket team when they won the 2011 ICC Cricket World Cup?',
        optionA: 'Virat Kohli',
        optionB: 'MS Dhoni',
        optionC: 'Sourav Ganguly',
        optionD: 'Sachin Tendulkar',
        correctAnswer: 'MS Dhoni'
    },
    {
        question: 'Which bowler has taken the most wickets in Test cricket?',
        optionA: 'Muttiah Muralitharan',
        optionB: 'Shane Warne',
        optionC: 'James Anderson',
        optionD: 'Anil Kumble',
        correctAnswer: 'Muttiah Muralitharan'
    },
    {
        question: 'In cricket, what is the maximum number of overs a bowler can bowl in a standard ODI match?',
        optionA: '5 overs',
        optionB: '10 overs',
        optionC: '15 overs',
        optionD: '20 overs',
        correctAnswer: '10 overs'
    },
    {
        question: 'Who scored the fastest century in ODI cricket?',
        optionA: 'AB de Villiers',
        optionB: 'Corey Anderson',
        optionC: 'Shahid Afridi',
        optionD: 'Virat Kohli',
        correctAnswer: 'AB de Villiers'
    },
    {
        question: 'Which stadium is known as the “Home of Cricket”?',
        optionA: 'Eden Gardens',
        optionB: 'Melbourne Cricket Ground',
        optionC: 'Lord’s Cricket Ground',
        optionD: 'The Oval',
        correctAnswer: 'Lord’s Cricket Ground'
    },
    {
        question: 'Who was the first batsman to score 10,000 runs in Test cricket?',
        optionA: 'Sunil Gavaskar',
        optionB: 'Allan Border',
        optionC: 'Brian Lara',
        optionD: 'Sachin Tendulkar',
        correctAnswer: 'Sunil Gavaskar'
    },
    {
        question: 'Which country hosted the ICC T20 World Cup in 2022?',
        optionA: 'India',
        optionB: 'Australia',
        optionC: 'England',
        optionD: 'South Africa',
        correctAnswer: 'Australia'
    },
    {
        question: 'Who was named the Player of the Tournament in the 2019 ICC Cricket World Cup?',
        optionA: 'Ben Stokes',
        optionB: 'Kane Williamson',
        optionC: 'Rohit Sharma',
        optionD: 'Mitchell Starc',
        correctAnswer: 'Kane Williamson'
    },


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
        
