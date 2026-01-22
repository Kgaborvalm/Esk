
// emiatt csak Magyarországról müködik
fetch('https://ipapi.co/json/')
.then(response => response.json())
.then(data => {
    if (data.country_code === 'HU') {
        // Ha magyar, megmutatjuk az oldalt
        document.body.style.display = 'block';
    } else {
        // Ha nem magyar, hibaüzenet
        document.body.innerHTML = "<h1 style='text-align:center; margin-top:100px;'>Ez az oldal csak Magyarországról érhető el.</h1>";
        document.body.style.display = 'block';
    }
})
.catch(error => {
    // Ha az API hiba miatt nem elérhető, biztonsági okokból mutassuk az oldalt
    console.error('Hiba az IP ellenőrzésekor:', error);
    document.body.style.display = 'block';
});


// Menu kezeles
function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const burger = document.querySelector(".hamburger");

    menu.classList.toggle("open");
    overlay.classList.toggle("show");
    burger.classList.toggle("active");
}


//visszaszamlalo

const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('2026-05-16T14:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
        countdownElement.textContent = 'Az esküvő már elkezdődött!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.textContent = `Visszaszámlálás az esküvőig: ${days} nap, ${hours} óra, ${minutes} perc, ${seconds} másodperc`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
