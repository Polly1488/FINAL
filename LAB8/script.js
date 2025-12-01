// Показує діалогове вікно для вводу імені користувача; повертає рядок (string) або null, якщо користувач натиснув "Скасувати".
let userName = prompt("Enter your name:");

// Знаходимо елемент HTML з id="userName" і записуємо в його внутрішній текст ім'я користувача.
// Якщо userName порожній рядок або null, використовується "User" (оператор || повертає правий операнд, якщо лівий - falsy).
document.getElementById("userName").innerText = userName || "User";

// Ініціалізація змінної для рахунку користувача. Тип — число (Number). Початкове значення 0.
let userScore = 0;

// Ініціалізація змінної для рахунку комп'ютера. Тип — число (Number). Початкове значення 0.
let computerScore = 0;

// Додаємо обробник події "click" до кнопки з id="generate".
// Коли користувач натисне кнопку — виконається функція-обробник (стрілкова функція).
document.getElementById("generate").addEventListener("click", () => {
  // Генеруємо випадкове ціле число від 1 до 10 для користувача.
  // Math.random() дає значення в інтервалі [0, 1); множимо на 10 -> [0,10), Math.floor -> 0..9; +1 -> 1..10.
  let userNum = Math.floor(Math.random() * 10) + 1;

  // Генеруємо випадкове ціле число від 1 до 10 для комп'ютера — такий самий механізм як для userNum.
  let compNum = Math.floor(Math.random() * 10) + 1;

  // Відображаємо згенероване число користувача у DOM (елемент з id="userNumber").
  // innerText вставляє текстовий вміст у вказаний елемент.
  document.getElementById("userNumber").innerText = userNum;

  // Відображаємо згенероване число комп'ютера у DOM (елемент з id="computerNumber").
  document.getElementById("computerNumber").innerText = compNum;

  // Порівнюємо числа: якщо число користувача більше — користувач виграє цей раунд.
  if (userNum > compNum) {
    // Збільшуємо змінну userScore на 1 (модифікуємо стан гри).
    userScore++;
  // Якщо число комп'ютера більше — комп'ютер виграє цей раунд.
  } else if (compNum > userNum) {
    // Збільшуємо змінну computerScore на 1.
    computerScore++;
  }
  // Якщо числа рівні — нічого не змінюємо (нічия), тому немає іншого блоку.

  // Оновлюємо показник рахунку користувача в DOM: відображаємо поточне значення userScore.
  document.getElementById("userScore").innerText = userScore;

  // Оновлюємо показник рахунку комп'ютера в DOM: відображаємо поточне значення computerScore.
  document.getElementById("computerScore").innerText = computerScore;

  // Перевірка умови перемоги: якщо користувач набрав 3 очки — показуємо alert і скидаємо гру.
  if (userScore === 3) {
    // Викликаємо браузерне повідомлення з ім'ям користувача (шаблонний літерал для підстановки userName).
    alert(`${userName} wins!`);
    // Викликаємо функцію, що скидає стан гри до початкового.
    resetGame();
  // Якщо комп'ютер набрав 3 очки — повідомляємо про перемогу комп'ютера і скидаємо гру.
  } else if (computerScore === 3) {
    alert("Computer wins!");
    resetGame();
  }
});

// Оголошення функції resetGame — при виклику повертає гру до початкового стану.
function resetGame() {
  // Скидаємо внутрішні змінні рахунку в JS.
  userScore = 0;
  computerScore = 0;

  // Оновлюємо відображення рахунку у DOM — ставимо 0 для обох гравців.
  document.getElementById("userScore").innerText = 0;
  document.getElementById("computerScore").innerText = 0;

  // Очищаємо показані останні згенеровані числа, ставлячи дефіс як індикатор відсутності числа.
  document.getElementById("userNumber").innerText = "-";
  document.getElementById("computerNumber").innerText = "-";
}
