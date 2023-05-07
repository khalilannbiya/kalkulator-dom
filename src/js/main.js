function calculate(params) {
  const result = document.querySelector(".result");
  const firstNumber = parseInt(document.getElementById("firstNumber").value);
  const secondNumber = parseInt(document.getElementById("secondNumber").value);

  if (!firstNumber || !secondNumber) {
    alert("Jangan Ada yang kosong boy");
  }

  let resultNumber = 0;

  if (params === "add") {
    resultNumber = firstNumber + secondNumber;
  } else if (params === "subtract") {
    resultNumber = firstNumber - secondNumber;
  } else if (params === "multiply") {
    resultNumber = firstNumber * secondNumber;
  } else {
    resultNumber = firstNumber / secondNumber;
  }

  result.textContent = resultNumber;
}

function reset() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  document.querySelector(".result").textContent = 0;
}
