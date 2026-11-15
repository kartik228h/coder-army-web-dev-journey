const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function countdown() {

    const now = new Date();
    const target = new Date("2028-07-14");

    const diff = target - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    days.innerHTML = d + " Days";
    hours.innerHTML = h + " Hours";
    minutes.innerHTML = m + " Minutes";
    seconds.innerHTML = s + " Seconds";
}

countdown();
setInterval(countdown, 1000);