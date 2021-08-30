function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        console.log(pin);
        return pin;
    }
    else {
        return getPin();
    }
}
document.getElementById('pin-generator-btn').addEventListener('click', function () {
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-pin').value = pin;
});
//numbers
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const displayNumber = document.getElementById('display-number');
    if (number.length == 1 && parseInt(number) >= 0 && parseInt(number) <= 9) {
        displayNumber.value = displayNumber.value + number;
    }
    if (number == 'C') {
        displayNumber.value = '';
    }
    if (number == 'Submit') {
        if (document.getElementById('display-pin').value == displayNumber.value) {
            document.getElementById('pin-didnt-matched').style.display = 'none';
            document.getElementById('pin-matched').style.display = 'block';
        }
        else {
            document.getElementById('pin-matched').style.display = 'none';
            document.getElementById('pin-didnt-matched').style.display = 'block';
        }
    }
});