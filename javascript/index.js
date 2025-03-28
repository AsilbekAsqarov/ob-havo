// Weather INFO
const imgIcon = document.querySelector(".img");
const weatherCity = document.querySelector(".weather-city");
const weatherDegree = document.querySelector(".weather-degree");
const weatherInfoLite = document.querySelector(".weather-info-lite");
const resetInfo = document.querySelector(".reset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const weather = document.querySelector(".weather");
const maxqiymat = document.querySelector(".maxqiymat");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const clouds = document.querySelector(".clouds");
const feels_like = document.querySelector(".feels_like");
const rel = document.querySelector(".rain");
const pressure = document.querySelector(".pressure");
const weatherInfo = document.querySelector(".weather-info");
const daysBlok1Img = document.querySelector(".days-blok1-img");
const daysBlok1Temp = document.querySelector(".days-blok1-temp");
const daysBlok1Rain = document.querySelector(".days-blok1-rain");
const daysBlok2Img = document.querySelector(".days-blok2-img");
const daysBlok2Temp = document.querySelector(".days-blok2-temp");
const daysBlok2Rain = document.querySelector(".days-blok2-rain");
const daysBlok3Img = document.querySelector(".days-blok3-img");
const daysBlok3Temp = document.querySelector(".days-blok3-temp");
const daysBlok3Rain = document.querySelector(".days-blok3-rain");
const daysBlok4Img = document.querySelector(".days-blok4-img");
const daysBlok4Temp = document.querySelector(".days-blok4-temp");
const daysBlok4Rain = document.querySelector(".days-blok4-rain");
const mons1day = document.querySelector(".mons1day");
const mons1rain = document.querySelector(".mons1rain");
const mons1img = document.querySelector(".mons1imgday");
const mons1temp = document.querySelector(".mons1temp");
const mons2day = document.querySelector(".mons2day");
const mons2rain = document.querySelector(".mons2rain");
const mons2img = document.querySelector(".mons2imgday");
const mons2temp = document.querySelector(".mons2temp");
const mons3day = document.querySelector(".mons3day");
const mons3rain = document.querySelector(".mons3rain");
const mons3img = document.querySelector(".mons3imgday");
const mons3temp = document.querySelector(".mons3temp");
const mons4day = document.querySelector(".mons4day");
const mons4rain = document.querySelector(".mons4rain");
const mons4img = document.querySelector(".mons4imgday");
const mons4temp = document.querySelector(".mons4temp");
const mons5day = document.querySelector(".mons5day");
const mons5rain = document.querySelector(".mons5rain");
const mons5img = document.querySelector(".mons5imgday");
const mons5temp = document.querySelector(".mons5temp");
const mons6day = document.querySelector(".mons6day");
const mons6rain = document.querySelector(".mons6rain");
const mons6img = document.querySelector(".mons6imgday");
const mons6temp = document.querySelector(".mons6temp");
const mons7day = document.querySelector(".mons7day");
const mons7rain = document.querySelector(".mons7rain");
const mons7img = document.querySelector(".mons7imgday");
const mons7temp = document.querySelector(".mons7temp");
const advice = document.querySelector(".advice");
const modal = document.getElementById("aboutModal");
const closeBtn = document.querySelector(".closeBtn");
const adviceText = document.querySelector(".advice");
// Live coding
const updateLive = (data) => {
  if (
    data.current_weather.weathercode == 0 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/sun.gif";
    weatherInfo.textContent = "Ochiq havo";
    advice.textContent = "Bugun osmon ochiq va musaffo. Quyosh nurlari to'liq yorqinlikni ta'minlab, kunduzgi sayrlar uchun ideal vaqtni yaratadi. Yengil kiyimlar kiyib, tashqariga chiqib, havo tozaligidan bahramand bo'ling. Bu kabi kunlar uchun tabiiy go'zallikni kashf etish juda zo'r!";
  } else if (
    data.current_weather.weathercode == 0 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/night.gif";
    weatherInfo.textContent = "Ochiq havo";
    advice.textContent = "Bugun tun osmoni ham musaffo bo'ladi. Yulduzlar yorqin porlaydi, va havo toza. Tun yengil va salqin bo'lishi mumkin, shuning uchun tashqarida sayr qilishni yoki samolyot orqali yulduzlarni tomosha qilishni tavsiya qilamiz.";
  } else if (
    data.current_weather.weathercode == 1 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/sun.gif";
    weatherInfo.textContent = "Ochiq havo";
    advice.textContent = "Bugun asosan ochiq osmon va biroz bulutli. Quyosh nurlari ko'proq bo'ladi, lekin ba'zi joylarda bulutlar ko'rinishi mumkin. Tashqariga chiqish uchun yaxshi kun, lekin ehtiyot bo'ling, chunki ba'zi joylarda bulutlar yomg'ir keltirishi mumkin. Yengil kiyimlar kiyib, havo tozaligidan bahramand bo'ling";
  } else if (
    data.current_weather.weathercode == 1 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/night.gif";
    weatherInfo.textContent = "Ochiq havo";
    advice.textContent = "Bugun tun osmoni asosan ochiq, lekin ba'zi joylarda biroz bulutlar ko'rinishi mumkin. Havo salqin bo'lishi mumkin, shuning uchun o'zingizni iliq tutish uchun engil kiyim kiyishni tavsiya qilamiz. Yulduzlar porlab, tunning go'zalligidan bahramand bo'lish uchun ajoyib vaqt!";
  } else if (
    data.current_weather.weathercode == 2 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/cloudy.gif";
    weatherInfo.textContent = "Bulutli";
    advice.textContent = "Bugun asosan ochiq osmon va biroz bulutli. Quyosh nurlari ko'proq bo'ladi, lekin ba'zi joylarda bulutlar ko'rinishi mumkin. Tashqariga chiqish uchun yaxshi kun, lekin ehtiyot bo'ling, chunki ba'zi joylarda bulutlar yomg'ir keltirishi mumkin. Yengil kiyimlar kiyib, havo tozaligidan bahramand bo'ling";
  } else if (
    data.current_weather.weathercode == 2 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/cloudy-night.gif";
    weatherInfo.textContent = "Bulutli";
    advice.textContent = "Bugun tun osmoni asosan ochiq, lekin ba'zi joylarda biroz bulutlar ko'rinishi mumkin. Havo salqin bo'lishi mumkin, shuning uchun o'zingizni iliq tutish uchun engil kiyim kiyishni tavsiya qilamiz. Yulduzlar porlab, tunning go'zalligidan bahramand bo'lish uchun ajoyib vaqt!";
  } else if (
    data.current_weather.weathercode == 51 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/rain.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida engil yog'ingarchilik kutilmoqda. Bu, asosan, yengil yomg'ir yoki piyozli yomg'ir bo'lishi mumkin. Tashqariga chiqishda yengil yomg'ir ko'rsatmalari va yengil yomg'ir qo'lqoplarini olib yurish foydali bo'ladi. Odatda, bu turdagi yog'ingarchilik juda noaniq, lekin hali ham namlikni his qilish mumkin.";
  } else if (
    data.current_weather.weathercode == 51 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/rain-night.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tun davomida engil yomg'ir yoki yo'g'on yomg'ir bo'lishi mumkin. Tashqariga chiqishda ehtiyotkorlikni oshiring, chunki havo salqin va nam bo'lishi mumkin. Yengil yomg'irda yuqori poyabzal va yomg'ir qo'lqoplarini kiyish qulay bo'ladi. Bu turdagi yog'ingarchilik tungi sayrni biroz noqulay qilishi mumkin, shuning uchun shamollatish yoki namlikka qarshi choralar ko'ring.";
  } else if (
    data.current_weather.weathercode == 3 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/clouds.gif";
    weatherInfo.textContent = "Bulutli";
    advice.textContent = "Bugun asosan ochiq osmon va biroz bulutli. Quyosh nurlari ko'proq bo'ladi, lekin ba'zi joylarda bulutlar ko'rinishi mumkin. Tashqariga chiqish uchun yaxshi kun, lekin ehtiyot bo'ling, chunki ba'zi joylarda bulutlar yomg'ir keltirishi mumkin. Yengil kiyimlar kiyib, havo tozaligidan bahramand bo'ling";
  } else if (
    data.current_weather.weathercode == 3 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/clouds.gif";
    weatherInfo.textContent = "Bulutli";
    advice.textContent = "Bugun tun osmoni asosan ochiq, lekin ba'zi joylarda biroz bulutlar ko'rinishi mumkin. Havo salqin bo'lishi mumkin, shuning uchun o'zingizni iliq tutish uchun engil kiyim kiyishni tavsiya qilamiz. Yulduzlar porlab, tunning go'zalligidan bahramand bo'lish uchun ajoyib vaqt!";
  } else if (
    data.current_weather.weathercode == 45 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/foggy.gif";
    weatherInfo.textContent = "Tuman";
    advice.textContent = "BBugun kun davomida tuman bo'ladi, bu ko'rinishni cheklaydi. Havo salqin va nam bo'lishi mumkin, shuning uchun tashqariga chiqishda ehtiyot bo'ling. Ko'rish masofasi qisqarishi mumkin, shuning uchun haydashda yoki sayr qilishda aniq ko'rish uchun qo'shimcha ehtiyotkorlik zarur. Kiyimni iliq va qulay tanlang.";
  } else if (
    data.current_weather.weathercode == 45 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/foggy.gif";
    weatherInfo.textContent = "Tuman";
    advice.textContent = "Bugun tun davomida ham tuman bo'lishi kutilmoqda. Ko'rish masofasi yanada qisqaradi, shuning uchun tungi sayr qilishda ehtiyotkorlikka rioya qilish lozim. Havo salqin va nam bo'lishi mumkin, shuning uchun issiq kiyim kiyish tavsiya qilinadi. Tashqariga chiqqanda, alohida e'tibor bilan harakat qilish kerak.";
  } else if (
    data.current_weather.weathercode == 48 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/foggy.gif";
    weatherInfo.textContent = "Tuman";
    advice.textContent = "Bugun cho'kma tuman bo'lishi mumkin, bu yanada kuchaygan ko'rinishni cheklaydi. Ko'rish masofasi juda qisqaradi, shuning uchun tashqariga chiqishda ehtiyotkorlikni oshirish kerak. Havo salqin va nam bo'ladi, shuning uchun maxsus kiyimlar kiyish, ayniqsa poyabzalni va kiyimni mos tanlash muhim. Haydash yoki sayr qilishda juda ehtiyot bo'ling.";
  } else if (
    data.current_weather.weathercode == 48 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/foggy.gif";
    weatherInfo.textContent = "Tuman";
    advice.textContent = "Bugun tun davomida cho'kma tuman bo'ladi. Ko'rish yanada qisqaradi, bu tunning xavfli tomonini oshiradi. Ehtiyotkorlik bilan sayr qiling va harakatlaringizni sekinlashtiring. Havo salqin va nam bo'lishi mumkin, shuning uchun issiq kiyimlar kiyishni tavsiya qilamiz. Tashqariga chiqqanda, harakatlaringizni aniq va ehtiyotkorona qilish muhim.";
  } else if (
    data.current_weather.weathercode == 53 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida o'rtacha yog'ingarchilik bo'lishi kutilmoqda. Yomg'ir kuchliroq bo'lishi mumkin, lekin hali ham to'liq yomon ob-havo bo'lmaydi. Yomg'irga tayyor bo'ling, yomg'irga chidamli kiyim va poyabzal kiyish tavsiya qilinadi. Tashqariga chiqishda ehtiyotkorlik bilan yurish va yengil yomg'irda nam bo'lishdan saqlanish foydalidir.";
  } else if (
    data.current_weather.weathercode == 53 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tun davomida o'rtacha yog'ingarchilik bo'lishi kutilmoqda. Bu, kuchli yomg'ir yoki doimiy yomg'ir bo'lishi mumkin. Namlikni his qilish ehtimoli oshadi, shuning uchun issiq va namdan himoyalangan kiyimlar kiyishni tavsiya qilamiz. Yomg'irni hisobga olgan holda, poyabzal va tashqariga chiqish uchun mos kiyimlarni tayyorlash foydalidir";
  } else if (
    data.current_weather.weathercode == 55 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida zich intensivlikda yog'ingarchilik bo'lishi mumkin. Yomg'ir kuchli va doimiy bo'lib, ba'zi joylarda ko'chalar nam bo'lishi yoki hatto suv to'kilishi mumkin. Tashqariga chiqqanda doimiy yomg'irga tayyor bo'ling, suvga chidamli kiyim va poyabzal kiyish tavsiya qilinadi. Yomg'irni hisobga olgan holda, ehtiyotkorlik bilan yurish lozim.";
  } else if (
    data.current_weather.weathercode == 55 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tun davomida zich intensivlikda yomg'ir yog'ishi kutilmoqda. Yomg'ir juda kuchli bo'lishi mumkin, shuning uchun to'liq tayyor bo'ling. Tashqariga chiqqanda, yuqori poyabzal va yomg'irga chidamli kiyimlarni kiyish zarur. Yomg'ir tufayli ko'rinishni cheklash mumkin, shuning uchun ehtiyotkorlik bilan harakat qilish lozim. Yomg'ir tufayli tunda yo'llar nam bo'lishi va sirpanishi mumkin.";
  } else if (
    data.current_weather.weathercode == 56 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida sovuq yomg'ir yog'ishi kutilmoqda, ammo uning intensivligi engil bo'ladi. Yomg'irning yo'g'onligi kamroq, ammo havo salqin bo'lib, tashqarida namlik va sovuq his qilinadi. Yengil yomg'ir uchun yengil yomg'ir paltosi yoki suvga chidamli kiyim kiyish tavsiya qilinadi. Tashqariga chiqqanda, shamoldan himoyalanishni unutmang.";
  } else if (
    data.current_weather.weathercode == 56 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tun davomida engil sovuq yomg'ir bo'lishi kutilmoqda. Havo salqin bo'lib, sizni namlik va sovuq his qilishni boshlashingiz mumkin. Tashqarida yurish uchun issiq kiyim va yomg'irga chidamli kiyimlar tavsiya qilinadi. Shamol kuchayishi mumkin, shuning uchun shamoldan himoyalanish ham muhim.";
  } else if (
    data.current_weather.weathercode == 57 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida sovuq yomg'ir o'rtacha intensivlikda yog'ishi mumkin. Yomg'ir kuchliroq bo'lishi kutilmoqda, va havo salqin bo'lib, namlikni oshiradi. Tashqariga chiqishda yanada sovuq bo'lishi mumkin, shuning uchun issiq kiyim va yomg'irga chidamli kiyimlar kiyishni unutmang. Tashqarida yurishda ehtiyotkorlik bilan yurish tavsiya qilinadi.";
  } else if (
    data.current_weather.weathercode == 57 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tun davomida sovuq yomg'ir o'rtacha intensivlikda bo'lishi kutilmoqda. Yomg'ir davomiy va kuchli bo'lib, havoni yanada sovuq qiladi. Tashqariga chiqishda issiq kiyimlar va suvga chidamli kiyimlar kiyish tavsiya qilinadi. Ko'rish va yurish qulayligi cheklanishi mumkin, shuning uchun ehtiyotkorlik bilan harakat qiling.";
  } else if (
    data.current_weather.weathercode == 61 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida yomg'ir engil intensivlikda yog'ishi kutilmoqda. Yengil yomg'ir tufayli tashqarida namlik hissi bo'ladi, ammo havo juda sovuq bo'lmaydi. Yomg'ir uchun yengil yomg'ir paltosi yoki suvga chidamli kiyim kiyish tavsiya qilinadi. Tashqariga chiqishda ehtiyotkorlik bilan yurish zarur, chunki yomg'ir havo sharoitini biroz salqinlashtirishi mumkin.";
  } else if (
    data.current_weather.weathercode == 61 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tun davomida engil yomg'ir bo'lishi kutilmoqda. Yomg'irning intensivligi past bo'lib, havo salqin, ammo juda sovuq bo'lmaydi. Yengil yomg'ir tufayli tashqariga chiqishda yomg'irga chidamli kiyim va poyabzal kiyish tavsiya qilinadi. Shamol juda kuchli bo'lmasligi kerak, ammo ehtiyotkorlik bilan harakat qilish tavsiya etiladi.";
  } else if (
    data.current_weather.weathercode == 63 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida yomg'ir o'rtacha intensivlikda yog'ishi kutilmoqda. Yomg'ir yanada kuchayib, havoda namlikni oshiradi. Tashqarida yurish uchun issiq kiyim va yomg'irga chidamli kiyimlar kiyishni unutmang. Yomg'irning davomiyligi o'rtacha bo'lishi mumkin, shuning uchun tashqarida ko'proq vaqt o'tkazmaslikni tavsiya qilamiz.";
  } else if (
    data.current_weather.weathercode == 63 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tun davomida yomg'ir o'rtacha intensivlikda bo'lishi kutilmoqda. Yomg'ir yanada kuchliroq bo'ladi, havo salqinlashadi va namlik oshadi. Tashqariga chiqishda issiq kiyim va yomg'irga chidamli kiyimlar kiyish zarur. Yomg'ir sababli ko'rish cheklanishi mumkin, shuning uchun ehtiyotkorlik bilan harakat qiling.";
  } else if (
    data.current_weather.weathercode == 65 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida yomg'ir og'ir intensivlikda yog'ishi kutilmoqda. Yomg'ir kuchli bo'lib, ko'chalarda suv to'kilishi mumkin. Havo salqinlashadi, namlik yuqori bo'ladi. Yomg'irdan himoyalanish uchun to'liq yomg'ir paltosi, suvga chidamli kiyimlar va poyabzal kiyishni unutmang. Ko'chada yurishda ehtiyotkorlik bilan harakat qilish zarur.";
  } else if (
    data.current_weather.weathercode == 65 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tun davomida yomg'ir og'ir intensivlikda yog'ishi kutilmoqda. Yomg'ir kuchli va to'liq yomg'ir bilan davom etishi mumkin, ko'chalarda suv to'kilishi va holatni yanada yomonlashtirishi mumkin. Tashqariga chiqishda yomg'irga chidamli kiyim va poyabzal kiyish tavsiya qilinadi. Yomg'ir tufayli yo'llarda sirpanish va ko'rish qiyinlashishi mumkin, shuning uchun ehtiyotkorlik bilan harakat qiling.";
  } else if (
    data.current_weather.weathercode == 66 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida sovuq yomg'ir engil intensivlikda yog'ishi kutilmoqda. Yomg'ir yengil bo'lib, havo salqinlashadi, ammo juda sovuq bo'lmaydi. Tashqariga chiqishda issiq kiyim va yomg'irga chidamli kiyimlar kiyish tavsiya qilinadi. Yomg'irning intensivligi past bo'lishi sababli, ko'chada yengil tashqi kiyim bilan yurish mumkin, ammo salqin havo tufayli bir oz ehtiyotkorlik bilan harakat qilish zarur.";
  } else if (
    data.current_weather.weathercode == 66 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tun davomida sovuq yomg'ir engil intensivlikda yog'ishi kutilmoqda. Yomg'ir yengil bo'lib, havo salqin, ammo juda sovuq bo'lmaydi. Tashqariga chiqishda issiq kiyim va yomg'irga chidamli kiyimlar kiyish zarur. Yomg'ir tufayli ko'chada namlik va yengil sovuqni his qilish mumkin. Ehtiyotkorlik bilan yurish tavsiya etiladi, chunki havo salqin bo'lishi mumkin.";
  } else if (
    data.current_weather.weathercode == 67 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida sovuq yomg'ir og'ir intensivlikda yog'ishi kutilmoqda. Yomg'ir kuchli bo'lib, havo salqinlashadi va namlik yuqori bo'ladi. Tashqariga chiqishda issiq kiyim, yomg'irga chidamli kiyimlar va poyabzal kiyishni unutmang. Yomg'ir tufayli ko'chalarda suv to'kilishi va havo sovuq bo'lishi mumkin, shuning uchun ehtiyotkorlik bilan harakat qilish zarur.";
  } else if (
    data.current_weather.weathercode == 67 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tun davomida sovuq yomg'ir og'ir intensivlikda yog'ishi kutilmoqda. Yomg'ir kuchli bo'ladi, havo salqinlashadi va ko'chalarda suv to'kilishi mumkin. Tashqariga chiqishda issiq kiyim, yomg'irga chidamli kiyimlar va poyabzal kiyish zarur. Yomg'ir tufayli ko'rish cheklanishi va yo'llarda sirpanish xavfi bo'lishi mumkin, shuning uchun ehtiyotkorlik bilan harakat qilish tavsiya qilinadi.";
  } else if (
    data.current_weather.weathercode == 80 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida yomg'irli shamollar kuchayishi kutilmoqda. Yomg'irning intensivligi turlicha bo'lishi mumkin. Ba'zi joylarda engil yomg'ir, ba'zi hududlarda esa o'rtacha va kuchli yomg'ir yog'ishi mumkin. Ko'chalarda vaqtincha suv to'planishi ehtimoli mavjud. Yomg'irga qarshi tayyor bo'lishingizni maslahat beramiz, soya yoki yomg'irga qarshi kiyim kiying.";
  } else if (
    data.current_weather.weathercode == 80 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tunda yomg'irning intensivligi kuchayishi kutilmoqda. Ba'zi joylarda engil yomg'ir, boshqa hududlarda esa kuchli va intensiv yomg'ir yog'ishi mumkin. Tunda yomg'ir tufayli ko'chalar sirpanib qolishi yoki to'planishi ehtimoli bor. Ehtiyotkorlik bilan yurish, yomg'irga qarshi maxsus kiyim va soyabon olish zarur.";
  } else if (
    data.current_weather.weathercode == 81 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida yomg'irli shamollar kuchayishi kutilmoqda. Yomg'irning intensivligi turlicha bo'lishi mumkin. Ba'zi joylarda engil yomg'ir, ba'zi hududlarda esa o'rtacha va kuchli yomg'ir yog'ishi mumkin. Ko'chalarda vaqtincha suv to'planishi ehtimoli mavjud. Yomg'irga qarshi tayyor bo'lishingizni maslahat beramiz, soya yoki yomg'irga qarshi kiyim kiying.";
  } else if (
    data.current_weather.weathercode == 81 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tunda yomg'irning intensivligi kuchayishi kutilmoqda. Ba'zi joylarda engil yomg'ir, boshqa hududlarda esa kuchli va intensiv yomg'ir yog'ishi mumkin. Tunda yomg'ir tufayli ko'chalar sirpanib qolishi yoki to'planishi ehtimoli bor. Ehtiyotkorlik bilan yurish, yomg'irga qarshi maxsus kiyim va soyabon olish zarur.";
  } else if (
    data.current_weather.weathercode == 82 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Bugun kun davomida yomg'irli shamollar kuchayishi kutilmoqda. Yomg'irning intensivligi turlicha bo'lishi mumkin. Ba'zi joylarda engil yomg'ir, ba'zi hududlarda esa o'rtacha va kuchli yomg'ir yog'ishi mumkin. Ko'chalarda vaqtincha suv to'planishi ehtimoli mavjud. Yomg'irga qarshi tayyor bo'lishingizni maslahat beramiz, soya yoki yomg'irga qarshi kiyim kiying.";
  } else if (
    data.current_weather.weathercode == 82 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/drizzle.gif";
    weatherInfo.textContent = "Yomg'ir";
    advice.textContent = "Tunda yomg'irning intensivligi kuchayishi kutilmoqda. Ba'zi joylarda engil yomg'ir, boshqa hududlarda esa kuchli va intensiv yomg'ir yog'ishi mumkin. Tunda yomg'ir tufayli ko'chalar sirpanib qolishi yoki to'planishi ehtimoli bor. Ehtiyotkorlik bilan yurish, yomg'irga qarshi maxsus kiyim va soyabon olish zarur.";
  } else if (
    data.current_weather.weathercode == 73 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/snowflake.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Bugun kun davomida o'rtacha qor yog'ishi kutilmoqda. Yomg'irning intensivligi o'rtacha bo'lib, ko'chalarda qor to'planishi va havo sovuq bo'lishi mumkin. Tashqariga chiqishda issiq kiyim, qo'lqop, bosh kiyim va qordan himoya qiluvchi poyabzal kiyish zarur. Qor yog'ishi davomida ko'chalar sirpanib qolishi va ko'rish cheklanishi mumkin.";
  } else if (
    data.current_weather.weathercode == 73 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/snowflake.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Tun davomida o'rtacha qor yog'ishi kutilmoqda. Yomg'irning intensivligi o'rtacha bo'lib, ko'chalarda qor to'planishi mumkin. Havo sovuq va nam bo'ladi. Tashqariga chiqishda issiq kiyim, qo'lqop va bosh kiyim kiyish zarur. Ko'chalarda muzlash va sirpanish xavfi bo'lishi mumkin, shuning uchun ehtiyotkorlik bilan yurish tavsiya qilinadi.";
  } else if (
    data.current_weather.weathercode == 75 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/snowflake.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Bugun kun davomida og'ir qor yog'ishi kutilmoqda. Yomg'irning intensivligi kuchli bo'lib, ko'chalarda qor to'planishi va havo sovuq bo'lishi mumkin. Tashqariga chiqishda issiq kiyim, qo'lqop, bosh kiyim, qordan himoya qiluvchi poyabzal kiyish zarur. Ko'chalarda qor qatlami qalinlashishi va ko'rish cheklanishi, shuningdek, transport harakati sekinlashishi mumkin.";
  } else if (
    data.current_weather.weathercode == 75 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/snowflake.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Tun davomida og'ir qor yog'ishi kutilmoqda. Yomg'irning intensivligi kuchli bo'ladi, ko'chalarda qor to'planishi va havo sovuq bo'ladi. Tashqariga chiqishda issiq kiyim, qo'lqop, bosh kiyim va qordan himoya qiluvchi poyabzal kiyish zarur. Qor qatlami tezda to'planishi va yo'llarda sirpanish xavfi oshishi mumkin. Ehtiyotkorlik bilan yurish va transport harakatini cheklash tavsiya etiladi.";
  } else if (
    data.current_weather.weathercode == 86 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/snowflake.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Bugun kun davomida qor yog'ishi kutilmoqda. Yomg'irning intensivligi turlicha bo'lishi mumkin: ba'zi hududlarda engil qor yog'ishi, ba'zi joylarda esa og'ir qor yog'ishi kutilmoqda. Ko'chalarda qor to'planishi va sirpanish ehtimoli bor. Tashqariga chiqishda issiq kiyim, qo'lqop va bosh kiyim kiyish tavsiya etiladi.";
  } else if (
    data.current_weather.weathercode == 86 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/snowflake.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Tunda qor yog'ishi davom etishi kutilmoqda. Yomg'ir intensivligi og'ir bo'lib, ko'chalarda qor to'planishi va sirpanish ehtimoli yuqori. Tunda yomg'ir o'rtacha intensivlikda yog'ishi mumkin. Havo sovuq bo'lgani uchun issiq kiyim va ehtiyotkorlik bilan yurish zarur.";
  } else if (
    data.current_weather.weathercode == 95 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/water-drops.gif";
    weatherInfo.textContent = "Momaqaldiroq";
    advice.textContent = "Bugun kun davomida yomg'irli bo'lib, o'rtacha intensivlikda kuchli shamollar va yengil jala bilan birgalikda yomg'ir yog'ishi kutilmoqda. Ba'zi joylarda momaqaldiroq sodir bo'lishi mumkin. Tashqariga chiqishda ehtiyotkorlikni oshiring, soyabon yoki yomg'irga qarshi kiyim kiyish, shuningdek, yengil yengil momaqaldiroq paytida yashiring.";
  } else if (
    data.current_weather.weathercode == 95 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/water-drops.gif";
    weatherInfo.textContent = "Momaqaldiroq";
    advice.textContent = "Tunda momaqaldiroq va yomg'irli ob-havo davom etishi kutilmoqda. Momaqaldiroqning intensivligi o'rtacha bo'lib, ba'zi joylarda kuchli shamollar va yomg'ir bilan birgalikda sodir bo'lishi mumkin. Bu vaqt ichida xavfsizlikni ta'minlash uchun tashqariga chiqmaslik yoki yashin paytida elektr jihozlaridan foydalanmaslik tavsiya etiladi.";
  } else if (
    data.current_weather.weathercode == 96 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/water-drops.gif";
    weatherInfo.textContent = "Momaqaldiroq";
    advice.textContent = "Bugun kun davomida kuchli yomg'ir va momaqaldiroq sodir bo'lishi kutilmoqda. Ba'zi joylarda engil, ba'zi hududlarda esa og'ir bo'lib, do'l yog'ishi mumkin. Yomg'ir va momaqaldiroq bilan birgalikda do'lning intensivligi turlicha bo'ladi. Ehtiyotkorlik bilan tashqariga chiqish zarur, avtomobillarda yoki ochiq joylarda do'ldan himoyalanishingiz kerak.";
  } else if (
    data.current_weather.weathercode == 96 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/water-drops.gif";
    weatherInfo.textContent = "Momaqaldiroq";
    advice.textContent = "Tunda yomg'irli momaqaldiroq davom etishi kutilmoqda. Ba'zi hududlarda engil, ba'zi joylarda esa og'ir intensivlikda do'l yog'ishi mumkin. Tunda do'lning intensivligi kuchayishi ehtimoli bor. Elektr toki va momaqaldiroqdan xavfsiz joyga o'tish, shuningdek, avtomobilni xavfsiz joyga to'xtatish tavsiya etiladi.";
  } else if (
    data.current_weather.weathercode == 99 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/water-drops.gif";
    weatherInfo.textContent = "Momaqaldiroq";
    advice.textContent = "Bugun kun davomida kuchli yomg'ir va momaqaldiroq sodir bo'lishi kutilmoqda. Ba'zi joylarda engil, ba'zi hududlarda esa og'ir bo'lib, do'l yog'ishi mumkin. Yomg'ir va momaqaldiroq bilan birgalikda do'lning intensivligi turlicha bo'ladi. Ehtiyotkorlik bilan tashqariga chiqish zarur, avtomobillarda yoki ochiq joylarda do'ldan himoyalanishingiz kerak.";
  } else if (
    data.current_weather.weathercode == 99 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/water-drops.gif";
    weatherInfo.textContent = "Momaqaldiroq";
    advice.textContent = "Tunda yomg'irli momaqaldiroq davom etishi kutilmoqda. Ba'zi hududlarda engil, ba'zi joylarda esa og'ir intensivlikda do'l yog'ishi mumkin. Tunda do'lning intensivligi kuchayishi ehtimoli bor. Elektr toki va momaqaldiroqdan xavfsiz joyga o'tish, shuningdek, avtomobilni xavfsiz joyga to'xtatish tavsiya etiladi.";
  } else if (
    data.current_weather.weathercode == 71 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/snow.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Bugun kun davomida engil qor yog'ishi kutilmoqda. Yomg'ir qorga aylanishi va engil yog'ishi mumkin. Havo salqin, lekin juda sovuq emas. Tashqariga chiqishda issiq kiyim, qo'lqop va bosh kiyim kiyish tavsiya etiladi. Qor yengil yog'ishi tufayli ko'chalarda qisqa muddatli qor to'planishi mumkin. Ehtiyotkorlik bilan yurish zarur, chunki yerda namlik ko'payadi.";
  } else if (
    data.current_weather.weathercode == 71 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/snow.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Tun davomida engil qor yog'ishi kutilmoqda. Yomg'ir qorga aylanishi va asta-sekin yog'ishi mumkin. Havo salqin bo'ladi, ammo sovuq bo'lishi kutilmayapti. Tashqariga chiqishda issiq kiyim, qo'lqop va bosh kiyim kiyish zarur. Yengil qor tufayli ko'chalarda muzlash ehtimoli bo'lishi mumkin, shuning uchun ehtiyotkorlik bilan yurish tavsiya etiladi.";
  } else if (
    data.current_weather.weathercode == 77 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/snow.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Bugun kun davomida qor donalari yog'ishi kutilmoqda. Bu engil qor yog'ishi bilan birga keladi, ammo ko'chalarda qor to'planishi yoki sirpanish ehtimoli bo'lishi mumkin. Tashqariga chiqishda issiq kiyim, qo'lqop va bosh kiyim kiyish tavsiya etiladi. Qor donalari yog'ishi kun davomida joy-joyiga tarqalgan holda davom etishi mumkin, ammo intensivlik o'rtacha bo'ladi.";
  } else if (
    data.current_weather.weathercode == 77 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/snow.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Tun davomida qor donalari yog'ishi davom etishi kutilmoqda. Yomg'irning intensivligi engil bo'lib, ko'chalarda qor to'planish ehtimoli mavjud. Havo sovuq bo'ladi, shuning uchun issiq kiyim, qo'lqop va bosh kiyim kiyish zarur. Yengil qor donalari tufayli ko'chalar sirpanib qolishi mumkin, shuning uchun ehtiyotkorlik bilan yurish tavsiya qilinadi";
  } else if (
    data.current_weather.weathercode == 85 &&
    data.current_weather.is_day == 1
  ) {
    imgIcon.src = "./img/snow.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Bugun kun davomida qor yog'ishi kutilmoqda. Yomg'irning intensivligi turlicha bo'lishi mumkin: ba'zi hududlarda engil qor yog'ishi, ba'zi joylarda esa og'ir qor yog'ishi kutilmoqda. Ko'chalarda qor to'planishi va sirpanish ehtimoli bor. Tashqariga chiqishda issiq kiyim, qo'lqop va bosh kiyim kiyish tavsiya etiladi.";
  } else if (
    data.current_weather.weathercode == 85 &&
    data.current_weather.is_day == 0
  ) {
    imgIcon.src = "./img/snow.gif";
    weatherInfo.textContent = "Qor";
    advice.textContent = "Tunda qor yog'ishi davom etishi kutilmoqda. Yomg'ir intensivligi og'ir bo'lib, ko'chalarda qor to'planishi va sirpanish ehtimoli yuqori. Tunda yomg'ir o'rtacha intensivlikda yog'ishi mumkin. Havo sovuq bo'lgani uchun issiq kiyim va ehtiyotkorlik bilan yurish zarur.";
  }
  weatherDegree.innerHTML = `${Math.round(data.current_weather.temperature)}°`;
  closeBtn.onclick = function() {
    modal.style.display = "none"; // Modal oynani yopish
  };
  
  // Modalni tashqaridan bosish orqali yopish
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  setTimeout(() => {
    modal.style.display = "block"; // Modal oynani ko'rsatish
  }, 1000); // 3 soniya kutish

  // 5 soniyadan keyin modalni yopish
  setTimeout(() => {
    modal.style.display = "none"; // Modal oynani yopish
  }, 15000); // 5 soniyadan keyin yopish
  //qoshimcha blok
  resetInfo.innerHTML = `${data.current_weather.time.slice(11)}`;
  humidity.innerHTML = `${data.hourly.relativehumidity_2m[0]}%`;
  windSpeed.innerHTML = `${data.current_weather.windspeed} km/s`;
  if (data.daily.temperature_2m_min[0] == data.daily.temperature_2m_max[0]) {
    weather.innerHTML = `${Math.floor(data.daily.temperature_2m_min[0])}°`;
  } else {
    weather.innerHTML = `${Math.floor(
      data.daily.temperature_2m_min[0]
    )}/${Math.floor(data.daily.temperature_2m_max[0])}°`;
  }
  feels_like.innerHTML = `${Math.round(
    data.daily.apparent_temperature_max[0]
  )}°`;
  if (data.hourly.cloudcover[0] === 0) {
    clouds.innerHTML = "Bulutsiz";
  } else {
    clouds.innerHTML = `${data.hourly.cloudcover[0]}%`;
  }
  if (data.daily.precipitation_probability_max[0] === 0) {
    rel.innerHTML = `Yo'q`;
  } else {
    rel.innerHTML = `${data.daily.precipitation_probability_max[0]}%`;
  }
  if (data.daily.precipitation_hours[0] === 0) {
    pressure.innerHTML = `0`;
  } else {
    pressure.innerHTML = `${data.daily.precipitation_hours[0]} soat`;
  }
  if (data.hourly.visibility[0] >= 1000) {
    maxqiymat.innerHTML = "Cheksiz";
  } else {
    maxqiymat.innerHTML = `${Math.round(data.hourly.visibility[0])} m`;
  }
  sunrise.innerHTML = `${data.daily.sunrise[0].slice(11)}`;
  sunset.innerHTML = `${data.daily.sunset[0].slice(11)}`;
  //Kunlik
  if (data.hourly.weathercode[8] == 0 || data.hourly.weathercode[8] == 1) {
    daysBlok1Img.src = "./img/blokImg/clear-day.svg";
  } else if (
    data.hourly.weathercode[8] == 2 ||
    data.hourly.weathercode[8] == 3
  ) {
    daysBlok1Img.src = "./img/blokImg/partly-cloudy-day.svg";
  } else if (
    data.hourly.weathercode[8] == 45 ||
    data.hourly.weathercode[8] == 48
  ) {
    daysBlok1Img.src = "./img/blokImg/fog.svg";
  } else if (data.hourly.weathercode[8] == 51) {
    daysBlok1Img.src = "./img/blokImg/showers-day.svg";
  } else if (data.hourly.weathercode[8] == 3) {
    daysBlok1Img.src = "./img/blokImg/cloudy.svg";
  } else if (
    data.hourly.weathercode[8] == 53 ||
    data.hourly.weathercode[8] == 55 ||
    data.hourly.weathercode[8] == 56 ||
    data.hourly.weathercode[8] == 57 ||
    data.hourly.weathercode[8] == 61 ||
    data.hourly.weathercode[8] == 63 ||
    data.hourly.weathercode[8] == 65 ||
    data.hourly.weathercode[8] == 66 ||
    data.hourly.weathercode[8] == 67 ||
    data.hourly.weathercode[8] == 80 ||
    data.hourly.weathercode[8] == 81 ||
    data.hourly.weathercode[8] == 82
  ) {
    daysBlok1Img.src = "./img/blokImg/rain.svg";
  } else if (
    data.hourly.weathercode[8] == 73 ||
    data.hourly.weathercode[8] == 75 ||
    data.hourly.weathercode[8] == 86 ||
    data.hourly.weathercode[8] == 71 ||
    data.hourly.weathercode[8] == 77 ||
    data.hourly.weathercode[8] == 85
  ) {
    daysBlok1Img.src = "./img/blokImg/snow.svg";
  } else if (
    data.hourly.weathercode[8] == 95 ||
    data.hourly.weathercode[8] == 96 ||
    data.hourly.weathercode[8] == 99
  ) {
    daysBlok1Img.src = "./img/blokImg/thunder-showers-day.svg";
  }
  daysBlok1Temp.innerHTML = `${Math.round(
    data.hourly.apparent_temperature[8]
  )}°`;
  daysBlok1Rain.innerHTML = `<i class="fa fa-tint"></i> ${data.hourly.precipitation_probability[8]}%`;
  //Peshin
  if (data.hourly.weathercode[13] === 0 || data.hourly.weathercode[13] === 1) {
    daysBlok2Img.src = "./img/blokImg/clear-day.svg";
  } else if (
    data.hourly.weathercode[13] === 2 ||
    data.hourly.weathercode[13] === 3
  ) {
    daysBlok2Img.src = "./img/blokImg/partly-cloudy-day.svg";
  } else if (
    data.hourly.weathercode[13] == 45 ||
    data.hourly.weathercode[13] == 48
  ) {
    daysBlok2Img.src = "./img/blokImg/fog.svg";
  } else if (data.hourly.weathercode[13] == 51) {
    daysBlok2Img.src = "./img/blokImg/showers-day.svg";
  } else if (data.hourly.weathercode[13] == 3) {
    daysBlok2Img.src = "./img/blokImg/cloudy.svg";
  } else if (
    data.hourly.weathercode[13] == 53 ||
    data.hourly.weathercode[13] == 55 ||
    data.hourly.weathercode[13] == 56 ||
    data.hourly.weathercode[13] == 57 ||
    data.hourly.weathercode[13] == 61 ||
    data.hourly.weathercode[13] == 63 ||
    data.hourly.weathercode[13] == 65 ||
    data.hourly.weathercode[13] == 66 ||
    data.hourly.weathercode[13] == 67 ||
    data.hourly.weathercode[13] == 80 ||
    data.hourly.weathercode[13] == 81 ||
    data.hourly.weathercode[13] == 82
  ) {
    daysBlok2Img.src = "./img/blokImg/rain.svg";
  } else if (
    data.hourly.weathercode[13] == 73 ||
    data.hourly.weathercode[13] == 75 ||
    data.hourly.weathercode[13] == 86 ||
    data.hourly.weathercode[13] == 71 ||
    data.hourly.weathercode[13] == 77 ||
    data.hourly.weathercode[13] == 85
  ) {
    daysBlok2Img.src = "./img/blokImg/snow.svg";
  } else if (
    data.hourly.weathercode[13] == 95 ||
    data.hourly.weathercode[13] == 96 ||
    data.hourly.weathercode[13] == 99
  ) {
    daysBlok2Img.src = "./img/blokImg/thunder-showers-day.svg";
  }
  daysBlok2Temp.innerHTML = `${Math.round(
    data.hourly.apparent_temperature[13]
  )}°`;
  daysBlok2Rain.innerHTML = `<i class="fa fa-tint"></i> ${data.hourly.precipitation_probability[13]}%`;
  //Kech
  if (data.hourly.weathercode[18] == 0) {
    daysBlok3Img.src = "./img/blokImg/clear-day.svg";
  } else if (data.hourly.weathercode[18] == 1) {
    daysBlok3Img.src = "./img/blokImg/clear-day.svg";
  } else if (data.hourly.weathercode[18] == 2) {
    daysBlok3Img.src = "./img/blokImg/partly-cloudy-day.svg";
  } else if (data.hourly.weathercode[18] == 51) {
    daysBlok3Img.src = "./img/blokImg/showers-day.svg";
  } else if (data.hourly.weathercode[18] == 3) {
    daysBlok3Img.src = "./img/blokImg/cloudy.svg";
  } else if (
    data.hourly.weathercode[18] == 45 ||
    data.hourly.weathercode[18] == 48
  ) {
    daysBlok3Img.src = "./img/blokImg/fog.svg";
  } else if (
    data.hourly.weathercode[18] == 53 ||
    data.hourly.weathercode[18] == 55 ||
    data.hourly.weathercode[18] == 56 ||
    data.hourly.weathercode[18] == 57 ||
    data.hourly.weathercode[18] == 61 ||
    data.hourly.weathercode[18] == 63 ||
    data.hourly.weathercode[18] == 65 ||
    data.hourly.weathercode[18] == 66 ||
    data.hourly.weathercode[18] == 67 ||
    data.hourly.weathercode[18] == 80 ||
    data.hourly.weathercode[18] == 81 ||
    data.hourly.weathercode[18] == 82
  ) {
    daysBlok3Img.src = "./img/blokImg/rain.svg";
  } else if (
    data.hourly.weathercode[18] == 73 ||
    data.hourly.weathercode[18] == 75 ||
    data.hourly.weathercode[18] == 86
  ) {
    daysBlok3Img.src = "./img/blokImg/snow.svg";
  } else if (
    data.hourly.weathercode[18] == 95 ||
    data.hourly.weathercode[18] == 96 ||
    data.hourly.weathercode[18] == 99
  ) {
    daysBlok3Img.src = "./img/blokImg/thunder-rain.svg";
  } else if (
    data.hourly.weathercode[18] == 71 ||
    data.hourly.weathercode[18] == 77 ||
    data.hourly.weathercode[18] == 85
  ) {
    daysBlok3Img.src = "./img/blokImg/snow.svg";
  }
  daysBlok3Temp.innerHTML = `${Math.round(
    data.hourly.apparent_temperature[18]
  )}°`;
  daysBlok3Rain.innerHTML = `<i class="fa fa-tint"></i> ${data.hourly.precipitation_probability[18]}%`;
  //Tun
  if (data.hourly.weathercode[22] == 0) {
    daysBlok4Img.src = "./img/blokImg/clear-night.svg";
  } else if (data.hourly.weathercode[22] == 1) {
    daysBlok4Img.src = "./img/blokImg/clear-night.svg";
  } else if (data.hourly.weathercode[22] == 2) {
    daysBlok4Img.src = "./img/blokImg/partly-cloudy-night.svg";
  } else if (data.hourly.weathercode[22] == 51) {
    daysBlok4Img.src = "./img/blokImg/showers-night.svg";
  } else if (data.hourly.weathercode[22] == 3) {
    daysBlok4Img.src = "./img/blokImg/cloudy.svg";
  } else if (
    data.hourly.weathercode[22] == 45 ||
    data.hourly.weathercode[22] == 48
  ) {
    daysBlok4Img.src = "./img/blokImg/fog.svg";
  } else if (
    data.hourly.weathercode[22] == 53 ||
    data.hourly.weathercode[22] == 55 ||
    data.hourly.weathercode[22] == 56 ||
    data.hourly.weathercode[22] == 57 ||
    data.hourly.weathercode[22] == 61 ||
    data.hourly.weathercode[22] == 63 ||
    data.hourly.weathercode[22] == 65 ||
    data.hourly.weathercode[22] == 66 ||
    data.hourly.weathercode[22] == 67 ||
    data.hourly.weathercode[22] == 80 ||
    data.hourly.weathercode[22] == 81 ||
    data.hourly.weathercode[22] == 82
  ) {
    daysBlok4Img.src = "./img/blokImg/rain.svg";
  } else if (
    data.hourly.weathercode[22] == 73 ||
    data.hourly.weathercode[22] == 75 ||
    data.hourly.weathercode[22] == 86
  ) {
    daysBlok4Img.src = "./img/blokImg/snow.svg";
  } else if (
    data.hourly.weathercode[22] == 95 ||
    data.hourly.weathercode[22] == 96 ||
    data.hourly.weathercode[22] == 99
  ) {
    daysBlok4Img.src = "./img/blokImg/thunder-rain.svg";
  } else if (
    data.hourly.weathercode[22] == 71 ||
    data.hourly.weathercode[22] == 77 ||
    data.hourly.weathercode[22] == 85
  ) {
    daysBlok4Img.src = "./img/blokImg/snow.svg";
  }
  daysBlok4Temp.innerHTML = `${Math.round(
    data.hourly.apparent_temperature[22]
  )}°`;
  daysBlok4Rain.innerHTML = `<i class="fa fa-tint"></i> ${data.hourly.precipitation_probability[22]}%`;
  //Haftalik
  //1kun
  mons1day.innerHTML = `Ertaga`;
  mons1rain.innerHTML = `<i class="fa fa-tint"></i> ${data.daily.precipitation_probability_max[1]}%`;
  if (data.daily.weathercode[1] === 0 || data.daily.weathercode[1] === 1) {
    mons1img.src = "./img/blokImg/clear-day.svg";
  } else if (
    data.daily.weathercode[1] === 2 ||
    data.daily.weathercode[1] === 3
  ) {
    mons1img.src = "./img/blokImg/partly-cloudy-day.svg";
  } else if (
    data.daily.weathercode[1] == 45 ||
    data.daily.weathercode[1] == 48
  ) {
    mons1img.src = "./img/blokImg/fog.svg";
  } else if (data.daily.weathercode[1] == 51) {
    mons1img.src = "./img/blokImg/showers-day.svg";
  } else if (data.daily.weathercode[1] == 3) {
    mons1img.src = "./img/blokImg/cloudy.svg";
  } else if (
    data.daily.weathercode[1] == 53 ||
    data.daily.weathercode[1] == 55 ||
    data.daily.weathercode[1] == 56 ||
    data.daily.weathercode[1] == 57 ||
    data.daily.weathercode[1] == 61 ||
    data.daily.weathercode[1] == 63 ||
    data.daily.weathercode[1] == 65 ||
    data.daily.weathercode[1] == 66 ||
    data.daily.weathercode[1] == 67 ||
    data.daily.weathercode[1] == 80 ||
    data.daily.weathercode[1] == 81 ||
    data.daily.weathercode[1] == 82
  ) {
    mons1img.src = "./img/blokImg/rain.svg";
  } else if (
    data.daily.weathercode[1] == 73 ||
    data.daily.weathercode[1] == 75 ||
    data.daily.weathercode[1] == 86 ||
    data.daily.weathercode[1] == 71 ||
    data.daily.weathercode[1] == 77 ||
    data.daily.weathercode[1] == 85
  ) {
    mons1img.src = "./img/blokImg/snow.svg";
  } else if (
    data.daily.weathercode[1] == 95 ||
    data.daily.weathercode[1] == 96 ||
    data.daily.weathercode[1] == 99
  ) {
    mons1img.src = "./img/blokImg/thunder-rain.svg";
  }
  mons1temp.innerHTML = `${Math.round(
    data.daily.temperature_2m_min[1]
  )}°/${Math.round(data.daily.temperature_2m_max[1])}°`;
  //2kun
  const now2 = new Date(data.daily.time[2]);
  const date2 = now2.getDate();
  const month2 = now2.getMonth();
  mons2day.innerHTML = `${date2}-${months[month2]}`;
  mons2rain.innerHTML = `<i class="fa fa-tint"></i> ${data.daily.precipitation_probability_max[2]}%`;
  if (data.daily.weathercode[2] === 0 || data.daily.weathercode[2] === 1) {
    mons2img.src = "./img/blokImg/clear-day.svg";
  } else if (
    data.daily.weathercode[2] === 2 ||
    data.daily.weathercode[2] === 3
  ) {
    mons2img.src = "./img/blokImg/partly-cloudy-day.svg";
  } else if (
    data.daily.weathercode[2] == 45 ||
    data.daily.weathercode[2] == 48
  ) {
    mons2img.src = "./img/blokImg/fog.svg";
  } else if (data.daily.weathercode[2] == 51) {
    mons2img.src = "./img/blokImg/showers-day.svg";
  } else if (data.daily.weathercode[2] == 3) {
    mons2img.src = "./img/blokImg/cloudy.svg";
  } else if (
    data.daily.weathercode[2] == 53 ||
    data.daily.weathercode[2] == 55 ||
    data.daily.weathercode[2] == 56 ||
    data.daily.weathercode[2] == 57 ||
    data.daily.weathercode[2] == 61 ||
    data.daily.weathercode[2] == 63 ||
    data.daily.weathercode[2] == 65 ||
    data.daily.weathercode[2] == 66 ||
    data.daily.weathercode[2] == 67 ||
    data.daily.weathercode[2] == 80 ||
    data.daily.weathercode[2] == 81 ||
    data.daily.weathercode[2] == 82
  ) {
    mons2img.src = "./img/blokImg/rain.svg";
  } else if (
    data.daily.weathercode[2] == 73 ||
    data.daily.weathercode[2] == 75 ||
    data.daily.weathercode[2] == 86 ||
    data.daily.weathercode[2] == 71 ||
    data.daily.weathercode[2] == 77 ||
    data.daily.weathercode[2] == 85
  ) {
    mons2img.src = "./img/blokImg/snow.svg";
  } else if (
    data.daily.weathercode[2] == 95 ||
    data.daily.weathercode[2] == 96 ||
    data.daily.weathercode[2] == 99
  ) {
    mons2img.src = "./img/blokImg/thunder-rain.svg";
  }
  mons2temp.innerHTML = `${Math.round(
    data.daily.temperature_2m_min[2]
  )}°/${Math.round(data.daily.temperature_2m_max[2])}°`;
  //3kun
  const now3 = new Date(data.daily.time[3]);
  const date3 = now3.getDate();
  const month3 = now3.getMonth();
  mons3day.innerHTML = `${date3}-${months[month3]}`;
  mons3rain.innerHTML = `<i class="fa fa-tint"></i> ${data.daily.precipitation_probability_max[3]}%`;
  if (data.daily.weathercode[3] === 0 || data.daily.weathercode[3] === 1) {
    mons3img.src = "./img/blokImg/clear-day.svg";
  } else if (
    data.daily.weathercode[3] === 2 ||
    data.daily.weathercode[3] === 3
  ) {
    mons3img.src = "./img/blokImg/partly-cloudy-day.svg";
  } else if (
    data.daily.weathercode[3] == 45 ||
    data.daily.weathercode[3] == 48
  ) {
    mons3img.src = "./img/blokImg/fog.svg";
  } else if (data.daily.weathercode[3] == 51) {
    mons3img.src = "./img/blokImg/showers-day.svg";
  } else if (data.daily.weathercode[3] == 3) {
    mons3img.src = "./img/blokImg/cloudy.svg";
  } else if (
    data.daily.weathercode[3] == 53 ||
    data.daily.weathercode[3] == 55 ||
    data.daily.weathercode[3] == 56 ||
    data.daily.weathercode[3] == 57 ||
    data.daily.weathercode[3] == 61 ||
    data.daily.weathercode[3] == 63 ||
    data.daily.weathercode[3] == 65 ||
    data.daily.weathercode[3] == 66 ||
    data.daily.weathercode[3] == 67 ||
    data.daily.weathercode[3] == 80 ||
    data.daily.weathercode[3] == 81 ||
    data.daily.weathercode[3] == 82
  ) {
    mons3img.src = "./img/blokImg/rain.svg";
  } else if (
    data.daily.weathercode[3] == 73 ||
    data.daily.weathercode[3] == 75 ||
    data.daily.weathercode[3] == 86 ||
    data.daily.weathercode[3] == 71 ||
    data.daily.weathercode[3] == 77 ||
    data.daily.weathercode[3] == 85
  ) {
    mons3img.src = "./img/blokImg/snow.svg";
  } else if (
    data.daily.weathercode[3] == 95 ||
    data.daily.weathercode[3] == 96 ||
    data.daily.weathercode[3] == 99
  ) {
    mons3img.src = "./img/blokImg/thunder-rain.svg";
  }
  mons3temp.innerHTML = `${Math.round(
    data.daily.temperature_2m_min[3]
  )}°/${Math.round(data.daily.temperature_2m_max[3])}°`;
  //4kun
  const now4 = new Date(data.daily.time[4]);
  const date4 = now4.getDate();
  const month4 = now4.getMonth();
  mons4day.innerHTML = `${date4}-${months[month4]}`;
  mons4rain.innerHTML = `<i class="fa fa-tint"></i> ${data.daily.precipitation_probability_max[4]}%`;
  if (data.daily.weathercode[4] === 0 || data.daily.weathercode[4] === 1) {
    mons4img.src = "./img/blokImg/clear-day.svg";
  } else if (
    data.daily.weathercode[4] === 2 ||
    data.daily.weathercode[4] === 3
  ) {
    mons4img.src = "./img/blokImg/partly-cloudy-day.svg";
  } else if (
    data.daily.weathercode[4] == 45 ||
    data.daily.weathercode[4] == 48
  ) {
    mons4img.src = "./img/blokImg/fog.svg";
  } else if (data.daily.weathercode[4] == 51) {
    mons4img.src = "./img/blokImg/showers-day.svg";
  } else if (data.daily.weathercode[4] == 3) {
    mons4img.src = "./img/blokImg/cloudy.svg";
  } else if (
    data.daily.weathercode[4] == 53 ||
    data.daily.weathercode[4] == 55 ||
    data.daily.weathercode[4] == 56 ||
    data.daily.weathercode[4] == 57 ||
    data.daily.weathercode[4] == 61 ||
    data.daily.weathercode[4] == 63 ||
    data.daily.weathercode[4] == 65 ||
    data.daily.weathercode[4] == 66 ||
    data.daily.weathercode[4] == 67 ||
    data.daily.weathercode[4] == 80 ||
    data.daily.weathercode[4] == 81 ||
    data.daily.weathercode[4] == 82
  ) {
    mons4img.src = "./img/blokImg/rain.svg";
  } else if (
    data.daily.weathercode[4] == 73 ||
    data.daily.weathercode[4] == 75 ||
    data.daily.weathercode[4] == 86 ||
    data.daily.weathercode[4] == 71 ||
    data.daily.weathercode[4] == 77 ||
    data.daily.weathercode[4] == 85
  ) {
    mons4img.src = "./img/blokImg/snow.svg";
  } else if (
    data.daily.weathercode[4] == 95 ||
    data.daily.weathercode[4] == 96 ||
    data.daily.weathercode[4] == 99
  ) {
    mons4img.src = "./img/blokImg/thunder-rain.svg";
  }
  mons4temp.innerHTML = `${Math.round(
    data.daily.temperature_2m_min[4]
  )}°/${Math.round(data.daily.temperature_2m_max[4])}°`;
  //5kun
  const now5 = new Date(data.daily.time[5]);
  const date5 = now5.getDate();
  const month5 = now5.getMonth();
  mons5day.innerHTML = `${date5}-${months[month5]}`;
  mons5rain.innerHTML = `<i class="fa fa-tint"></i> ${data.daily.precipitation_probability_max[5]}%`;
  if (data.daily.weathercode[5] === 0 || data.daily.weathercode[5] === 1) {
    mons5img.src = "./img/blokImg/clear-day.svg";
  } else if (
    data.daily.weathercode[5] === 2 ||
    data.daily.weathercode[5] === 3
  ) {
    mons5img.src = "./img/blokImg/partly-cloudy-day.svg";
  } else if (
    data.daily.weathercode[5] == 45 ||
    data.daily.weathercode[5] == 48
  ) {
    mons5img.src = "./img/blokImg/fog.svg";
  } else if (data.daily.weathercode[5] == 51) {
    mons5img.src = "./img/blokImg/showers-day.svg";
  } else if (data.daily.weathercode[5] == 3) {
    mons5img.src = "./img/blokImg/cloudy.svg";
  } else if (
    data.daily.weathercode[5] == 53 ||
    data.daily.weathercode[5] == 55 ||
    data.daily.weathercode[5] == 56 ||
    data.daily.weathercode[5] == 57 ||
    data.daily.weathercode[5] == 61 ||
    data.daily.weathercode[5] == 63 ||
    data.daily.weathercode[5] == 65 ||
    data.daily.weathercode[5] == 66 ||
    data.daily.weathercode[5] == 67 ||
    data.daily.weathercode[5] == 80 ||
    data.daily.weathercode[5] == 81 ||
    data.daily.weathercode[5] == 82
  ) {
    mons5img.src = "./img/blokImg/rain.svg";
  } else if (
    data.daily.weathercode[5] == 73 ||
    data.daily.weathercode[5] == 75 ||
    data.daily.weathercode[5] == 86 ||
    data.daily.weathercode[5] == 71 ||
    data.daily.weathercode[5] == 77 ||
    data.daily.weathercode[5] == 85
  ) {
    mons5img.src = "./img/blokImg/snow.svg";
  } else if (
    data.daily.weathercode[5] == 95 ||
    data.daily.weathercode[5] == 96 ||
    data.daily.weathercode[5] == 99
  ) {
    mons5img.src = "./img/blokImg/thunder-rain.svg";
  }
  mons5temp.innerHTML = `${Math.round(
    data.daily.temperature_2m_min[5]
  )}°/${Math.round(data.daily.temperature_2m_max[5])}°`;
  //6kun
  const now6 = new Date(data.daily.time[6]);
  const date6 = now6.getDate();
  const month6 = now6.getMonth();
  mons6day.innerHTML = `${date6}-${months[month6]}`;
  mons6rain.innerHTML = `<i class="fa fa-tint"></i> ${data.daily.precipitation_probability_max[6]}%`;
  if (data.daily.weathercode[6] === 0 || data.daily.weathercode[6] === 1) {
    mons6img.src = "./img/blokImg/clear-day.svg";
  } else if (
    data.daily.weathercode[6] === 2 ||
    data.daily.weathercode[6] === 3
  ) {
    mons6img.src = "./img/blokImg/partly-cloudy-day.svg";
  } else if (
    data.daily.weathercode[6] == 45 ||
    data.daily.weathercode[6] == 48
  ) {
    mons6img.src = "./img/blokImg/fog.svg";
  } else if (data.daily.weathercode[6] == 51) {
    mons6img.src = "./img/blokImg/showers-day.svg";
  } else if (data.daily.weathercode[6] == 3) {
    mons6img.src = "./img/blokImg/cloudy.svg";
  } else if (
    data.daily.weathercode[6] == 53 ||
    data.daily.weathercode[6] == 55 ||
    data.daily.weathercode[6] == 56 ||
    data.daily.weathercode[6] == 57 ||
    data.daily.weathercode[6] == 61 ||
    data.daily.weathercode[6] == 63 ||
    data.daily.weathercode[6] == 65 ||
    data.daily.weathercode[6] == 66 ||
    data.daily.weathercode[6] == 67 ||
    data.daily.weathercode[6] == 80 ||
    data.daily.weathercode[6] == 81 ||
    data.daily.weathercode[6] == 82
  ) {
    mons6img.src = "./img/blokImg/rain.svg";
  } else if (
    data.daily.weathercode[6] == 73 ||
    data.daily.weathercode[6] == 75 ||
    data.daily.weathercode[6] == 86 ||
    data.daily.weathercode[6] == 71 ||
    data.daily.weathercode[6] == 77 ||
    data.daily.weathercode[6] == 85
  ) {
    mons6img.src = "./img/blokImg/snow.svg";
  } else if (
    data.daily.weathercode[6] == 95 ||
    data.daily.weathercode[6] == 96 ||
    data.daily.weathercode[6] == 99
  ) {
    mons6img.src = "./img/blokImg/thunder-rain.svg";
  }
  mons6temp.innerHTML = `${Math.round(
    data.daily.temperature_2m_min[6]
  )}°/${Math.round(data.daily.temperature_2m_max[6])}°`;
  //7kun
  const now7 = new Date(data.daily.time[7]);
  const date7 = now7.getDate();
  const month7 = now7.getMonth();
  mons7day.innerHTML = `${date7}-${months[month7]}`;
  mons7rain.innerHTML = `<i class="fa fa-tint"></i> ${data.daily.precipitation_probability_max[7]}%`;
  if (data.daily.weathercode[7] === 0 || data.daily.weathercode[7] === 1) {
    mons7img.src = "./img/blokImg/clear-day.svg";
  } else if (
    data.daily.weathercode[7] === 2 ||
    data.daily.weathercode[7] === 3
  ) {
    mons7img.src = "./img/blokImg/partly-cloudy-day.svg";
  } else if (
    data.daily.weathercode[7] == 45 ||
    data.daily.weathercode[7] == 48
  ) {
    mons7img.src = "./img/blokImg/fog.svg";
  } else if (data.daily.weathercode[7] == 51) {
    mons7img.src = "./img/blokImg/showers-day.svg";
  } else if (data.daily.weathercode[7] == 3) {
    mons7img.src = "./img/blokImg/cloudy.svg";
  } else if (
    data.daily.weathercode[7] == 53 ||
    data.daily.weathercode[7] == 55 ||
    data.daily.weathercode[7] == 56 ||
    data.daily.weathercode[7] == 57 ||
    data.daily.weathercode[7] == 61 ||
    data.daily.weathercode[7] == 63 ||
    data.daily.weathercode[7] == 65 ||
    data.daily.weathercode[7] == 66 ||
    data.daily.weathercode[7] == 67 ||
    data.daily.weathercode[7] == 80 ||
    data.daily.weathercode[7] == 81 ||
    data.daily.weathercode[7] == 82
  ) {
    mons7img.src = "./img/blokImg/rain.svg";
  } else if (
    data.daily.weathercode[7] == 73 ||
    data.daily.weathercode[7] == 75 ||
    data.daily.weathercode[7] == 86 ||
    data.daily.weathercode[7] == 71 ||
    data.daily.weathercode[7] == 77 ||
    data.daily.weathercode[7] == 85
  ) {
    mons7img.src = "./img/blokImg/snow.svg";
  } else if (
    data.daily.weathercode[7] == 95 ||
    data.daily.weathercode[7] == 96 ||
    data.daily.weathercode[7] == 99
  ) {
    mons7img.src = "./img/blokImg/thunder-rain.svg";
  }
  mons7temp.innerHTML = `${Math.round(
    data.daily.temperature_2m_min[7]
  )}°/${Math.round(data.daily.temperature_2m_max[7])}°`;
};
