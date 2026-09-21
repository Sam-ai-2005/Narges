const startButton = document.getElementById("startButton");

const waitingSection = document.getElementById("waitingSection");

const loveMessage = document.getElementById("loveMessage");
const loveLanguage = document.getElementById("loveLanguage");

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


    /* =========================
       دوست دارم به چند زبان
    ========================== */

    const loveLanguages = [
        "دوست دارم",
        "I Love You",
        "Je t’aime",
        "Seni seviyorim",
        "Ich liebe dich",
        "Ti amo",
        "Я тебя люблю",
        "愛してる",
        "사랑해",
        "أحبك",
        "Eu te amo"
    ];

    let currentLanguage = 0;

    function changeLoveLanguage() {

        loveLanguage.classList.add("fade-out");

        setTimeout(() => {

            currentLanguage++;

            if (currentLanguage >= loveLanguages.length) {

                currentLanguage = 0;

            }

            loveLanguage.textContent =
                loveLanguages[currentLanguage];

            loveLanguage.classList.remove("fade-out");

            loveLanguage.classList.add("fade-in");

            setTimeout(() => {

                loveLanguage.classList.remove("fade-in");

            }, 50);

        }, 700);
    }


    /* هر 1.5 ثانیه زبان عوض شود */

    const languageInterval =
        setInterval(changeLoveLanguage, 1500);


    /* =========================
       بعد از تمام زبان‌ها
    ========================== */

    setTimeout(() => {

        clearInterval(languageInterval);

        loveLanguage.classList.add("fade-out");

        setTimeout(() => {

            loveLanguage.textContent = "دوست دارم";

            loveLanguage.classList.remove("fade-out");

            loveLanguage.classList.add("fade-in");

            setTimeout(() => {

                loveLanguage.classList.remove("fade-in");

            }, 50);

        }, 700);

    }, loveLanguages.length * 1500);


    /* =========================
       نمایش پیام پایین صفحه
    ========================== */

    setTimeout(() => {

        scrollMessage.classList.add("show");

    }, loveLanguages.length * 1500 + 3000);

}, 800);

    }, 10000);

});