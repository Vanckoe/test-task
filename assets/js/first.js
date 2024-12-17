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

// что то я заигрался...
