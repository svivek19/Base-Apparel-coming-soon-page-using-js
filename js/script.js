const inputEl = document.querySelector('input');
const btnEl = document.querySelector('button');

const submitEl = (event) => {
    event.preventDefault();
    if (inputEl.value == "") {
        alert("Please provide valid input");
    } else {
        alert("Successful!");
        inputEl.value = "";
    }
};

btnEl.addEventListener("click", submitEl);





