const defultResult = 0;

let currentResult = defultResult;

function add() {
  const result = currentResult + userInput.value;
  outputResult(currentResult, '');
}

addBtn.addEventListener('click',add);


