
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Генерируем случайное число от 1 до 100, которое нужно угадать
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Устанавливаем количество попыток
const maxAttempts = 5;
let attempts = 0;

// Функция для начала игры
function startGame() {
  console.log("Добро пожаловать в игру 'Угадай число'!");
  console.log("Я загадал число от 1 до 100. Попробуйте угадать!");
  playRound();
}

// Функция для выполнения одной попытки
function playRound() {
  rl.question("Введите вашу догадку: ", (userInput) => {
    const userGuess = parseInt(userInput);

    if (isNaN(userGuess)) {
      console.log("Пожалуйста, введите число.");
      playRound();
    } else {
      attempts++;

      if (userGuess === targetNumber) {
        console.log(`Поздравляю! Вы угадали число ${targetNumber} за ${attempts} попыток!`);
        rl.close();
      } else if (attempts === maxAttempts) {
        console.log(`Вы проиграли! Загаданное число было ${targetNumber}.`);
        rl.close();
      } else {
        const hint = userGuess < targetNumber ? "больше" : "меньше";
        console.log(`Неправильно! Загаданное число ${hint} вашей догадки.`);
        playRound();
      }
    }
  });
}

// Начинаем игру
startGame();

