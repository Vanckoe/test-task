function calculate() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const x = parseFloat(document.getElementById("x").value);

  if (isNaN(a) || isNaN(b) || isNaN(x)) {
    alert("Заполните все поля!");
    return;
  }

  const y = a * x + b;

  document.getElementById("result").innerText = `Результат: y = ${y}`;
}

// Строка в число
let str = "123";
let numFromString = Number(str);
console.log("Число из строки:", numFromString, "Тип:", typeof numFromString);

// Число в строку
let num = 456;
let strFromNumber = String(num);
console.log("Строка из числа:", strFromNumber, "Тип:", typeof strFromNumber);

console.log("--------------");
// let fruitCount = 5;
// const fruitExist = false;
// const warms = null;

// if (fruitExist == true) {
//   console.log(fruit, "у нас целых ", fruitCount, " штук");
// } else {
//   console.log("У нас нет яблок(");
// }
const fruit = prompt("Какой у вас фрукт в кармане?");
const iHateApples = [
  "яблоко",
  "Яблоко",
  "ЯБЛОКО",
  "Apple",
  "APPLE",
  "aple",
  "apple",
];
console.log("вы выбрали", fruit);

if (fruit == "") {
  console.log("Вы проигнорировали вожака, тем самым пошатнули его авторитет");
} else if (iHateApples.includes(fruit)) {
  alert("Блин, не люблю яблоко, в конец очереди!");
  console.log("Вас отправили в конец очереди, попробуйте в следующий раз...");
} else {
  let num1 = prompt(`Хм интересно... А сколько у вас ${fruit}?`);
  let num2 = prompt(`А сколько вы еще ${fruit} купите?`);

  num1 = Number(num1);
  num2 = Number(num2);

  let fruitSum = num1 + num2;

  if (isNaN(fruitSum)) {
    alert("Странный ответ, вожак вас не понял ;/");
    console.log("Ваш бред никто не понял, попробуйте еще раз");
  } else {
    if (fruitSum <= 10) {
      alert(fruitSum + " " + fruit + " - мало, нужно больше!");
      console.log("Вас отправли в конец очереди");
    } else {
      if (fruitSum > 15 && fruitSum < 20) {
        console.log("У вас достаточно фруктов, чтобы вожак был доволен!");
      } else if (fruitSum >= 20) {
        console.log("Очень много! Вожак, наверное, слишком много просит...");
        alert("ура! у нас будет " + fruitSum + " " + fruit);
      } else {
        console.log("Маловато но нормально");
      }

      if (fruitSum == 10) {
        console.log("У вас ровно 10 фруктов! О, чудо, магия чисел!");
      } else if (fruitSum === 10) {
        console.log("Жесткая проверка! У вас точно 10!");
      }

      if (fruitSum % 2 === 0 && fruitSum !== 10) {
        console.log(
          "Сумма фруктов четная и не равна 10. Суеверный вожак доволен, Всё по плану."
        );
      }

      let divisionResult = fruitSum / 3;
      let remainder = fruitSum % 3;
      console.log("---------------------");
      console.log("Результат деления суммы фруктов на 3:", divisionResult);
      console.log("Остаток от деления на 3:", remainder);
    }
  }
}

const month = prompt("Введите номер месяца (от 1 до 12):");

switch (parseInt(month)) {
  case 1:
  case 2:
  case 12:
    alert("Зима");
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Лето");
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    alert("Осень");
    console.log("Осень");
    break;
  default:
    alert("Ошибка: введите число от 1 до 12.");
    console.log("Ошибка: введите число от 1 до 12.");
}

function greet() {
  console.log("Привет, мир!");
}
greet();

console.log("___________________");

function sayHello(name) {
  console.log(`Привет, ${name}!`);
}
sayHello("Таяна");
sayHello("Олжас");

console.log("___________________");

function sum(a, b) {
  return a + b;
}
console.log(sum(5, 10));

console.log("___________________");

function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));

console.log("___________________");

function max(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "Числа равны";
  }
}
console.log(max(10, 5));
console.log(max(3, 3));

console.log("___________________");

function getInitials(firstName, lastName) {
  return `${firstName[0]}.${lastName[0]}.`;
}
console.log(getInitials("Алиса", "Боброва"));

console.log("___________________");

function square(number) {
  return number * number;
}
function cube(number) {
  return square(number) * number;
}
console.log(cube(3));

console.log("___________________");

const sumArrow = (a, b) => a + b;
console.log(sumArrow(5, 7));

console.log("___________________");

function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(getFactorial(5));
console.log(getFactorial(0));
