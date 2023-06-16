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


