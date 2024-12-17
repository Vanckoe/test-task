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
  let num1 = prompt(`Хм интересно... А сколько у вас ${fruit}`);
  let num2 = prompt(` А сколько вы еще ${fruit} купите?`);
  num1 = Number(num1);
  num2 = Number(num2);
  let fruitSum = num1 + num2;
  if (isNaN(fruitSum)) {
    alert("Странный ответ, вожак вас не понял ;/");
    console.log("Ваш бред никто не понял, попробуйте еще раз");
  } else {
    alert("ура! у нас будет " + fruitSum + " " + fruit);
    console.log(
      "Вам нужно доставить " + fruitSum + " " + fruit + " странному вожаку"
    );
  }
}
// что то я заигрался...
