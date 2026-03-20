const text = "Education of the Future.";
const speed = 75; // Adjust typing speed here (ms)
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Keeps the cursor visible but stops blinking if you prefer
        // document.querySelector('.typewriter').style.borderRight = "none";
    }
}

// Start typing after a tiny delay so it matches the image movement
setTimeout(typeWriter, 100);
