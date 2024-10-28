function calculate() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let result = document.getElementById('result');
    let inform = document.getElementById('inform');
    
    inform.value = '';
    inform.classList.add('red')

    // set up to inform notification
    let hstring = 'Giá trị nhập ở ô ';
    let tstring = ' không phải là số';

    let num1Str = document.createElement('span');
    num1Str.classList.add('red_italic');
    num1Str.textContent = 'Số thứ nhất';

    let num2Str = document.createElement('span');
    num2Str.classList.add('red_italic');
    num2Str.textContent = 'Số thứ hai';

    // calculate
    if(isNaN(num1)) {
        inform.innerHTML = hstring + num1Str.outerHTML + tstring;
        result.value='';
        return;
    }

    if(isNaN(num2)) {
        inform.innerHTML = hstring + num2Str.outerHTML + tstring;
        result.value='';
        return;
    }

    let operation = document.querySelector('input[type="radio"]:checked').value;

    switch(operation) {
        case 'add':
            result.value = num1 + num2;
            break;
        case 'subtract':
            result.value = num1 - num2;
            break;
        case 'multiply':
            result.value = num1 * num2;
            break;
        case 'divide':
            if(num2 == 0) {
                inform.value = 'Không thể chia cho 0';
                result.value = '';
                return;
            } else {
                result.value = num1 / num2;
                break;
            }
    }
}