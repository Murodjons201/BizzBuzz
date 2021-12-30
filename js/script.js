let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elResult = document.querySelector(".form__result");

function fizzBuzz(number) {
  if (number % 15 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else {
    return number - 0;
  }
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = elFormInput.value;

  if (inputValue < 0 || isNaN(inputValue)) {
    elResult.textContent = "Iltimos 0 dan katta raqam kiriting!";
    elResult.classList.remove("bg-light");
    elResult.classList.add("bg-primary");
    elResult.classList.add("text-light");

    return;
  } else {
    elResult.classList.remove("bg-primary");
    elResult.classList.remove("text-light");
    elResult.classList.add("bg-light");
    elResult.classList.add("text-pimery");
  }

  elResult.textContent = fizzBuzz(inputValue);
  console.log(fizzBuzz(inputValue));
});
