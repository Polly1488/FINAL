// Отримуємо елемент, у якому буде відображатися ім'я користувача.
// document.getElementById — метод доступу до елемента за його id.
// "userName" — значення атрибуту id у HTML.
const userNameEl = document.getElementById("userName");

// Отримуємо елемент для показу рахунку користувача.
const userScoreEl = document.getElementById("userScore");

// Елемент для рахунку комп'ютера.
const compScoreEl = document.getElementById("compScore");

// Елемент <img>, де буде показана карта користувача.
const userCardEl = document.getElementById("userCard");

// Елемент <img> для карти комп'ютера.
const compCardEl = document.getElementById("compCard");

// Елемент, що показує номер поточного раунду.
const roundEl = document.getElementById("round");

// Кнопка, яка генерує карти.
const generateBtn = document.getElementById("generate");

// Елемент для виводу підсумкового результату.
const resultEl = document.getElementById("result");


// prompt — виводить модальне вікно для введення тексту.
// "Введіть ваше ім'я:" — текст підказки.
// playerName — змінна, у якій збережемо введене ім’я.
let playerName = prompt("Введіть ваше ім'я:");

// !playerName — перевірка на порожній рядок, null або undefined.
// Якщо ім’я не введено, задаємо стандартне "User".
if (!playerName) playerName = "User";

// .textContent — властивість, яка замінює текст всередині HTML-елемента.
// userNameEl — куди ми вставляємо ім’я.
userNameEl.textContent = playerName;


// Масив карт зі значеннями.
// cards — масив об’єктів {img, value}.
// img — шлях до картинки карти.
// value — числове значення карти.
const cards = [
    {img: "img/6.png", value: 6},
    {img: "img/7.png", value: 7},
    {img: "img/8.png", value: 8},
    {img: "img/9.png", value: 9},
    {img: "img/10.png", value: 10},
    {img: "img/jack.png", value: 2},
    {img: "img/queen.png", value: 3},
    {img: "img/king.png", value: 4},
    {img: "img/ace.png", value: 11}
];


// round — номер раунду, починається з 1.
let round = 1;

// userScore — загальна сума балів користувача.
let userScore = 0;

// compScore — загальна сума балів комп'ютера.
let compScore = 0;


// Призначаємо обробник події натискання кнопки.
// onclick — властивість, що зберігає функцію, яка запускається при кліку.
generateBtn.onclick = function () {

    // Вибір випадкової карти для користувача.
    // Math.random() — випадкове число 0..1.
    // * cards.length — масштабування до довжини масиву.
    // Math.floor — округлення вниз.
    // cards[...] — доступ до елемента масиву.
    let userCard = cards[Math.floor(Math.random() * cards.length)];

    // Така ж операція для комп'ютера.
    let compCard = cards[Math.floor(Math.random() * cards.length)];

    // Встановлюємо шлях до картинки карти користувача.
    // .src — атрибут <img>, шлях до зображення.
    userCardEl.src = userCard.img;

    // Встановлюємо шлях до картинки карти комп'ютера.
    compCardEl.src = compCard.img;

    // Додаємо значення карти користувача до загального рахунку.
    // += — збільшення змінної на певне значення.
    userScore += userCard.value;

    // Додаємо значення карти комп'ютера.
    compScore += compCard.value;

    // Оновлюємо текст у елементі рахунку користувача.
    userScoreEl.textContent = userScore;

    // Оновлюємо текст у елементі рахунку комп'ютера.
    compScoreEl.textContent = compScore;

    // Порівнюємо значення карт для визначення підсвічування.
    if (userCard.value > compCard.value) {
        // Зелений фон — перемога користувача.
        userScoreEl.style.background = "#b2ffb2";
        // Червоний фон — програш комп'ютера.
        compScoreEl.style.background = "#ffb2b2";

    } else if (userCard.value < compCard.value) {
        // Перемога комп'ютера — зелене підсвічування йому.
        compScoreEl.style.background = "#b2ffb2";
        // Червоний фон користувачу.
        userScoreEl.style.background = "#ffb2b2";

    } else {
        // Нічия — обидва отримують жовтий фон.
        userScoreEl.style.background = "#ffffb2";
        compScoreEl.style.background = "#ffffb2";
    }

    // Оновлюємо інформацію про поточний раунд.
    // `...${round}...` — шаблонний рядок.
    roundEl.textContent = `Спроба ${round} з 3`;

    // Перевіряємо завершення гри — третій раунд.
    if (round === 3) {

        // Робимо кнопку неактивною.
        generateBtn.disabled = true;

        // Змінюємо фон кнопки, щоб виглядала вимкненою.
        generateBtn.style.background = "gray";

        // Порівнюємо загальні рахунки.
        if (userScore > compScore) {
            // Вставляємо ім’я користувача у текст результату.
            resultEl.textContent = `${playerName} виграв! `;
        } else if (userScore < compScore) {
            resultEl.textContent = "Комп'ютер виграв";
        } else {
            resultEl.textContent = "Нічия!";
        }
    }

    // Переходимо до наступного раунду.
    // ++ — збільшує значення змінної на 1.
    round++;
};