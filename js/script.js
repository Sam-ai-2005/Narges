const startButton = document.getElementById("startButton");

const waitingSection = document.getElementById("waitingSection");

const loveMessage = document.getElementById("loveMessage");

const scrollMessage = document.getElementById("scrollMessage");

const timer = document.getElementById("timer");

const particlesContainer = document.getElementById("particles");

let started = false;


/* =========================
   آهنگ سایت
========================= */

const backgroundMusic = new Audio();

backgroundMusic.src = "./misuc.mp3";

backgroundMusic.loop = true;

backgroundMusic.volume = 0.5;

backgroundMusic.preload = "auto";


/* =========================
   ساخت ذرات شناور
========================= */

function createParticles() {

    for (let i = 0; i < 25; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (8 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            Math.random() * 8 + "s";

        particle.style.transform =
            `scale(${0.5 + Math.random()})`;

        particlesContainer.appendChild(particle);
    }
}

createParticles();


/* =========================
   شروع تجربه
========================= */

startButton.addEventListener("click", async () => {

    if (started) {
        return;
    }

    started = true;


    /* =========================
       شروع آهنگ
    ========================== */

    try {

        backgroundMusic.currentTime = 0;

        await backgroundMusic.play();

        console.log("Music started successfully");

    } catch (error) {

        console.log("Music could not start:", error);

        started = false;

        return;
    }


    /* =========================
       انیمیشن دکمه
    ========================== */

    startButton.classList.add("clicked");


    /* =========================
       رفتن به انتظار
    ========================== */

    setTimeout(() => {

        waitingSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 300);


    /* =========================
       شمارش معکوس
    ========================== */

    let seconds = 10;

    timer.textContent = seconds;


    const countdown =
        setInterval(() => {

            seconds--;

            timer.textContent = seconds;


            if (seconds <= 0) {

                clearInterval(countdown);

            }

        }, 1000);


    /* =========================
       بعد از 10 ثانیه
    ========================== */

    setTimeout(() => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


        /*
         * صبر کوتاه برای برگشت
         */

        setTimeout(() => {

            loveMessage.classList.add("show");


            /*
             * بعد از 3 ثانیه
             */

            setTimeout(() => {

                scrollMessage.classList.add("show");

            }, 3000);

        }, 800);

    }, 10000);

});