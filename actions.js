// Set the date
let countDownDate = new Date("Aug 30, 2023 00:00:00").getTime();

// Actualizar cada segundo
let x = setInterval(function() {

    // obtener el dia de hoy
    let now = new Date().getTime();

    // calcula Dias restantes
    let distance = countDownDate - now;

    // calculo de Time DATE()
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = '<div class="counter"><div class="date"><p>' + days + '<br /><span class="date-name">Días</span></p></div><div class="date"><p>' + hours + ' <br /><span class="date-name">Hrs</span></p></div><div class="date"><p>' + minutes + ' <br /><span class="date-name">Min</span></p></div><div class="date"><p>' + seconds + ' <br /><span class="date-name">Seg</span></p></div></div>';

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);


//**** Get the element to get video youtube

// defaultVideoYoutube
function loadVideo() {
    document.getElementById("video").innerHTML = '<iframe src="https://www.youtube.com/embed/mAinJyxqrBY"  allowfullscreen></iframe>';
}

function videoYoutube1() {
    document.getElementById("video").innerHTML = '<iframe allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/mAinJyxqrBY"></iframe>';
}

function videoYoutube2() {
    document.getElementById("video").innerHTML = '<iframe allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/gVUs4oFKJmY"></iframe>';
}

function videoYoutube3() {
    document.getElementById("video").innerHTML = '<iframe allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/aQLDxUY_wjs"></iframe>';
}

function videoYoutube4() {
    document.getElementById("video").innerHTML = '<iframe allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/qBe17SnzI2s"></iframe>';
}