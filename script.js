 function confetti(amount = 150, duration = 6) {
      for (let i = 0; i < amount; i++) {
        let randomRotation = Math.floor(Math.random() * 360);
        let randomX = Math.floor(Math.random() * window.innerWidth);
        let size = Math.floor(Math.random() * 8) + 6;
        let delay = Math.random() * 2;
        let horizontalDrift = (Math.random() - 0.5) * 200; 

        let colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.width = size + 'px';
        confetti.style.height = size * 0.4 + 'px'; 
        confetti.style.backgroundColor = randomColor;
        confetti.style.top = '-20px'; 
        confetti.style.left = randomX + 'px';
        confetti.style.transform = 'rotate(' + randomRotation + 'deg)';
        confetti.style.animationDuration = duration + 's';
        confetti.style.animationDelay = delay + 's';

        confetti.animate(
          [
            { transform: `translateX(0) translateY(0) rotate(${randomRotation}deg)` },
            { transform: `translateX(${horizontalDrift}px) translateY(100vh) rotate(${randomRotation + 720}deg)` }
          ],
          {
            duration: (duration + delay) * 1000,
            easing: "cubic-bezier(0.25, 1, 0.5, 1)",
            fill: "forwards"
          }
        );

        document.getElementById("confetti-wrapper").appendChild(confetti);

        setTimeout(() => confetti.remove(), (duration + delay) * 1000);
      }
    }

const myUnalpha = document.getElementById("coffee");
const myAlpha = document.getElementById("doughnuts");
const myBtnAlpha = document.getElementById("dou");
const myBtnUnalpha = document.getElementById("cof");

myBtnAlpha.addEventListener('click', function(){
myAlpha.style.display = 'block';
myUnalpha.style.display = 'none';});

myBtnUnalpha.addEventListener('click', function(){
myUnalpha.style.display = 'block';
myAlpha.style.display = 'none';});

