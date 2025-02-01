let calculated = false;

function appendValue(value) {
    let display = document.getElementById("display");
    let operators = ["+", "-", "*", "/"];
    
    if (calculated) {
        if (operators.includes(value)) {
            calculated = false;
        } else {
            display.value = "";
        }
    }
    
    if (display.value === "" && operators.includes(value)) {
        return;
    }
    
    let lastChar = display.value.slice(-1);
    if (operators.includes(lastChar) && operators.includes(value)) {
        display.value = display.value.slice(0, -1) + value;
        return;
    }
    
    display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
  calculated = false;
}

function deleteLast() {
  document.getElementById("display").value = display.value.slice(0, -1);
}

function calculateResult() {
  let display = document.getElementById("display");
  if (display.value.trim() === "") {
    alert("Lütfen değer giriniz");
    return;
  }
  try {
    display.value = eval(display.value);
    calculated = true;
  } catch (error) {
    alert("Geçersiz işlem");
  }
}
