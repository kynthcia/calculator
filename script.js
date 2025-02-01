let calculated = false;

        function appendValue(value) {
            let display = document.getElementById("display");
            if (calculated) {
                display.value = value;
                calculated = false;
            } else {
                if (display.value === "" && ["+", "*", "/", "."].includes(value)) {
                    return;
                }
                display.value += value;
            }
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
