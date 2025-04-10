let numberInput;
let title;
let secretNumber;

// функция для проверки, является ли введенное значение числом
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
const checkCancel = (input) => {
    return input === null; //вернёт true
}

//функция генерации рандомного числа в диапазоне
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//функция угадывания числа
const guessNumber = () => {
    do {
        numberInput = prompt("Введи число от 1 до 100");

        if (checkCancel(numberInput)) {
            alert("Игра окончена");
            return;
        }

        if (!validateInput(numberInput)) continue;

        numberInput = parseFloat(numberInput);

        if (numberInput === secretNumber) {
            alert("Ты угадал!");
            break;
        } else {
            alert("попробуй еще раз!");
        }

    } while (true);

}

//основная логика игры
const asking = () => {
    title = confirm('Давай сыграем в игру "Загадывание случайного числа от 1 до 100"? Я загадываю, а ты должен угадать');

    // если была нажата кнопка "отмена" в первом prompt
    if (!title) {
        alert("Ты отказался от игры. Может быть, в следующий раз!");
        return;
    }

    secretNumber = randomNumber(1, 100);
    console.log(secretNumber); //для проверка загаданного числа в конлсоли

    guessNumber();
}
asking();