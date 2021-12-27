let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elResult = document.querySelector(".form__result");

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let inputValue = elFormInput.value;

    function fizzbuzz(number) {

        if((number % 15) === 0) {
            return "FizzBuzz";
        } else if ((number % 5) === 0) {
            return "Buzz";
        } else if((number % 3) === 0) {
            return "Fizz";
        } else {
            return inputValue;
        }

    }

    elResult.textContent = fizzbuzz(inputValue);
    console.log(fizzbuzz(inputValue));
})