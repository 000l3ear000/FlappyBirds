
import {updateBird,setupBird} from './bird.js';
document.addEventListener("keypress", handleStart, { once: true })
const title = document.querySelector("[data-title]")


let lastTime
function Loop(time) {
    if (lastTime = null) {
        lastTime = time;
        window.requestAnimationFrame(Loop)
        return
    }
    const delta = (time - lastTime)
    updateBird(delta)
    lastTime = time
    window.requestAnimationFrame(Loop)
}



function handleStart() {
    // console.log("object")
    title.classList.add("hide");
    setupBird()
    window.requestAnimationFrame(Loop)
}

function handelLose() {
    // console.log("object")
    title.classList.add("hide");
}
