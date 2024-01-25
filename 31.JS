let input = document.getElementById('js-input')

function calculate(value) {
    input.value  +=value
}

function calculation() {
    input.value = (eval(input.value))
}

function clearDisplay() {
    input.value = '';
}

function calc(event) {
if (event.key === 'Enter') {
        calculation()
    }
}

