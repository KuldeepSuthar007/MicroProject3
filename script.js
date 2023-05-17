
let bill = document.querySelector('#bill');
let people = document.querySelector('#people');
let tip = document.querySelectorAll('.percentage');
let tip_display = document.querySelector('#tip_amount');
let total = document.querySelector('#total');
let generate_button = document.querySelector('#generate_btn');
let reset = document.querySelector('.reset');
let genButton = document.querySelector('#gen_button');


var value = 0;
var percentage_tip = 0;
var number = 0;

bill.addEventListener('input', (e) => {
    value = parseInt(e.target.value);

    if (value < 0 || !Boolean(value)) {
        bill.style.border = "2px solid red";
        value = 0;
    } else {
        bill.style.border = "2px solid #9c60ff";

    }

    console.log(bill.value)
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
    //tip_amountfn();
    // resetfn();
    //totalfn();
});


number = parseInt(document.getElementById('people').innerText = number);

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

let incButton = document.getElementById('inc_button')
let decButton = document.getElementById('dec_button')

incButton.addEventListener('click', increment)
decButton.addEventListener('click', Decrement)


const tip_amountfn = () => {
    const tip_person = ((value * (percentage_tip / 100)) / number).toFixed(2);
    console.log(tip_person);
    tip_display.innerText = `₹${tip_person}`;   // abover  query select display
};

const totalfn = () => {
    var total_person = ((value + value * (percentage_tip / 100)) / number).toFixed(2);
    console.log(total_person);
    total.innerText = `₹${total_person}`;   // above query select total
};



const generatefn = () => {
    tip_amountfn();
    totalfn();

};

const resetfn = () => {
    if (value <= 0 && percentage_tip <= 0 && number <= 0) {
        reset_bt.classList.add("disabled");
    } else {
        reset_bt.classList.remove("disabled");
    }


    if (!reset_bt.classList.contains("disabled")) {

        reset_bt.addEventListener("click", () => {
            value = 0;
            number = 0;
            percentage_tip = 0;
            tip_display.innerText = `₹0.00`;
            total.innerText = `₹0.00`;
            people.innerText = `0`;
            // reset.classList.add("disabled");
            bill.value = 0;
            tip.forEach((val) => {
                val.classList.remove("active");
            });

        });


    }
};

genButton.addEventListener('click', generatefn);

