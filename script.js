// Begin Surprise Button

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.querySelector(".gallery").scrollIntoView({
        behavior: "smooth"
    });

});

// Floating Particles

const hero = document.querySelector(".hero");

for(let i=0;i<40;i++){

    let particle=document.createElement("span");

    particle.className="particle";

    particle.style.left=Math.random()*100+"%";

    particle.style.animationDelay=Math.random()*8+"s";

    particle.style.animationDuration=(6+Math.random()*6)+"s";

    hero.appendChild(particle);

}
