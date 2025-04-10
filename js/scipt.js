let numberInput;
let title;
let secretNumber;
let guessCount;
let playAgain; //кол-во попыток

// функция для проверки, является ли значение числом
const isNumber = (num) => {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

// функция для вывода ошибок при неправильном вводе
const validateInput = (input) => {
    if (!isNumber(input)) {
        alert("Пожалуйста, введи число.");
        return false;
    }
    if (input > 100) {
        alert("Ты ввел число больше 100, попробуй ещё раз");
        return false;
    }
    if (input < 1) {
        alert("Ты ввел число меньше 1, попробуй ещё раз");
        return false;
    }
    return true;
}

//функция на проверку нажатия кнопки "отмена" в prompt 
const checkCancel = (input) => input === null; //вернёт true

//функция генерации рандомного числа в диапазоне
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//ф-ция с попытками угадывания числа
const updateGuessCount = () => {
    guessCount--;

    if (guessCount <= 0) {
        playAgain = confirm('Попытки закончились, хотите сыграть еще?');
        if (playAgain) {
            startGame();
        } else {
            alert("Ты отказался от игры. Может быть, в следующий раз!");
        }
        return true; // игра останавливается
    }
    return false; // игра продолжается
}

//ф-ция проверки угадывания числа
const checkGuess = (numberInput) => {
    if (numberInput === secretNumber) {
        playAgain = confirm("Поздравляю, ты угадал!!! Хотел бы сыграть еще?");
        if (playAgain) {
            startGame();
            return true;
        }
        return true; // игра остановется 
    }

    const gameEnded = updateGuessCount(); // обновляем кол-во попыток

    if (!gameEnded) { // если игра продолжается
        if (numberInput > secretNumber) {
            alert(`Загаданное число меньше, осталось попыток: ${guessCount}`);
        } else if (numberInput < secretNumber) {
            alert(`Загаданное число больше, осталось попыток: ${guessCount}`);
        }
        asking(); // игра продолжается
    }

}

//запрашивает у пользователя ввод числа и проверяет его
const asking = () => {
    numberInput = prompt("Введи число от 1 до 100");

    if (checkCancel(numberInput)) {
        alert("Игра окончена");
        return true;
    }

    if (!validateInput(numberInput)) {
        asking();
        return true;
    }

    numberInput = parseFloat(numberInput);

    checkGuess(numberInput);
}


//основная логика игры
const startGame = () => {
    title = confirm('Давай сыграем в игру "Загадывание случайного числа от 1 до 100"? Я загадываю, а ты должен угадать');

    // если была нажата кнопка "отмена" в первом prompt
    if (!title) {
        alert("Ты отказался от игры. Может быть, в следующий раз!");
        return;
    }

    secretNumber = randomNumber(1, 100);
    console.log(secretNumber); //для проверки загаданного числа в консоли

    guessCount = 3;

    asking();
}

startGame();