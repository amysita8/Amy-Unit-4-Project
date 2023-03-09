let title = document.querySelector(".title");
let input1 = document.querySelector(".question1");
let input2 = document.querySelector(".question2");
let input3 = document.querySelector(".question3");
let DQ = document.querySelector(".questions");
let button1 = document.querySelector(".b1");
let button2 = document.querySelector(".b2");
let button3 = document.querySelector(".b3");
let resultPanda = document.querySelector(".resultPanda");
let resultBlackbear = document.querySelector(".resultBlackbear");
let resultGrizzly = document.querySelector(".resultGrizzly");
let resultPolarbear = document.querySelector(".resultPolarbear");
let resultTryagain = document.querySelector(".resultTryagain");
let blackbearIMG = document.querySelector(".blackbearIMG");
let grizzlyIMG = document.querySelector(".grizzlyIMG");
let polarbearIMG = document.querySelector(".polarbearIMG");

title.style.display = "block";
button1.onclick = function() {
    DQ.style.display = "block";
    button2.style.display = "block";
    title.style.display = "none";
    document.body.style.background = "#F7D6F8";


};


button2.onclick = function() {
    let q1 = document.querySelector(".question1").value;
    let q2 = document.querySelector(".question2").value;
    let q3 = document.querySelector(".question3").value;
    document.querySelector(".b3").style.display = "block";
    document.body.style.background = "#b98fdb";
    //console log
    console.log(q1);
    console.log(q2);
    console.log(q3);


    //Panda code
    if ((q1 <= 1999) && (q2 === "Cold" || q2 === "cold") && (q3 === "Yes" || q3 === "yes" || q3 === "No" || q3 === "no")) {
        document.querySelector(".pandaIMG").style.display = "block";
        document.querySelector(".resultPanda").style.display = "block";
        document.querySelector(".blackbearIMG").style.display = "none";
        document.querySelector(".resultBlackbear").style.display = "none";
        document.querySelector(".grizzlyIMG").style.display = "none";
        document.querySelector(".resultGrizzly").style.display = "none";
        document.querySelector(".polarbearIMG").style.display = "none";
        document.querySelector(".resultPolarbear").style.display = "none";
        document.querySelector(".resultTryagain").style.display = "none";
        document.querySelector(".questions").style.display = "none";
        document.querySelector(".b2").style.display = "none";
        resultPanda.innerHTML = "<p>" + "You were born in " + q1 + "</p>" + "<p>" + "You prefer " + q2 + "<p>" + "and you said " + q3 + " for siblings" + "</p>" + "<p>" + "You are a Panda!!" + "</p>";
    }


    //Black bear code
    else if ((q1 >= 2000) && (q2 === "hot" || q2 === "Hot") && (q3 === "yes" || q3 === "Yes" || q3 === "No" || q3 === "no")) {
        document.querySelector(".blackbearIMG").style.display = "block";
        document.querySelector(".resultBlackbear").style.display = "block";
        document.querySelector(".pandaIMG").style.display = "none";
        document.querySelector(".resultPanda").style.display = "none";
        document.querySelector(".grizzlyIMG").style.display = "none";
        document.querySelector(".resultGrizzly").style.display = "none";
        document.querySelector(".polarbearIMG").style.display = "none";
        document.querySelector(".resultPolarbear").style.display = "none";
        document.querySelector(".resultTryagain").style.display = "none";
        document.querySelector(".questions").style.display = "none";
        document.querySelector(".b2").style.display = "none";
        resultBlackbear.innerHTML = "<p>" + "You were born in " + q1 + "</p>" + "<p>" + "You prefer " + q2 + "</p>" + "<p>" + "and you said " + q3 + " for siblings" + "</p>" + "<p>" + "You are a Black Bear!!" + "</p>";
    }


    //Grizzly code
    else if ((q1 <= 1999) && (q2 === "Hot" || q2 === "hot") && (q3 === "No" || q3 === "no" || q3 === "Yes" || q3 === "yes")) {
        document.querySelector(".grizzlyIMG").style.display = "block";
        document.querySelector(".resultGrizzly").style.display = "block";
        document.querySelector(".pandaIMG").style.display = "none";
        document.querySelector(".resultPanda").style.display = "none";
        document.querySelector(".blackbearIMG").style.display = "none";
        document.querySelector(".resultBlackbear").style.display = "none";
        document.querySelector(".polarbearIMG").style.display = "none";
        document.querySelector(".resultPolarbear").style.display = "none";
        document.querySelector(".resultTryagain").style.display = "none";
        document.querySelector(".questions").style.display = "none";
        document.querySelector(".b2").style.display = "none";
        resultGrizzly.innerHTML = "<p>" + "You were born in " + q1 + "</p>" + "<p>" + "You prefer " + q2 + "</p>" + "<p>" + "and you said " + q3 + " for siblings" + "</p>" + "You are a Grizzly!!" + "</p>";
    }


    //Polar bear code
    else if ((q1 >= 2000) && (q2 === "Cold" || q2 === "cold") && (q3 === "No" || q3 === "no" || q3 === "Yes" || q3 === "yes")) {
        document.querySelector(".polarbearIMG").style.display = "block";
        document.querySelector(".resultPolarbear").style.display = "block";
        document.querySelector(".pandaIMG").style.display = "none";
        document.querySelector(".resultPanda").style.display = "none";
        document.querySelector(".blackbearIMG").style.display = "none";
        document.querySelector(".resultBlackbear").style.display = "none";
        document.querySelector(".grizzlyIMG").style.display = "none";
        document.querySelector(".resultGrizzly").style.display = "none";
        document.querySelector(".resultTryagain").style.display = "none";
        document.querySelector(".questions").style.display = "none";
        document.querySelector(".b2").style.display = "none";
        resultPolarbear.innerHTML = "<p>" + "You were born in " + q1 + "</p>" + "<p>" + "You prefer " + q2 + "</p>" + "<p>" + "and you said " + q3 + " for siblings" + "</p>" + "<p>" + "You are a Polar Bear!!" + "</p>";
    }


    //Try again message
    else {
        document.querySelector(".resultTryagain").style.display = "block";
        document.querySelector(".pandaIMG").style.display = "none";
        document.querySelector(".resultPanda").style.display = "none";
        document.querySelector(".blackbearIMG").style.display = "none";
        document.querySelector(".resultBlackbear").style.display = "none";
        document.querySelector(".grizzlyIMG").style.display = "none";
        document.querySelector(".resultGrizzly").style.display = "none";
        document.querySelector(".polarbearIMG").style.display = "none";
        document.querySelector(".resultPolarbear").style.display = "none";
        document.querySelector(".questions").style.display = "none";
        document.querySelector(".b2").style.display = "none";
        document.body.style.background = "#f09792";
    }


    button3.onclick = function() {
        document.body.style.background = "lightblue";
        title.style.display = "block";
        document.querySelector(".resultTryagain").style.display = "none";
        document.querySelector(".pandaIMG").style.display = "none";
        document.querySelector(".resultPanda").style.display = "none";
        document.querySelector(".blackbearIMG").style.display = "none";
        document.querySelector(".resultBlackbear").style.display = "none";
        document.querySelector(".grizzlyIMG").style.display = "none";
        document.querySelector(".resultGrizzly").style.display = "none";
        document.querySelector(".polarbearIMG").style.display = "none";
        document.querySelector(".resultPolarbear").style.display = "none";
        document.querySelector(".b3").style.display = "none";
        DQ.style.display = "none";
        button2.style.display = "none"; 
    };
};