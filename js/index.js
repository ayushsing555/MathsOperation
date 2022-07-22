let playBtn        = document.getElementById("playBtn");
playBtn.addEventListener("click",()=>{
    const audio1 = new Audio('songs/buttonMusic.wav');
    audio1.play();
    location.href="game.html";
})