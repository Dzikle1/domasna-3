
// op e string, i numOne i numTwo se brojki
const calculator = (op, numOne, numTwo) => {
  switch (op) {
    case "zbir":
      return numOne + numTwo;
     case "odzemanje":
        return numOne - numTwo;
     case "delenje":
        return numOne % numTwo;
     case "mnozenje":
        return numOne * numTwo       
    // Dodadete gi drugite slucai
    default: // se drugo ili pak else
      return 0;
  }
};

const calculatorTwo = (op, numOne, numTwo) => {
  if ( op ==="zbir"){
    return numOne + numTwo;
  }else if (op === "odzemanje"){
    return numOne - numTwo;
  }else if (op === "mnozenje"){
    return numOne * numTwo;
  }else if (op === "delenje"){
    return numOne % numTwo;
  }else {
    return 0;
  };
}


console.log(calculatorTwo("zbir", 1, 2));

// Zadaca
// 1. Zavrsete go calculator so switch so opcii za mnozenje, delenje, modulo (%), razlika
// 2. Napravete nov so if/else
