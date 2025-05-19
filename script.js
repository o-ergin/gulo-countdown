let fireworksStarted = false;

const startFireworks = () => {
  const container = document.getElementById("fireworks-canvas");
  const fireworks = new Fireworks.default(container, {
    hue: { min: 0, max: 360 },
    delay: { min: 15, max: 30 },
    rocketsPoint: 50,
    speed: 2,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 100,
    trace: 3,
    explosion: 5
  });

  fireworks.start();

  setTimeout(() => fireworks.stop(), 5000); // stop after 5 seconds
};

const countdown = () => {
  const targetDate = new Date("June 9, 2025 21:59:59").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "Gülo Geldi!!!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (distance <= 1000 && !fireworksStarted) {
    fireworksStarted = true;
    startFireworks();
  }
};

setInterval(countdown, 1000);
