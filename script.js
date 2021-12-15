let myDiv = document.getElementById("myDiv");

let countDown = new Date("sep, 23 2023 17:00:00").getTime();

let countTime = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDown - now;

    let days = Math.floor(distance / (1000*60*60*24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    myDiv.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countTime);
        myDiv.innerHTML = "YEEEEY!"
    }
}, 1000);