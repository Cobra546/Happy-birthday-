// =========================
// GIFT PROGRESS
// =========================

let quizCompleted = false;
let surveyCompleted = false;
let gameCompleted = false;
// =========================
// SCREEN SWITCHER
// =========================

function showScreen(id){

    document
    .querySelectorAll(".screen")
    .forEach(screen=>{
        screen.classList.remove("active");
    });

    document
    .getElementById(id)
    .classList.add("active");
}

// =========================
// PIN SYSTEM
// =========================

const CORRECT_PIN = "1102";

let enteredPin = "";

function updateDots(){

    for(let i=1;i<=4;i++){

        let dot =
        document.getElementById(
        "dot"+i
        );

        if(i<=enteredPin.length){
            dot.style.background="white";
        }else{
            dot.style.background="transparent";
        }
    }
}

function enterPin(num){

    if(
        enteredPin.length >= 4
    ) return;

    enteredPin += num;

    updateDots();

    if(
        enteredPin.length === 4
    ){
        checkPin();
    }
}

function deletePin(){

    enteredPin =
    enteredPin.slice(0,-1);

    updateDots();
}

function clearPin(){

    enteredPin = "";

    updateDots();
}

function checkPin(){

    if(
        enteredPin === CORRECT_PIN
    ){

        setTimeout(()=>{

            showScreen(
            "storyScreen"
            );

            startStory();

        },500);

    }else{

        let card =
        document.querySelector(
        ".glass-card"
        );

        card.classList.add(
        "shake"
        );

        if(
            navigator.vibrate
        ){
            navigator.vibrate(300);
        }

        setTimeout(()=>{

            card.classList.remove(
            "shake"
            );

        },500);

        enteredPin = "";

        updateDots();
    }
}
// =========================
// STORY DATA
// =========================

const storyData = [

{
    image:"Fashion Magazine in Mint Green Green Black and White Minimal Type-Driven St_20260601_200220_0000.png",
    text:"Blow The Candles ✨🕯️"
},

{
    image:"lv_0_20260601195641.png",
    text:"Cut The Cake 🎂🔪"
},

{
    image:"lv_0_20260601194959.png",
    text:"One For You ❤️<br>And One For Me 🥰"
}

];

let currentStory = 0;

// =========================
// START STORY
// =========================

function startStory(){

    currentStory = 0;

    loadStory();
}

// =========================
// LOAD STORY
// =========================

function loadStory(){

    const image =
    document.getElementById(
    "storyImage"
    );

    const popup =
    document.getElementById(
    "storyPopup"
    );

    popup.style.display =
    "none";

    image.src =
    storyData[currentStory]
    .image;

    setTimeout(()=>{

        popup.innerHTML =
        storyData[currentStory]
        .text;

        popup.style.display =
        "block";

    },1500);
}

// =========================
// STORY CLICK
// =========================

document.addEventListener(
"click",
function(e){

    const storyScreen =
    document.getElementById(
    "storyScreen"
    );

    if(
        !storyScreen.classList
        .contains("active")
    ){
        return;
    }

    currentStory++;

    if(
        currentStory <
        storyData.length
    ){

        loadStory();

    }else{

        startSlideshow();

    }

});
// =========================
// SLIDESHOW DATA
// =========================

const slides = [

{
    type:"VID_20260601_063646_653.mp4",
    src:"assets/slide1.mp4"
},

{
    type:"Snapchat-1743314209.jpg",
    src:"assets/slide2.jpg"
},

{
    type:"VID_20260601_064829_653.mp4",
    src:"assets/slide3.mp4"
},

{
    type:"Snapchat-1667479255.jpg",
    src:"assets/slide4.jpg"
},

{
    type:"VID_20260601_074532_975.mp4",
    src:"assets/slide5.mp4"
},

{
    type:"Snapchat-1308820083.jpg",
    src:"assets/slide6.jpg"
},

{
    type:"VID_20260601_074542_592.mp4",
    src:"assets/slide7.mp4"
},

{
    type:"Snapchat-1094199920.jpg",
    src:"assets/slide8.jpg"
},

{
    type:"Snapchat-1056806331.jpg",
    src:"assets/slide9.jpg"
},

{
    type:"VID_20260601_074547_747.mp4",
    src:"assets/slide10.mp4"
},

{
    type:"Snapchat-374458413.jpg",
    src:"assets/slide11.jpg"
},

{
    type:"Snapchat-497018224.jpg",
    src:"assets/slide12.jpg"
}

];

let currentSlide = 0;

// =========================
// START SLIDESHOW
// =========================

function startSlideshow(){

    showScreen(
    "slideshowScreen"
    );

    currentSlide = 0;

    loadSlide();
}

// =========================
// LOAD SLIDE
// =========================

function loadSlide(){

    const image =
    document.getElementById(
    "slideImage"
    );

    const video =
    document.getElementById(
    "slideVideo"
    );

    image.style.display =
    "none";

    video.style.display =
    "none";

    const item =
    slides[currentSlide];

    // IMAGE

    if(
        item.type === "image"
    ){

        image.src =
        item.src;

        image.style.display =
        "block";

        image.classList.remove(
        "slideAnim"
        );

        void image.offsetWidth;

        image.classList.add(
        "slideAnim"
        );

        setTimeout(()=>{

            nextSlide();

        },1500);

    }

    // VIDEO

    if (item.type === "video") {

    video.src = item.src;

    video.style.display = "block";

    video.currentTime = 0;

    video.play();

    clearTimeout(window.videoTimer);

    window.videoTimer = setTimeout(() => {

        video.pause();

        nextSlide();

    }, 3000);

    }

// =========================
// NEXT SLIDE
// =========================

function nextSlide(){

    currentSlide++;

    if(
        currentSlide <
        slides.length
    ){

        loadSlide();

    }else{

        showScreen(
        "giftScreen"
        );

    }

}
.slideAnim{

    animation:
    slideShowAnim
    1.5s ease;
}

@keyframes slideShowAnim{

    0%{
        opacity:0;
        transform:
        scale(1.15);
    }

    100%{
        opacity:1;
        transform:
        scale(1);
    }

}
// =========================
// OPEN GIFT
// =========================

function openGift(num){

    showScreen(
    "giftContentScreen"
    );

    if(num === 1){
        startQuiz();
    }

    if(num === 2){
        startSurvey();
    }

    if(num === 3){
        startHeartGame();
    }

}

function backToGifts(){

    showScreen(
    "giftScreen"
    );

}

// =========================
// QUIZ
// =========================

const quizQuestions = [

{
q:"The day when we see each other?? ❤️",
options:[
"11 February",
"27 May",
"8 April",
"25 March"
],
answer:2
},

{
q:"What is the time when I confess you?? ❤️",
options:[
"8:13",
"7:50",
"2:30",
"8:17"
],
answer:0
},

{
q:"What's the thing I quit for you?? ❤️",
options:[
"Smoking",
"Fighting",
"Using Abusing Language",
"Talk With Other Girls"
],
answer:0
}

];

let quizIndex = 0;
let quizScore = 0;

function startQuiz(){

    quizIndex = 0;
    quizScore = 0;

    loadQuiz();
}

function loadQuiz(){

    const q =
    quizQuestions[quizIndex];

    let html = `

    <h2>${q.q}</h2>

    `;

    q.options.forEach(
    (option,index)=>{

        html += `
        <button
        onclick="answerQuiz(${index})"
        class="quizBtn">
        ${option}
        </button>
        `;

    });

    document
    .getElementById(
    "giftData"
    ).innerHTML = html;

}

function answerQuiz(index){

    if(
        index ===
        quizQuestions[
        quizIndex
        ].answer
    ){
        quizScore++;
    }

    quizIndex++;

    if(
        quizIndex <
        quizQuestions.length
    ){

        loadQuiz();

    }else{
quizCompleted = true;

document
.querySelectorAll(
".gift-box"
)[0]
.innerHTML = "✔️";

checkAllGifts();
        document
        .getElementById(
        "giftData"
        ).innerHTML = `
        <h2>
        Score:
        ${quizScore}/3 💜
        </h2>

        <p>
        You know our story
        very well ❤️
        </p>
        `;
    }

}

// =========================
// SURVEY
// =========================

surveyCompleted = true;

document
.querySelectorAll(
".gift-box"
)[1]
.innerHTML = "✔️";

checkAllGifts();
const surveyQuestions = [

"What's something you wish I would quit doing? 💜",

"What's your favorite memory of us? ❤️",

"What is the reason you continue this relationship, and why did you choose it? 💕",

"What's one thing you want us to do together in the future? ✨",

"Write a message for me 💌"

];

let surveyIndex = 0;

function startSurvey(){

    surveyIndex = 0;

    loadSurvey();
}

function loadSurvey(){

    document
    .getElementById(
    "giftData"
    ).innerHTML = `

    <h2>
    ${surveyQuestions[
    surveyIndex
    ]}
    </h2>

    <textarea
    id="surveyAnswer"
    rows="6"
    style="
    width:100%;
    margin-top:15px;
    padding:10px;
    border-radius:10px;
    ">
    </textarea>

    <button
    onclick="nextSurvey()">
    Next ➡️
    </button>

    `;

}

function nextSurvey(){

    surveyIndex++;

    if(
        surveyIndex <
        surveyQuestions.length
    ){

        loadSurvey();

    }else{

        document
        .getElementById(
        "giftData"
        ).innerHTML = `

        <h2>
        Thank You ❤️
        </h2>

        <p>
        Your answers
        mean a lot 💜
        </p>

        `;

    }

}

// =========================
// HEART GAME
// =========================

let score = 0;
let gameTime = 20;
let gameInterval;

function startHeartGame(){

    score = 0;
    gameTime = 20;

    document
    .getElementById(
    "giftData"
    ).innerHTML = `

    <h2>
    Catch Hearts ❤️
    </h2>

    <p>
    Score:
    <span id="score">
    0
    </span>
    </p>

    <p>
    Time:
    <span id="time">
    20
    </span>
    </p>

    <div
    id="gameArea"
    style="
    position:relative;
    height:350px;
    border:1px solid white;
    margin-top:10px;
    overflow:hidden;
    ">
    </div>

    `;

    spawnItems();

    gameInterval =
    setInterval(()=>{

        gameTime--;

        document
        .getElementById(
        "time"
        ).innerText =
        gameTime;

        if(
            gameTime <= 0
        ){

            clearInterval(
            gameInterval
            );

            finishGame();

        }

    },1000);

}

function spawnItems(){

    const gameArea =
    document
    .getElementById(
    "gameArea"
    );

    const interval =
    setInterval(()=>{

        if(
            !document
            .getElementById(
            "gameArea"
            )
        ){
            clearInterval(
            interval
            );
            return;
        }

        let item =
        document
        .createElement("div");

        let isBad =
        Math.random() < .25;

        item.innerHTML =
        isBad ?
        "👺" :
        "❤️";

        item.style.position =
        "absolute";

        item.style.left =
        Math.random()*80 +
        "%";

        item.style.top =
        Math.random()*80 +
        "%";

        item.style.fontSize =
        "35px";

        item.style.cursor =
        "pointer";

        item.onclick =
        function(){

            if(isBad){

                score -= 2;

                if(score < 0){
                    score = 0;
                }

            }else{

                score++;

            }

            document
            .getElementById(
            "score"
            ).innerText =
            score;

            item.remove();

        };

        gameArea.appendChild(
        item
        );

        setTimeout(()=>{

            item.remove();

        },2000);

    },700);

}

function finishGame(){

    let html = `

    <h2>
    Final Score:
    ${score}
    ❤️
    </h2>

    `;

    
    if(score >= 10){
gameCompleted = true;

document
.querySelectorAll(
".gift-box"
)[2]
.innerHTML = "✔️";

checkAllGifts();
        
        html += `
        <button
        onclick="showLetter()">
        Continue ➡️
        </button>
        `;

    }else{

        html += `
        <p>
        You need at least
        10 points 😭
        </p>

        <button
        onclick="startHeartGame()">
        Play Again 🔄
        </button>
        `;

    }

    document
    .getElementById(
    "giftData"
    ).innerHTML =
    html;

}
// =========================
// LETTER SCREEN
// =========================

const letterMessage = `

Happy Birthday & Happy Anniversary, Keenoo ❤️

We have finally completed one beautiful year together, and honestly, you are the reason why I believe in relationships.

This year has been full of memories, happiness, and moments that I will always cherish.

You are the prettiest girl in the entire universe. I truly think words aren't enough to describe your beauty.

But what makes you even more beautiful is your caring, loving, and kind nature.

The way you care for the people you love is something I admire every single day.

On your special day, I pray that this birthday becomes one of the happiest days of your life.

May all your wishes come true, may success always find its way to you, and may you achieve everything you dream of.

And yes 😄, I also hope you gain the superpower to control your anger a little better.

There are so many things I love about you, but if I had to choose one thing, it would be the way you care for me.

Your care, your support, and your presence mean more to me than I can ever put into words.

Thank you for being part of my life, for staying by my side, and for making this year so special.

No matter what happens, the memories we've created together will always have a special place in my heart.

Happy Birthday once again, my Keenoo. ❤️🎂✨

With Love,
Usman 💜

`;

function showLetter(){

    showScreen("letterScreen");

    startTypewriter();

}

// =========================
// TYPEWRITER
// =========================

function startTypewriter(){

    const target =
    document.getElementById(
    "letterText"
    );

    target.innerHTML = "";

    let i = 0;

    const timer =
    setInterval(()=>{

        if(
            i >=
            letterMessage.length
        ){

            clearInterval(
            timer
            );

            return;
        }

        let char =
        letterMessage.charAt(i);

        if(char === "\n"){

            target.innerHTML +=
            "<br>";

        }else{

            target.innerHTML +=
            char;

        }

        target.scrollTop =
        target.scrollHeight;

        i++;

    },25);

}

// =========================
// REDIRECT
// =========================

function goNextPage(){

    window.location.href =
    "https://cobra546.github.io/Book/";

}

// =========================
// STARTUP
// =========================

window.onload = function(){

    showScreen(
    "pinScreen"
    );

};
#letterText{

    white-space:normal;

    font-size:18px;

    line-height:1.9;

    text-align:left;

}

// =========================
// CHECK ALL GIFTS
// =========================

function checkAllGifts(){

    if(
        quizCompleted &&
        surveyCompleted &&
        gameCompleted
    ){

        document
        .getElementById(
        "continueBtn"
        )
        .style.display =
        "block";

    }

}
