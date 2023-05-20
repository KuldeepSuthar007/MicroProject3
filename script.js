const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const tip = document.querySelectorAll('.percentage');
const customtip = document.querySelector('#custom_percent')
const tip_display = document.querySelector('#tip_amount');
const total = document.querySelector('#total');
const genButton = document.querySelector('#gen_button');
const reset = document.querySelector("#reset_button");
const incButton = document.getElementById('inc_button');
const decButton = document.getElementById('dec_button');

var value = 0;
var percentage_tip = 0.0;
var number = 0;
var tip_person = 0;
var total_person = 0;

function increment() {
    ++number
    people.innerText = number;

};
function Decrement() {
    --number;
    if (number < 0)
        number = 0
    people.innerText = number;
};
const calculate = () => {
    tip_person = ((value * (percentage_tip / 100)) / number).toFixed(2);
    tip_display.innerText = `₹${tip_person}`;
    total_person = ((value + value * (percentage_tip / 100)) / number).toFixed(2);
    total.innerText = `₹${total_person}`;
};
const generatefn = () => {
    if (value > 0 && percentage_tip > 0 && number >= 1) {
        genButton.style.color = "#ffffff";
        genButton.style.backgroundColor = "#9c60ff";
        reset.style.color = "#9c60ff";
        reset.style.backgroundColor = "#ffffff";
        calculate();
    }
};
const resetfn = () => {
    if (tip_person > 0 || total_person > 0) {
        value = 0;
        number = 0;
        percentage_tip = 0;
        bill.value = 0;
        tip_display.innerText = `₹0.00`;
        total.innerText = `₹0.00`;
        people.innerText = `1`;
        genButton.style.color = "#8f8f8f";
        genButton.style.backgroundColor = "#fbfafb";
        reset.style.color = "#9c60ff";
        reset.style.backgroundColor = "#c39fff";
        tip.forEach((val) => {
            val.classList.remove("active");
        });
    }

};

bill.addEventListener('input', (e) => {
    value = parseFloat(e.target.value);
    bill.style.textAlign = "left";
});

document.querySelector(".buttons").addEventListener("click", (e) => {
    const button = e.target.closest(".percentage");
    if (button) {
        tip.forEach((val) => {
            val.classList.remove("active");
        });
    }
    button.classList.add("active");
    percentage_tip = parseInt(button.innerText);
});

customtip.addEventListener('input', (e) => {
    percentage_tip = parseFloat(e.target.value);
    console.log(percentage_tip);
})
incButton.addEventListener('click', increment);
decButton.addEventListener('click', Decrement);
genButton.addEventListener('click', generatefn);
reset.addEventListener('click', resetfn);

