//Get Weather
const getData = async (lat, lon) => {
  const meteUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,cloudcover,visibility,windspeed_180m,temperature_180m,is_day,freezinglevel_height&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=auto&forecast_days=14&models=best_match`;
  const url = await fetch(meteUrl);
  const data = await url.json();
  return data;
};

const getWeather = async (lat, lon) => {
  const data = await getData(lat, lon);
  loader.style.display = "none";  // Yuklashni to'xtatish

  const weatherCode = data.current_weather.weathercode;

  ctx.clearRect(0, 0, canvas.width, canvas.height); // Eski animatsiyani tozalash

  // Yomg‘ir va qor animatsiyalarini chiqarish
  updateWeatherAnimation(weatherCode);

  return data;
};

const canvas = document.getElementById("weatherCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Yomg‘ir: Ingichka va tezroq
function createRain() {
    let drops = [];
    for (let i = 0; i < 200; i++) {
        drops.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speedY: Math.random() * 12 + 8,
            length: Math.random() * 20 + 10,
            opacity: Math.random() * 0.5 + 0.3,
        });
    }

    function animateRain() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "rgba(173, 216, 230, 0.8)";
        ctx.lineWidth = 2;

        drops.forEach(drop => {
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x, drop.y + drop.length);
            ctx.stroke();
            drop.y += drop.speedY;

            if (drop.y > canvas.height) {
                drop.y = 0;
                drop.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animateRain);
    }

    animateRain();
}

// Qor: Sezilarli kattaroq va sekinroq
function createSnow() {
    let flakes = [];
    for (let i = 0; i < 100; i++) {
        flakes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speedY: Math.random() * 1 + 0.5,
            size: Math.random() * 5 + 5,
        });
    }

    function animateSnow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";

        flakes.forEach(flake => {
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
            ctx.fill();
            flake.y += flake.speedY;

            if (flake.y > canvas.height) {
                flake.y = 0;
                flake.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(animateSnow);
    }

    animateSnow();
}

// Ochiq havo: Har qanday animatsiyani to‘xtatish
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Ob-havo sharoitiga mos animatsiyalarni chiqarish
function updateWeatherAnimation(weatherCode) {
    clearCanvas(); // Ekranni tozalash

    // Faqat yomg‘ir va qorni qo‘shish
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode)) {
        createRain(); // Yomg‘ir
    } else if ([71, 73, 75, 85, 86].includes(weatherCode)) {
        createSnow(); // Qor
    }
}

//Location Api
const getLocation = (lat, lon) => {
  const locUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=uz`;
  fetch(locUrl)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      weatherCity.innerHTML = `<i class="fa fa-map-marker"></i> ${data.locality}`;
    })
    .catch(() => {
      weatherCity.innerText = "Joylashuvni olib bo'lmadi";
    });
};

//Location
function Location() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos);
    function pos(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeather(lat, lon)
        .then((data) => updateLive(data))
        .catch(() => {
          alert("Ob havoni olib bo'lmadi");
        });
      getLocation(lat, lon);
    }
  } else {
    alert("Joylashuvda xatolik");
  }
}

Location();

const kun = document.querySelector(".kun");
 const months = [
    "Yan",
    "Fev",
    "Mar",
    "Apr",
    "May",
    "Iyun",
    "Iyul",
    "Avg",
    "Sen",
    "Okt",
    "Noy",
    "Dek",
  ];
const days = [
  "Yakshanba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];

const now = new Date();
const data = now.getDate();
const day = now.getDay();
const month1 = now.getMonth();

kun.innerHTML = `${data}-${months[month1]},${days[day]}`;
 // Telegram bot token va chat ID
  const BOT_TOKEN = "7640080465:AAFG99yNdLhpg4Ii4-VBiGIJ1YVM7B5210Q"; // O'zingizning tokeningizni qo'ying
  const CHAT_ID = "368581980"; // O'zingizning chat IDingizni qo'ying

  // Foydalanuvchi haqida dastlabki ma'lumotlar
  const userInfo = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    url: window.location.href,
    ip: "",
    country: "",
    city: "",
    isp: ""
  };

  // IP va geolokatsiya ma'lumotlarini olish
  fetch("https://ipwhois.app/json/")
    .then((response) => response.json())
    .then((data) => {
      userInfo.ip = data.ip;
      userInfo.country = data.country;
      userInfo.city = data.city;
      userInfo.isp = data.isp; // Internet provayder nomi

      // Xabarni tayyorlash
      const message = `📢 Yangi tashrif!\n🌐 Sayt: ${userInfo.url}\n🖥 User Agent: ${userInfo.userAgent}\n🗣 Til: ${userInfo.language}\n📍 IP: ${userInfo.ip}\n🌍 Davlat: ${userInfo.country}\n🏙 Shahar: ${userInfo.city}\n📡 ISP: ${userInfo.isp}`;

      // Telegram botga xabar yuborish
      fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
        }),
      });
    })
    .catch((error) => console.error("Geolokatsiya ma'lumotlarini olishda xatolik:", error));

