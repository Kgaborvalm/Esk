
const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('2025-08-23T15:00:00');

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