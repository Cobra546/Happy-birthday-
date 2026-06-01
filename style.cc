/* =========================
   GLOBAL
========================= */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html,body{
    width:100%;
    height:100%;
    overflow:hidden;
    font-family:'Poppins',sans-serif;
}

body{
    background:linear-gradient(
        135deg,
        #0f0a1f,
        #24124d,
        #4b1d8f
    );
    color:white;
}

/* =========================
   SCREEN
========================= */

.screen{
    width:100%;
    height:100vh;
    display:none;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    position:relative;
    padding:20px;
}

.screen.active{
    display:flex;
}

/* =========================
   FLOATING HEARTS
========================= */

#floatingHearts{
    position:fixed;
    width:100%;
    height:100%;
    pointer-events:none;
    z-index:0;
}

/* =========================
   GLASS CARD
========================= */

.glass-card{
    width:90%;
    max-width:400px;

    background:rgba(255,255,255,.1);

    border:1px solid rgba(255,255,255,.2);

    backdrop-filter:blur(15px);

    border-radius:25px;

    padding:25px;

    text-align:center;

    box-shadow:0 0 30px rgba(255,182,193,.25);
}

/* =========================
   LOCK
========================= */

.lock-icon{
    font-size:50px;
    margin-bottom:15px;
}

.glass-card h2{
    margin-bottom:20px;
}

/* =========================
   PIN DOTS
========================= */

.pin-dots{
    display:flex;
    justify-content:center;
    gap:12px;
    margin-bottom:25px;
}

.pin-dots span{
    width:16px;
    height:16px;

    border-radius:50%;

    border:2px solid white;
}

/* =========================
   HEART KEYPAD
========================= */

.heart-keypad{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:15px;
}

.heart-keypad button{

    background:none;
    border:none;

    color:white;

    cursor:pointer;

    display:flex;
    flex-direction:column;

    align-items:center;

    font-size:18px;
}

.heart-keypad button span{
    margin-top:-35px;
    font-weight:bold;
    z-index:2;
}

.heart-keypad button{
    font-size:42px;
}

.heart-keypad button:active{
    transform:scale(.9);
}

/* =========================
   DELETE BUTTONS
========================= */

.deleteBtn,
.clearBtn{
    font-size:20px !important;
}

/* =========================
   STORY SCREEN
========================= */

#storyImage{
    width:90%;
    max-width:420px;

    border-radius:25px;

    box-shadow:0 0 25px rgba(0,0,0,.4);
}

/* =========================
   STORY POPUP
========================= */

.storyPopup{

    position:absolute;

    top:50%;
    left:50%;

    transform:translate(-50%,-50%);

    background:rgba(255,255,255,.15);

    border:1px solid rgba(255,255,255,.25);

    backdrop-filter:blur(15px);

    padding:18px 25px;

    border-radius:20px;

    text-align:center;

    font-size:22px;

    box-shadow:0 0 20px rgba(255,182,193,.25);

    animation:popupShow .5s ease;
}

@keyframes popupShow{

    from{
        opacity:0;
        transform:
        translate(-50%,-50%)
        scale(.7);
    }

    to{
        opacity:1;
        transform:
        translate(-50%,-50%)
        scale(1);
    }
}

/* =========================
   SLIDESHOW
========================= */

.slideshow-card{

    width:90%;
    max-width:500px;

    height:70vh;

    border-radius:25px;

    overflow:hidden;

    background:rgba(255,255,255,.08);

    backdrop-filter:blur(10px);
}

#slideImage,
#slideVideo{

    width:100%;
    height:100%;

    object-fit:cover;

    display:none;
}

/* =========================
   GIFTS
========================= */

#giftScreen h2{
    margin-bottom:30px;
}

.gift-container{

    display:flex;
    gap:25px;
    flex-wrap:wrap;

    justify-content:center;
}

.gift-box{

    width:100px;
    height:100px;

    border-radius:20px;

    background:#8A2BE2;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:50px;

    cursor:pointer;

    transition:.3s;

    box-shadow:
    0 0 15px rgba(255,255,255,.2);
}

.gift-box:hover{
    transform:scale(1.08);
}

.gift-box:active{
    transform:scale(.95);
}

/* =========================
   GIFT CONTENT
========================= */

#giftData{

    width:100%;
    max-width:500px;

    background:rgba(255,255,255,.08);

    border-radius:20px;

    padding:20px;
}

/* =========================
   BUTTONS
========================= */

.backBtn,
.nextArrow{

    margin-top:20px;

    border:none;

    cursor:pointer;

    background:#8A2BE2;

    color:white;

    padding:12px 20px;

    border-radius:15px;

    font-size:18px;
}

.nextArrow{
    font-size:25px;
}

/* =========================
   LETTER
========================= */

.letterCard{

    width:95%;
    max-width:700px;

    max-height:75vh;

    overflow:auto;

    background:#fff8f0;

    color:#4a2c2a;

    border-radius:20px;

    padding:25px;

    line-height:1.8;
}

.letterCard h2{
    text-align:center;
    margin-bottom:20px;
}

/* =========================
   SHAKE ANIMATION
========================= */

.shake{
    animation:shake .4s;
}

@keyframes shake{

    0%{transform:translateX(0);}
    25%{transform:translateX(-8px);}
    50%{transform:translateX(8px);}
    75%{transform:translateX(-8px);}
    100%{transform:translateX(0);}
}

/* =========================
   MOBILE
========================= */

@media(max-width:600px){

    .gift-box{
        width:90px;
        height:90px;
    }

    .storyPopup{
        width:85%;
        font-size:20px;
    }

}
