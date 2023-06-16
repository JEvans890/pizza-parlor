/*
function factoryFunction(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }

    };
}
//Constructor Function
function Circle(radius){
    this.radius = radius; //empty object
    this.draw = function(){
        console.log('draw');
    }
//return this;
}
const circle = new Circle(1);
//const x = {}; <-this.


function createCheckboxes() {
    const container = document.getElementById("checkboxes-container");
    let checkboxLabel = [Pepperoni, Sausage, Cheese];
    for (let i = 0; i < checkboxLabels.length; i++) {

    }
}

//button stuff
let form = document.querySelector('form');
let result = document.querySelector('h1');

form.addEventListener('click', () => {
    event.preventDefault();
    let checkbox = document.querySelector('input[type="checkbox"]:checked');
    result.innerText = checkbox.value;
});
*/
class Pizza {
    toppings = ['pepperoni', 'sausage'];
    size = ['small', 'medium', 'large'];
};
console.log(Pizza);

document.getElementById("button").onclick = function(){

    let output = document.getElementById("checkbox.value", "Size.option").value;
    console.log("Your Order: ", output);
};