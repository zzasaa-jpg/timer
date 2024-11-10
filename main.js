// importing the Items for About section.
import list_items from './Items/list_Items.js';
import p_items from './Items/p_Items.js';
//---------------------------------------------
var start = false;
//---------------------------------------------

//--------------------------------------------audio for timer------------------------------------------------------
var audio = document.createElement("audio");
audio.src = './Musics/notification.mp3';
//------------------------------------------------------------------------------------------------------------------

//-------------------------------------------audio for hours--------------------------------------------------------
var audio2 = document.createElement("audio");
audio2.src = './Musics/boxing_bell.mp3';
//------------------------------------------------------------------------------------------------------------------

//Creating New Elements.
let div = document.createElement("div");
let hand = document.createElement("div");
let wrapper = document.createElement("div");
let pop_up = document.createElement("div");
let pop_up_timer = document.createElement("div");
let pop_up_timer_h1 = document.createElement("h1");
let pop_up_timer_btn = document.createElement("button");
let black_wrapper = document.createElement("div");
let btns_wrapper = document.createElement("div");
let num_box_wrapper = document.createElement("div");
let start_btn = document.createElement("button");
let cancel_btn = document.createElement("button");
let restart_btn = document.createElement("button");
let new_btn = document.createElement("button");
let num_box = document.createElement("div");
let num_box1 = document.createElement("div");
let num_box2 = document.createElement("div");
let h3_hours_num_box_wrapper = document.createElement("div");
let h3_minutes_num_box_wrapper = document.createElement("div");
let h3_seconds_num_box_wrapper = document.createElement("div");
let h3_hours = document.createElement("h3");
let h3_minutes = document.createElement("h3");
let h3_seconds = document.createElement("h3");
//------------------------------------------------------------
//--------------------video tag creating----------------------
const video_wrapper = document.createElement("div");
let video_watch = false;
const video = document.createElement("video");
video_wrapper.style.backgroundColor = "black";
video_wrapper.style.height = "120vh";
video_wrapper.style.width = '100vw';
video_wrapper.style.position = "absolute";
video_wrapper.style.zIndex = 2;
video_wrapper.style.display = "flex";
video_wrapper.style.justifyContent = "center";
video_wrapper.style.alignItems = "center";
//------------------------------------------------------------

//------------------video styles------------------------------
video.id = "Help_video";
video.width = 900;
video.height = 520;
video.style.height = "auto";
video.style.maxWidth = "100vw";
video.style.borderRadius = "10px";
video.style.boxShadow = "1px 1px 20px white";
video.controls = true;
//-----------------------------------------------------------

//----------check box creating and styles--------------------
const check_box = document.createElement("input");
check_box.type = "checkbox";
check_box.id = 'check_box';
check_box.style.position = "absolute";
check_box.style.bottom = "50px";
check_box.style.right = "30px";
check_box.style.zIndex = 3;
check_box.style.cursor = "pointer";
//-----------------------------------------------------------

//-----------check box label and styles----------------------
const check_box_label = document.createElement("label");
check_box_label.setAttribute('for', 'Check_box');
check_box_label.textContent = "I Understand the video.";
check_box_label.style.position = "absolute";
check_box_label.style.right = "50px";
check_box_label.style.bottom = "50px";
check_box_label.style.zIndex = 3;
check_box_label.style.color = "white";
//-----------------------------------------------------------

//--------------------video source---------------------------
let source = document.createElement("source");
source.src = "Videos/Loptop_help - Made with Clipchamp.mp4";
source.type = "Video/mp4";
video.appendChild(source);
//------------------------------------------------------------

//-----------first time video render functionality------------
check_box.addEventListener('change', function () {
    if (check_box.checked) {
        video_wrapper.style.display = "none";
        check_box_label.style.display = "none";
        video.currentTime = 0;
        video.pause();
        video_watch = true;
        localStorage.setItem("video_watch", video_watch);
    }
});

video_wrapper.append(video, check_box, check_box_label);//-----------------video_wrapper append the video, check_box, check_box_label--------------
//------------------------------------------------------------

//Help button creating.
let top_buttons_div = document.createElement("div");
top_buttons_div.style.position = "absolute";
top_buttons_div.style.top = "0";
top_buttons_div.style.right = "0";
top_buttons_div.style.display = "flex";
top_buttons_div.style.alignItems = "center";
let help_btn = document.createElement("button");
help_btn.innerText = "help";
help_btn.style.backgroundColor = "transparent";
help_btn.style.top = "50px";
help_btn.style.right = "0px";
help_btn.style.border = "none";
help_btn.style.color = "white";
help_btn.style.fontFamily = "Oxanium, sans-serif";
help_btn.style.fontSize = "18px";
help_btn.style.fontWeight = "100";
help_btn.style.cursor = "pointer";
help_btn.addEventListener("click", function () {
    video_wrapper.style.display = "flex";
    check_box_label.style.display = "flex";
    if (check_box.checked) {
        check_box.checked = false;
    }
})
//------------------------------------------------------------
//creating p tag and division for render the about section.
let p_into_symbol = document.querySelector("p");
let question_box = document.createElement("div");

question_box.style.display = "none";
question_box.style.backgroundColor = "black";
question_box.style.position = "absolute";
question_box.style.top = "0px";
question_box.style.overflowY = "scroll";
question_box.style.width = "100vw";
question_box.style.height = "100vh";

//about section inside webscroller css.
let style_question_box = document.createElement('style');
style_question_box.innerHTML = `
    #question_box{
      scrollbar-width: thin;
      scrollbar-color: white transparent;
  }
`;
document.head.appendChild(style_question_box);
question_box.id = "question_box"
//--------------------------------------------------

cancel_btn.innerText = "cancel";
cancel_btn.style.color = "white";
cancel_btn.style.fontSize = "20px";
cancel_btn.style.height = "auto";
cancel_btn.style.border = "none";
cancel_btn.style.margin = "10px";
cancel_btn.style.width = "auto";
cancel_btn.style.backgroundColor = "black";
cancel_btn.style.fontWeight = "100";
cancel_btn.style.fontFamily = "Oxanium, sans-serif";
cancel_btn.style.cursor = "pointer";
cancel_btn.addEventListener("click", function () {
    restart_ = false;
    num_box_wrapper.style.display = "flex";
    audio2.muted = false;
    clearInterval(inverval);
    hand.style.transform = `rotate(${0}deg)`;
    black_wrapper.style.display = "flex";
    count = 0;
    Minutes_calculate = 0;
    minute_show.innerText = Minutes_calculate;
    Hours_calculate = 0;
    hour_show.innerText = Hours_calculate;
    only_count = 0;
    start_btn.disabled = true;
    new_btn_process();
})

//---------------------------------------about question button. means = "?"----------------------------------------------
let question_btn = document.createElement("button");
//-------------------------------------------------hovered div-----------------------------------------------------------
let question_btn_hover_div = document.createElement("div");
question_btn_hover_div.style.width = "auto";
question_btn_hover_div.style.height = "20px";
question_btn_hover_div.innerText = "About";
question_btn_hover_div.style.fontFamily = "Oxanium, sans-serif";
question_btn_hover_div.style.backgroundColor = "#453e51";
question_btn_hover_div.style.padding = "4px";
question_btn_hover_div.style.position = "absolute";
question_btn_hover_div.style.top = "40px";
question_btn_hover_div.style.color = "white";
question_btn_hover_div.style.right = "0";
question_btn_hover_div.style.borderRadius = "5px";
question_btn_hover_div.style.fontWeight = "100";
question_btn_hover_div.style.display = "none";
question_btn_hover_div.style.zIndex = "-1";
question_btn.addEventListener("mouseover", function () {
    question_btn_hover_div.style.display = "block";
})

question_btn.addEventListener("mouseleave", function () {
    question_btn_hover_div.style.display = "none";
})

//----------------------------------------------------------------------------------------------------------------------
question_btn.innerText = "?";
question_btn.style.backgroundColor = "black";
question_btn.style.margin = "10px";
question_btn.style.cursor = "pointer";
question_btn.style.border = "none";
question_btn.style.color = "white";
question_btn.style.fontSize = "20px";
question_btn.style.fontFamily = " Oxanium, sans-serif";
question_btn.style.zIndex = "1";
question_btn.style.fontWeight = "100";
question_box.style.transition = "diplay 500ms ease-in-out";
//------------------------------------------------------------
//addEventListener for toggle the about section. 
question_btn.addEventListener("click", function () {
    if (question_box.style.display == "none") {
        question_box.style.display = " block";
        question_btn.style.border = "1px solid white";
        question_btn.style.borderRadius = "5px";
        question_btn.innerText = "close";
        help_btn.style.display = "none";
        cancel_btn.style.display = "none";
        question_btn_hover_div.style.display = "none";
    } else {
        question_box.style.display = "none";
        question_btn.style.border = "none";
        question_btn.innerText = "?";
        help_btn.style.display = "block";
        cancel_btn.style.display = "block";
       question_box.scrollTop = 0;
    }
});
top_buttons_div.append(cancel_btn, help_btn, question_btn);
//-----------------------------------------------------------

//creating a about sections ul.
const ul = document.createElement("ul");
ul.style.color = "white";
ul.style.marginTop = "40px";
ul.style.display = "flex";
ul.style.justifyContent = "center";
ul.style.alignItems = "start";
ul.style.flexDirection = "column";

//forEach for render the li and p inside of about section.
list_items.forEach((item, index) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.style.marginRight = "10px";
    p.style.marginTop = "0px";
    p.style.textAlign = "justify";
    p.style.fontSize = "15px";
    //--------------------------------
    li.style.marginTop = "10px";
    li.style.fontSize = "21px";
    li.style.fontWeight = "100";
    li.textContent = item;
    p.textContent = p_items[index];
    li.appendChild(p);
    if (index == 1) {
        const p1 = document.createElement("p");
        p1.textContent = "*First one is degreevalue -> 30 * 6 = 180. (user seted seconds * 6degree = degreeValue.)";
        p1.style.marginRight = "10px";
        p1.style.marginTop = "0px";
        p1.style.textAlign = "justify";
        p1.style.fontSize = "15px";
        p1.style.marginLeft = "20px";
        //-------------------------------------
        const p2 = document.createElement("p");
        p2.textContent = "*Second one is minutevalue -> 60 * 5 * 6. (60 * user seted minutes * 6degree = minute_degreeValue.)";
        p2.style.marginRight = "10px";
        p2.style.marginTop = "0px";
        p2.style.textAlign = "justify";
        p2.style.fontSize = "15px";
        p2.style.marginLeft = "20px";
        //-------------------------------------
        const p3 = document.createElement("p");
        p3.textContent = "*Third one is hourvalue -> i.user seted hours * 60 = hour_mulifly_60_value. | ii.hour_mulifly_60_value * 60 * 6. (hour_mulifly_60_value * 60 * 6degree = hours_degreeValue.)";
        p3.style.marginRight = "10px";
        p3.style.marginTop = "0px";
        p3.style.textAlign = "justify";
        p3.style.fontSize = "15px";
        p3.style.marginLeft = "20px";

        const p4 = document.createElement("p");
        p4.textContent = "Count variable add 6 number for count increase.'count = count + 6. And minute_count_init variable add 360 number on count equal to 360. 'minute_count_init + 360'. Restart for current seted timer again run. cancel for stop the timer.";
        p4.style.marginRight = "10px";
        p4.style.marginTop = "0px";
        p4.style.textAlign = "justify";
        p4.style.fontSize = "15px";

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        li.appendChild(p4);
    }

    ul.appendChild(li);
});
question_box.append(ul);
//--------------------------------------------------------------

//-----------------------------------------------small devices style-------------------------------------------------------------
let body_background = document.createElement("div");
body_background.style.backgroundColor = "black";
body_background.style.height = "100vh";
body_background.style.color = "white";
body_background.style.fontFamily = "Oxanium, sans-serif";
let h1_info = document.createElement("h1");
h1_info.innerText = "Your device was small because website did not run!.";
h1_info.style.textAlign = "center";
body_background.appendChild(h1_info);
//-------------------------------------------------------------------------------------------------------------------------------

//The functionality is responsive when rendering the website on a mobile, loptop device.
function max_width_640(x) {
    if (x.matches) {
        question_box.style.boxShadow = "none";
        question_box.style.borderRadius = "0px";
        question_btn.style.margin = "5px 15px";
        question_box.style.right = "0px";
        black_wrapper.style.height = "100vh";
        pop_up.style.height = "300px";
        pop_up.style.width = "100vw";
        pop_up_timer.style.height = "300px";
        pop_up_timer.style.width = "100%";
        pop_up_timer.style.margin = "10px";
        pop_up_timer_btn.style.fontSize = "20px";
        ul.style.marginLeft = "-20px";
        check_box_label.style.bottom = "150px";
        check_box.style.bottom = "150px";
        div.style.marginTop = "100px";
    } else {
        question_box.style.boxShadow = "1px 1px 20px white";
        question_box.style.borderRadius = "10px";
        question_btn.style.margin = "5px 20px";
        question_box.style.right = "2px";
        black_wrapper.style.height = "100vh";
        pop_up.style.height = "300px";
        pop_up.style.width = "500px";
        pop_up_timer.style.height = "300px";
        pop_up_timer.style.width = "500px";
        pop_up_timer.style.margin = "0px";
        pop_up_timer_btn.style.fontSize = "30px";
        ul.style.marginLeft = "-10px";
        check_box_label.style.bottom = "50px";
        check_box.style.bottom = "50px";
        div.style.marginTop = "0";
    }
}

//The functionality is responsive when rendering the website on a small mobile device.
function max_width_359(y) {
    document.body.innerHTML = "";

    if (y.matches) {
        body_background.style.display = "block";
        body_background.style.fontSize = "10px";
        document.body.append(body_background);
    } else {
        body_background.style.display = "none";
        body_background.style.fontSize = "16px";
        document.body.append(
            div,
            black_wrapper,
            hour_show_div,
            minute_show_div,
            audio,
            question_box,
            top_buttons_div,
            question_btn_hover_div,
            body_background,
            video_wrapper,
        );
    }
}

//divice screen is equal to x than function was call.
let x = window.matchMedia("(max-width: 640px)");
//divice screen is equal to y than function was call.
let y = window.matchMedia("(max-width: 359px)");
max_width_640(x);
x.addEventListener("change", function () {
    max_width_640(x);
});
y.addEventListener("change", function () {
    max_width_359(y);
})

//-------------------------------------website render in small mobile device and checking the video_wathch variable.-------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const mediaQuery = window.matchMedia("(max-width: 359px)");
    max_width_359(mediaQuery);
    mediaQuery.addEventListener("change", max_width_359);
    if (localStorage.getItem("video_watch", video_watch)) {
        video_wrapper.style.display = "none";
        check_box_label.style.display = "none";
    }
});
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

//black_wrapper styles for render the pop_up.
black_wrapper.style.width = "100vw";
black_wrapper.style.position = "absolute";
black_wrapper.style.opacity = "0.9";
black_wrapper.style.backgroundColor = "black";
black_wrapper.style.display = "flex";
black_wrapper.style.justifyContent = "center";
black_wrapper.style.alignItems = "center";
black_wrapper.style.zIndex = "2"
black_wrapper.append(pop_up, pop_up_timer);
pop_up.style.display = "flex";
pop_up.style.justifyContent = "center";
pop_up.style.alignItems = "center";
pop_up.style.flexDirection = "column";
pop_up.style.gap = "50px";
pop_up.style.border = "2px solid white";
pop_up.style.borderRadius = "20px";
pop_up.style.boxShadow = "1px 1px 20px white";
//---------------------------popup for timer--------------------------------
pop_up_timer.style.display = "none";
pop_up_timer.style.justifyContent = "center";
pop_up_timer.style.alignItems = "center";
pop_up_timer.style.flexDirection = "column";
pop_up_timer.style.gap = "50px";
pop_up_timer.style.border = "2px solid white";
pop_up_timer.style.borderRadius = "20px";
pop_up_timer.style.boxShadow = "1px 1px 20px white";
//-----------------------popup for timer h1--------------------------------
pop_up_timer_h1.style.fontSize = "100px";
pop_up_timer_h1.innerText = "Timer!";
pop_up_timer_h1.style.color = "white";
pop_up_timer_h1.style.textAlign = "center";
pop_up_timer_h1.style.margin = "0px";
//-----------------------popup for timer cancel button---------------------
pop_up_timer_btn.innerText = "cancel";
pop_up_timer_btn.style.backgroundColor = "transparent";
pop_up_timer_btn.style.border = "1px solid white";
pop_up_timer_btn.style.borderRadius = "5px";
pop_up_timer_btn.style.cursor = "pointer";
pop_up_timer_btn.style.color = "white";
pop_up_timer_btn.style.fontFamily = "Oxanium, sans-serif";
pop_up_timer.append(pop_up_timer_h1, pop_up_timer_btn);
//-------------------------------------------------------------------------

//----------------------------website all variables Initialization-------------------------------------------------
let Hours_calculate;
let Minutes_calculate;
let Seconds_calculate;
let degreeValue;
let minute_degreeValue;
let restart_degreeValue;
let hours_degreeValue;
let final_degreeValue;
let restart_ = false;
let Sec_not_zero = false;
let restart_Store_value_minute = 0;
let restart_Store_value_hour = 0;
//----------------------------------------------------------------------------------------------------------------
let hour_show = document.createElement("div");
let minute_show = document.createElement("div");

//--------------------functon for calculate the Seconds convert into degreeValue.----------------------------
function secnods_cacl(sec_val) {
    degreeValue = `${Seconds_calculate}` * 6;
    console.log(degreeValue);
    return degreeValue;
}
//-----------------------------------------------------------------------------------------------------------

//--------------------functon for calculate the Minutes convert into minute_degreeValue.---------------------
function minutes_cacl(min_val) {
    minute_degreeValue = 60 * `${Minutes_calculate}` * 6;
    console.log(minute_degreeValue);
    return minute_degreeValue;
}
//-----------------------------------------------------------------------------------------------------------

//--------------------functon for calculate the Hours convert into hours_degreeValue.------------------------
function hours_cacl(hour_val) {
    let a = Hours_calculate * 60;
    hours_degreeValue = a * 60 * 6;
    console.log(hours_degreeValue);
    return hours_degreeValue;
}
//-----------------------------------------------------------------------------------------------------------
//----------------------------------------------number box inside scrollbar styles---------------------------

let style = document.createElement('style');
style.innerHTML = `
  #numScroll, #num1Scroll, #num2Scroll  {
      scrollbar-width: thin;
      scrollbar-color: white transparent;
  }
`;
document.head.appendChild(style);
num_box.id = "numScroll";
num_box1.id = "num1Scroll";
num_box2.id = "num2Scroll";
//-------------------------------------------------------------------------------------------------------------

//--------for loop render the h4 hours scroll styles & h3_hours hold the "Hours", num_box(number_box) inside render the hours. The h3_hours_num_box_wrapper is hold the h3_hours and num_box div------------------
h3_hours.innerText = "Hours";
h3_hours.style.color = "white";
h3_hours.style.margin = "0";

let h4_for_hour;
for (let i = 0; i <= 99; i++) {
    h4_for_hour = document.createElement("h1");
    h4_for_hour.style.fontSize = "75px";
    h4_for_hour.style.margin = "5px";
    h4_for_hour.style.fontWeight = "400";
    h4_for_hour.style.cursor = "pointer";
    h4_for_hour.innerText = i;
    num_box.append(h4_for_hour);
    if (i == 0) {
        start_btn.disabled = true;
        Hours_calculate = 0;
        hours_cacl(Hours_calculate);
        hour_show.innerText = Hours_calculate;
    }
    h4_for_hour.addEventListener("mouseover", function () {
        start_btn.disabled = false;
        Hours_calculate = this.textContent;
        restart_Store_value_hour = Hours_calculate;
        if (Hours_calculate == 0) {
            start_btn.disabled = true;
        }
        hours_cacl(Hours_calculate);
        hour_show.innerText = Hours_calculate;
    });
}

num_box.style.overflow = "hidden";
num_box.style.overflowY = "scroll";
num_box.style.color = "white";
num_box.style.height = "100px";
num_box.style.width = "100px";
num_box.style.boxShadow = "1px 1px 10px white";
num_box.style.borderRadius = "10px";
num_box.style.textAlign = "center";
h3_hours_num_box_wrapper.style.display = "flex";
h3_hours_num_box_wrapper.style.flexDirection = "column";
h3_hours_num_box_wrapper.style.alignItems = "center";
h3_hours_num_box_wrapper.style.gap = "10px";
h3_hours_num_box_wrapper.append(h3_hours, num_box);
//------------------------------------------------------------------------------------------------------------------------------

//--------for loop render the h4 minutes scroll styles & h3_minutes hold the "Minutes", num_box1(number_box1) inside render the minutes. The h3_minutes_num_box_wrapper is hold the h3_minutes and num_box1 div------------------
h3_minutes.innerText = "Minutes";
h3_minutes.style.color = "white";
h3_minutes.style.margin = "0";

let h4_for_minute;
for (let j = 0; j <= 59; j++) {
    h4_for_minute = document.createElement("h1");
    h4_for_minute.style.fontSize = "75px";
    h4_for_minute.style.margin = "5px";
    h4_for_minute.style.fontWeight = "400";
    h4_for_minute.style.cursor = "pointer";
    h4_for_minute.innerText = j;
    num_box1.append(h4_for_minute);
    if (j == 0) {
        start_btn.disabled = true;
        Minutes_calculate = 0;
        minutes_cacl(Minutes_calculate);
        minute_show.innerText = Minutes_calculate;
    }
    h4_for_minute.addEventListener("mouseover", function () {
        start_btn.disabled = false;
        Minutes_calculate = this.textContent;
        restart_Store_value_minute = Minutes_calculate;
        if (Minutes_calculate == 0) {
            start_btn.disabled = true;
        }
        minutes_cacl(Minutes_calculate);
        minute_show.innerText = Minutes_calculate;

    });
}
num_box1.style.overflow = "hidden";
num_box1.style.overflowY = "scroll";
num_box1.style.color = "white";
num_box1.style.height = "100px";
num_box1.style.width = "100px";
num_box1.style.boxShadow = "1px 1px 10px white";
num_box1.style.borderRadius = "10px";
num_box1.style.textAlign = "center";
h3_minutes_num_box_wrapper.style.display = "flex";
h3_minutes_num_box_wrapper.style.flexDirection = "column";
h3_minutes_num_box_wrapper.style.alignItems = "center";
h3_minutes_num_box_wrapper.style.gap = "10px";
h3_minutes_num_box_wrapper.append(h3_minutes, num_box1);
//------------------------------------------------------------------------------------------------------------------------------

//--------for loop render the h4_for_seconds scroll styles & h3_seconds hold the "Seconds", num_box2(number_box2) inside render the seconds. The h3_seconds_num_box_wrapper is hold the h3_seconds and num_box2 div------------------
h3_seconds.innerText = "Seconds";
h3_seconds.style.color = "white";
h3_seconds.style.margin = "0";

let h4_for_seconds;
for (let k = 0; k <= 59; k++) {
    h4_for_seconds = document.createElement("h1");
    h4_for_seconds.style.fontSize = "75px";
    h4_for_seconds.style.margin = "5px";
    h4_for_seconds.style.fontWeight = "400";
    h4_for_seconds.style.cursor = "pointer";
    h4_for_seconds.innerText = k;
    num_box2.append(h4_for_seconds);
    if (k == 0) {
        start_btn.disabled = true;
        Seconds_calculate = 0;
        secnods_cacl(Seconds_calculate);
    }
    h4_for_seconds.addEventListener("mouseover", function () {
        start_btn.disabled = false;
        Seconds_calculate = this.textContent;
        if (Seconds_calculate == 0) {
            start_btn.disabled = true;
        }
        secnods_cacl(Seconds_calculate);
    });
}
num_box2.style.overflow = "hidden";
num_box2.style.overflowY = "scroll";
num_box2.style.color = "white";
num_box2.style.height = "100px";
num_box2.style.width = "100px";
num_box2.style.boxShadow = "1px 1px 10px white";
num_box2.style.borderRadius = "10px";
num_box2.style.innerText = "0";
num_box2.style.textAlign = "center";
h3_seconds_num_box_wrapper.style.display = "flex";
h3_seconds_num_box_wrapper.style.flexDirection = "column";
h3_seconds_num_box_wrapper.style.alignItems = "center";
h3_seconds_num_box_wrapper.style.gap = "10px";
h3_seconds_num_box_wrapper.append(h3_seconds, num_box2);
//------------------------------------------------------------------------------------------------------------------------------

//-----------------------------num_box_wrapper is wrap the all childs wrappers -> h3_hours_num_box_wrapper, h3_minutes_num_box_wrapper, h3_seconds_num_box_wrapper-------------------
num_box_wrapper.style.display = "flex";
num_box_wrapper.style.gap = "10px";
num_box_wrapper.append(h3_hours_num_box_wrapper, h3_minutes_num_box_wrapper, h3_seconds_num_box_wrapper);
//-----------------------------------------------------------------------------------------------------------------------------

//--------------------------------timer start button--------------------------------------------------------------------------
start_btn.innerText = "start";
start_btn.style.fontSize = "20px";
start_btn.style.height = "auto";
start_btn.style.width = "auto";
start_btn.style.fontFamily = "Oxanium, sans-serif";
start_btn.style.cursor = "pointer";
start_btn.disabled = true;
start_btn.addEventListener("click", function () {
    console.log(degreeValue);
    audio2.muted = false;
    black_wrapper.style.display = "none";
    start = true;
    st(start);
    restart_btn.disabled = false;
});
//--------------------------------------------------------------------------------------------------------------

//--------------------------------timer restart button---------------------------------------------------------
restart_btn.innerText = "restart";
restart_btn.style.fontSize = "20px";
restart_btn.style.height = "auto";
restart_btn.style.width = "auto";
restart_btn.style.fontFamily = "Oxanium, sans-serif";
restart_btn.style.cursor = "pointer";
restart_btn.disabled = true;
restart_btn.addEventListener("click", function () {
    audio2.muted = false;
    black_wrapper.style.display = "none";
    start = true;
    restart_ = true;
    Sec_not_zero = true;
    st(start, restart_, Sec_not_zero, final_degreeValue);
})
//--------------------------------------------------------------------------------------------------------------

new_btn.innerText = "new";
new_btn.style.fontSize = "20px";
new_btn.style.height = "auto";
new_btn.style.width = "auto";
new_btn.style.fontFamily = "Oxanium, sans-serif";
new_btn.style.cursor = "pointer";
new_btn.disabled = true;
new_btn.addEventListener("click", function () {
    num_box_wrapper.style.display = "flex";
    audio2.muted = false;
    new_btn_process();
})

function new_btn_process() {
    new_btn.disabled = true;
    restart_btn.disabled = true;
    restart_Store_value_minute = 0;
    restart_Store_value_hour = 0;
    num_box.scrollTop = 0;
    num_box1.scrollTop = 0;
    num_box2.scrollTop = 0;
    Minutes_calculate = 0;
    minute_show.innerText = Minutes_calculate;
    Hours_calculate = 0;
    hour_show.innerText = Hours_calculate;
    minute_count_init = 0;
    degreeValue = 0;
    minute_degreeValue = 0;
    hours_degreeValue = 0;
    only_count = 0;
    Seconds_calculate = 0;
    final_count = 0;
    minute_count_init = 360;
}

//--------------------------btns(buttons), btns_wrapper wrap the start_btn, restart_btn-------------------------
btns_wrapper.append(start_btn, restart_btn, new_btn);
//--------------------------------------------------------------------------------------------------------------

//-------------------------popup wrpa the num_box_wrapper, btns_wrapper(btns=>buttons)--------------------------
pop_up.append(num_box_wrapper, btns_wrapper);
//--------------------------------------------------------------------------------------------------------------

// //---------------------------------------clock body creating----------------------------------------------------

//--------------clock inside 60 to 0 numbers render by for loop and some mathemetics. append in div-------------
const totalLines = 60;
const radius = 175;
const totalNumbers = 12;
let h2;
for (let index = 1; index <= 12; index++) {
    h2 = document.createElement("h2");
    h2.style.fontSize = "25px";
    h2.style.fontWeight = "900";
    h2.innerText = index * 5;
    h2.style.color = "white";
    h2.style.position = "absolute";
    h2.style.left = "160px";
    h2.style.top = "170px";
    h2.style.transformOrigin = `50% -50%`;
    h2.style.transform = "rotate(90deg)";
    const angle = (index * 360) / totalNumbers;
    h2.style.transform = `rotate(${angle}deg) translateY(-${180}px)`;
    div.append(h2);

}
//-------------------------------------------------------------------------------------------------------------

//------clock inside creating a lines means (small box's) by for loop and some mathemetics. append in div------ 
for (let i = 1; i <= 60; i++) {
    let line = document.createElement("div");
    line.style.height = "10px";
    line.style.width = "5px";
    line.style.backgroundColor = "white";
    line.style.position = "absolute";
    line.style.left = "172px";
    line.style.transformOrigin = `50% ${radius}px`;
    const angle = (i * 360) / totalLines;
    line.style.transform = `rotate(${angle}deg)`;
    if (i % 5 == 0) {
        line.style.background = "red";
        line.style.height = "13px";
    }
    div.append(line);
}
//-----------------------------------------------------------------------------------------------------------

//---------------------------------clock body sizes----------------------------------------------------------
div.style.height = "350px";
div.style.width = "350px";
div.style.border = "5px solid white";
div.style.position = "relative";
div.style.borderRadius = "50%";
// ---------------------------------------------------------------------------------------------------------

//--------------------------------clock rotateing hand------------------------------------------------------
hand.style.width = "0px";
hand.style.height = "0px";
hand.style.position = "absolute";
hand.style.left = "160.1px";
hand.style.top = "45px";
hand.style.borderLeft = "15px solid transparent";
hand.style.borderRight = "15px solid transparent";
hand.style.borderBottom = "130px solid #FF5733";
hand.style.transformOrigin = "50% 100%";
//---------------------------------------------------------------------------------------------------------

//-----------------------------wrapper for hand------------------------------------------------------------
wrapper.style.width = "30px";
wrapper.style.height = "30px";
wrapper.style.position = "absolute";
wrapper.style.backgroundColor = "red";
wrapper.style.left = "160px";
wrapper.style.top = "160px";
wrapper.style.borderRadius = "50%";
//--------------------------------------------------------------------------------------------------------
// //-----------------------------------------------------------------------------------------------------

//---------------------------------minute render for user set timeing-------------------------------------
let minute_show_div = document.createElement("div");
minute_show_div.style.textAlign = "center";
let minute_show_h1 = document.createElement("h1");
minute_show_h1.innerText = "Minute";
minute_show_h1.style.color = "white";
minute_show_h1.style.marginTop = "0px";
minute_show_h1.style.marginBottom = "10px";
minute_show_h1.style.fontSize = "20px";
minute_show_h1.style.fontWeight = "100";
minute_show.style.textAlign = "center";
minute_show.style.height = "100px";
minute_show.style.width = "100px";
minute_show.style.borderRadius = "20px";
minute_show.style.fontSize = "80px"
minute_show.style.backgroundColor = "#000";
minute_show.style.boxShadow = "1px 1px 10px white";
minute_show.style.color = "white";
minute_show.style.border = "1px solid white";
minute_show.style.cursor = "pointer";
minute_show_div.append(minute_show_h1, minute_show);
//--------------------------------------------------------------------------------------------------------

//-----------------------------hour render for user set timeing-------------------------------------------
let hour_show_div = document.createElement("div");
hour_show_div.style.textAlign = "center";
let hour_show_h1 = document.createElement("h1");
hour_show_h1.innerText = "Hour";
hour_show_h1.style.color = "white";
hour_show_h1.style.marginTop = "0px";
hour_show_h1.style.marginBottom = "10px";
hour_show_h1.style.fontSize = "20px";
hour_show_h1.style.fontWeight = "100";
hour_show.style.textAlign = "center";
hour_show.style.height = "100px";
hour_show.style.width = "100px";
hour_show.style.borderRadius = "20px";
hour_show.style.fontSize = "80px"
hour_show.style.backgroundColor = "#000";
hour_show.style.boxShadow = "1px 1px 10px white";
hour_show.style.color = "white";
hour_show.style.border = "1px solid white";
hour_show.style.cursor = "pointer";
hour_show_div.append(hour_show_h1, hour_show);
//--------------------------------------------------------------------------------------------------------

//-------------------------start function inside working variables----------------------------------------
let count = 0;
var inverval;
let minute_count_init = 360;
let runs_the_hours = false;
let set_count = false;
let only_count = 0;
let final_count = 0;
//-------------------------------------------------------------------------------------------------------

//-----------------------------------------st function for run the timer on Values------------------------------------
function st(start, Sec_not_zero) {
    if (start) {
        //-------User seted time store in restart_Store_value_minute, restart_Store_value_hour, when true Minutes_calculate, Hours_calculate inside render.---------
        if (Sec_not_zero) {
            Minutes_calculate = restart_Store_value_minute;
            minute_show.innerText = Minutes_calculate;
            Hours_calculate = restart_Store_value_hour;
            hour_show.innerText = Hours_calculate;
        }
        //--------------------final_degreeValue is minute_degreeValue and hours_degreeValue sum.-----------------------------
        final_degreeValue = minute_degreeValue + hours_degreeValue;
        restart_degreeValue = minute_degreeValue;
        console.log(restart_degreeValue);
        console.log(final_degreeValue);
        //----------------------------for only seconds run.-------------------------------------------------------------------
        if (Seconds_calculate != 0 && Minutes_calculate == 0 && Hours_calculate == 0) {
            set_count = true;
            Minutes_calculate = Minutes_calculate;
            minute_show.innerText = Minutes_calculate;
            Hours_calculate = Hours_calculate;
            hour_show.innerText = Hours_calculate;
            final_count = degreeValue - 360;
            final_degreeValue = final_degreeValue + degreeValue;
        } else if (Seconds_calculate != 0) { // ----------------minute with seconds run.--------------------------------------
            set_count = true;
            Minutes_calculate = Minutes_calculate;
            minute_show.innerText = Minutes_calculate;
            Hours_calculate = Hours_calculate;
            hour_show.innerText = Hours_calculate;
            final_count = -degreeValue;
            alert(final_count);
            count = final_count;
        } else if (restart_) {//------------------restart button click than run.-----------------------------------------------
            minute_count_init = 360;
            if (
                Minutes_calculate == 0 && Hours_calculate != 0
            ) {
                Minutes_calculate = 59;
                minute_show.innerText = Minutes_calculate;
                Hours_calculate = Hours_calculate - 1;
                hour_show.innerText = Hours_calculate;
            }
            else if (Minutes_calculate != 0 && Hours_calculate == 0) {
                Minutes_calculate = restart_Store_value_minute - 1;
                minute_show.innerText = Minutes_calculate;

            }

            if (Minutes_calculate == 0 && count == minute_count_init) {
                runs_the_hours = true;
            }

            if (count == 0 && Minutes_calculate != 0) {
                minute_count_init = 0;
                Minutes_calculate = Minutes_calculate - 1;
                minute_show.innerText = Minutes_calculate;
                minute_count_init = minute_count_init + 360;
                console.log(minute_count_init);
            }

        } else {//---------------------------else part minute="0", Minutes_calculate="59", hours= hours - 1, Hours_calculate="2"->"1".------------------
            if (Minutes_calculate == 0) {
                Minutes_calculate = 59;
                minute_show.innerText = Minutes_calculate;
                Hours_calculate = Hours_calculate - 1;
                hour_show.innerText = Hours_calculate;
            } else {
                Minutes_calculate = Minutes_calculate - 1;
                minute_show.innerText = Minutes_calculate;
            }
        }

        //-----------------------------------interval for run the clock according user seted time.------------------------------------
        inverval = setInterval(() => {
            //------------------------------interval true than count increase 6 valuse and only_counts.------------------------------
            count = count + 6;
            only_count = only_count + 6;
            console.log(count);

            //------------------------------Minutes_calculate == 0 && count == minute_count_init is true than 1hour completed--------------------------------------
            if (Minutes_calculate == 0 && count == minute_count_init) {
                runs_the_hours = true;
            }
            if (runs_the_hours) {//---------------runs_the_hours is trur than Minutes_calculate = 60 render and  Hours_calculate -= 1 
                console.log(minute_count_init);
                Minutes_calculate = 60;
                minute_show.innerText = Minutes_calculate;
                Hours_calculate -= 1;
                hour_show.innerText = Hours_calculate;
                // if ( count == final_degreeValue){
                //     // audio2.muted = true;
                // } else if(final_degreeValue > 21600){
                if (final_degreeValue > 21600) {//one hour more hours set the timer by user than each hour sounds the bell.------------------------------------
                    audio2.play();
                }
                runs_the_hours = false;
            }
            //-----------------------------Hours_calculate == 0  than run_the_hours is false for last hour-----------------------------------------------------
            if (Hours_calculate == 0) {
                runs_the_hours = false;
            }

            //-------------------------------------------------------------------------------------------------------------------------------------------------

            //----------------------------Hours and seconds && Minutes and seconds pairs true than this condition run.-----------------------------------------
            if (count == 0 && Minutes_calculate == 0) {//------------------------Hours and seconds each true than this condition run.--------------------------
                minute_count_init = 0;
                Minutes_calculate = 59;
                audio2.play();
                minute_show.innerText = Minutes_calculate;
                minute_count_init = minute_count_init + 360;
                console.log(minute_count_init);
                Hours_calculate = Hours_calculate - 1;
                hour_show.innerText = Hours_calculate;
            } else if (count == 0 && Minutes_calculate != 0) {//-----------------Minutes and seconds each true than this condition run.-----------------------
                minute_count_init = 0;
                Minutes_calculate = Minutes_calculate - 1;
                minute_show.innerText = Minutes_calculate;
                minute_count_init = minute_count_init + 360;
                console.log(minute_count_init);
            }
            //----------------------------------------------------this is for each minute timer condition.----------------------------------------------------
            if (count == minute_count_init) {
                Minutes_calculate = Minutes_calculate - 1;
                minute_show.innerText = Minutes_calculate;
                minute_count_init = minute_count_init + 360;
                console.log(minute_count_init);
            }
            //------------------------------------------------------------------------------------------------------------------------------------------------

            //-----------------------------------render the popup_timer according count equal to final_degreeValue.---------------------------
            if (count == final_degreeValue) {
                audio2.muted = true;
                pop_up.style.display = "none";
                pop_up_timer.style.display = "flex";
                new_btn.disabled = false;
                audio.play();
                audio.loop = true;
                pop_up_timer_btn.addEventListener("click", function () {
                    pop_up.style.display = "flex";
                    pop_up_timer.style.display = "none";
                    audio.loop = false;
                });
                clearInterval(inverval);
                hand.style.transform = `rotate(${0}deg)`;
                black_wrapper.style.display = "flex";
                count = 0;
                Minutes_calculate = 0;
                minute_show.innerText = Minutes_calculate;
                Hours_calculate = 0;
                hour_show.innerText = Hours_calculate;
                minute_count_init = 0;
                Sec_not_zero = false;
                only_count = 0;
                start_btn.disabled = true;
                start = false;
                restart_ = false;
                num_box_wrapper.style.display = "none";
            } else {//---------------else count not equal to final_degreeValue this time rotate the clock hand according og transform.-------------------------
                if (set_count) {
                    let x = degreeValue - 360;
                    hand.style.transform = `rotate(${x - only_count}deg)`;
                } else {
                    hand.style.transform = `rotate(${360 - count}deg)`;
                }
            }
        }, 1000);
    }
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------

div.append(hand, wrapper);//----------------------div append the clock hand and wrapper of clock hand----------------------------------------------------------
document.body.append(
    div,
    black_wrapper,
    hour_show_div,
    minute_show_div,
    audio, question_box,
    top_buttons_div,
    question_btn_hover_div,
    body_background,
    video_wrapper,
);
//-------------------------------------------------------------------END THE CODE-----------------------------------------------------------------------------