function slap() {
    let target = document.getElementById("target");

    target.src = "assets/slap.jpg";

    let slapSound = new Audio("slap.mp3");
    slapSound.play();


    setTimeout(() => {
        target.src = "slap.jpg";
    }, 500);
}
