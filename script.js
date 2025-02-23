function slap() {
    let target = document.getElementById("target");

    target.src = "assets/slap.jpg";

    let slapSound = new Audio("assets/slap.mp3");
    slapSound.play();


    setTimeout(() => {
        target.src = "assets/bf.jpg";
    }, 500);
}
