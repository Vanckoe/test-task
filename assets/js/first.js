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
