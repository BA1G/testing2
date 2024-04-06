// GENERAL-SCRIPT

let progress = document.getElementById("progress");

let song1 = new Audio("assets/naat-1.mp3")
let song2 = new Audio("assets/naat-2.mp3");
let song3 = new Audio("assets/naat-3.mp3");
let song4 = new Audio("assets/naat-4.mp3");
let song5 = new Audio("assets/naat-5.mp3");
let song6 = new Audio("assets/naat-6.mp3");



const songs = [song1, song2, song3, song4, song5, song6];
const songNames = ["Asma-ul-husna", "The way of tears", "Taweel-al-shaoq", "Wedding Nasheed", "I Rise Motivation", "Al Nibras"];
const artistNames = ["Qari Abdul Khaliq", "Muhammad Al Muqit", "Muhammad Al Muqit",  "Muhammad Al Muqit"  , "Muhammad Al Muqit"   ,"Abdullah Al Rifai"];
const playSrcList= ["assets/recently-img-2.png", "assets/recently-img-1.png" , "assets/recommends-img-1.png", "assets/recommends-img-4.png", "assets/recommends-img-2.png", "assets/recommends-img-3.png"];

let songIndex=0;



$(".recent-div-1").on("click", function ()
 {
        songIndex=3;  
        songs[songIndex].play();  
        $(".player-page").css("display","none");
        $(".play-page").css("display","block");
});

$(".recent-div-2").on("click", function ()
 {

        songIndex=4;  
        songs[songIndex].play();  
        $(".player-page").css("display","none");
        $(".play-page").css("display","block");
});

$(".recommendations-div-1").on("click", function ()
 {

        songIndex=0;  
        songs[songIndex].play();  
        $(".player-page").css("display","none");
        $(".play-page").css("display","block");
});

$(".recommendations-div-2").on("click", function ()
 {

        songIndex=1;  
        songs[songIndex].play();  
        $(".player-page").css("display","none");
        $(".play-page").css("display","block");
});

$(".recommendations-div-3").on("click", function ()
 {

        songIndex=2;  
        songs[songIndex].play();  
        $(".player-page").css("display","none");
        $(".play-page").css("display","block");
});

$(".recommendations-div-4").on("click", function ()
 {

        songIndex=5;  
        songs[songIndex].play();  
        $(".player-page").css("display","none");
        $(".play-page").css("display","block");
});





songs[songIndex].onloadedmetadata = function () {
    progress.max = songs[songIndex].duration;
    progress.value = songs[songIndex].currentTime;
};


// PLAY-PAUSE-BTN

$(".play-pause-btn").on("click", function () {
    if (songs[songIndex].paused) {
        $(".play-pause-icon").attr("src", "assets/pause-icon.png");
        songs[songIndex].play();
    } else {
        $(".play-pause-icon").attr("src", "assets/play-icon.png");
        songs[songIndex].pause();
    }

    $(".play-pause-btn").css("background", "yellowgreen");

    setTimeout(function () {
        $(".play-pause-btn").css("background", "linear-gradient(rgba(94,70,248,1) 100%,rgba(192,62,254,1) 100% )");
    }, 170);
});


// BACKWARD-BTN

$(".fa-backward").on("click", function () {
    songs[songIndex].pause();
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    songs[songIndex].play();

    $(".fa-backward").css("color", "red");

    $(".fa-repeat").addClass("auto-next");

    $(".fa-repeat").css("color", "white");

    setTimeout(function () {
        $(".fa-backward").css("color", "white");
    }, 150);
});


// FORWARD-BTN

$(".fa-forward").on("click", function () {
    songs[songIndex].pause();
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    songs[songIndex].play();

    $(".fa-forward").css("color", "red");

    $(".fa-repeat").addClass("auto-next");

    $(".fa-repeat").css("color", "white");

    setTimeout(function () {
        $(".fa-forward").css("color", "white");
    }, 150);
});


// REPEAT-BTN

$(".fa-repeat").on("click", function () {

    $(".fa-repeat").removeClass("auto-next");

    let aud = songs[songIndex];
    aud.onended = function () {
        songs[songIndex].play();
    };

    if (songs[songIndex].paused) {
        songs[songIndex].play();
    }

    $(".fa-repeat").css("color", "black");

});


// SHUFFLE-BTN

$(".fa-shuffle").on("click", function () {
    songs[songIndex].pause();
    let shuffleNumber = songs.length;
    songIndex = Math.floor(Math.random() * shuffleNumber);
    songs[songIndex].play();

    $(".fa-shuffle").css("color", "red");

    $(".fa-repeat").addClass("auto-next");

    $(".fa-repeat").css("color", "white");

    setTimeout(function () {
        $(".fa-shuffle").css("color", "white");
    }, 150);
});



// UNIVERSAL-TIMED-Function-FOR-General-functionality

setInterval(() => {

    if (songs[songIndex].paused) {
        $(".play-pause-icon").attr("src", "assets/play-icon.png");
    } else {
        $(".play-pause-icon").attr("src", "assets/pause-icon.png");
    }

    if ($(".fa-repeat").hasClass("auto-next")) {
        let audio = songs[songIndex];
        audio.onended = function () {
            $(".fa-forward").click();
        };
    }

    // $(".play-header-h3").html(songNames[songIndex]);
    // playSrc= "assets/recently-img-2.png";
    playSrc= playSrcList[songIndex];
    $(".play-img").attr("src", playSrc);
    $(".play-song-h3").html(songNames[songIndex]);
    $(".play-song-p").html(artistNames[songIndex]);

}, 500);



// $(document).ready(function () {

        if (window.location.pathname == '/index.html') {
alert("For best experience use a Mobile Phone");
        }
// });




$(".fa-arrow-left").on("click", function () {
    $(".fa-arrow-left").css("color", "red");

    setTimeout(function () {
        $(".fa-arrow-left").css("color", "white");
    }, 150);
});

$(".fa-ellipsis-vertical").on("click", function () {
    $(".fa-ellipsis-vertical").css("color", "red");

    setTimeout(function () {
        $(".fa-ellipsis-vertical").css("color", "white");
    }, 150);
});


let count = 0;

$(".fa-heart").on("click", function () {

    let heartId = this.id;
    count++;

    if (count % 2 == 0) {
        $("#" + heartId).css("color", "white");
    }
    else {
        $("#" + heartId).css("color", "red");
    }
});



// PROGRESS-BAR AND TIME

setInterval(() => {
    progress.value = songs[songIndex].currentTime;

    Time();
}, 500);

progress.onchange = function() {
    songs[songIndex].play();
    songs[songIndex].currentTime = progress.value;
};


// TIME-DURATION-SONG

function Time() {
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(songs[songIndex].currentTime / 60);
    let currentSeconds = Math.floor(
        songs[songIndex].currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(songs[songIndex].duration / 60);
    let durationSeconds = Math.floor(
        songs[songIndex].duration - durationMinutes * 60
    );

    // Add a zero to the single digit time values
    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
        durationMinutes = "0" + durationMinutes;
    }

    // Display the updated duration
    var curr_time = currentMinutes + ":" + currentSeconds;
    var total_duration = durationMinutes + ":" + durationSeconds;

    $(".liveTime").html(curr_time);
    $(".durationTime").html(total_duration);
}


