const bird = document.querySelector("[data-bird]")

const speed = 0.55
const dur = 125



export function setupBird() {
    setTop(window.innerHeight / 2)
    document.removeEventListener("keydown", handleJump)
    document.addEventListener("keydown", handleJump)
}



export function updateBird(delta) {
    if (timeSinceLastJump < dur) {
        setTop(getTop() - speed * delta)
        console.log(getTop())
    }
    else {
        setTop(getTop() + speed * delta)
    }
    timeSinceLastJump+=delta;
}



function setTop(top) {
    bird.style.setProperty("--bird-top", top)
}

function getTop() {
    return parseFloat(getComputedStyle(bird).getPropertyValue("--bird-top"));
}


function handleJump(e) {
    if (e.code !== "Space") return
    timeSinceLastJump = 0;
}