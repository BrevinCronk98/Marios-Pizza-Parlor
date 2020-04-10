function Pizza() {
    this.toppings = toppings,
    this.size = size
}


Pizza.prototype.addSizePrice = function(){
    this.sizePrice = 0;
    if(this.size == "12Inch"){
        return this.sizePrice = 12
    } else{
        return this.sizePrice = 15
    }
}

Pizza.prototype.addToppingPrice = function(){
    this.toppingsPrice = 0
    if(this.topping == "Pepperoni"){
        return this.toppingPrice = 2;
    } else if(this.topping == "Bacon"){
        return this.toppingPrice = 3;
    } else{
        return this.toppingPrice = 4;
    }
}

Pizza.prototype.findTotal = function(){
   var totalPrice = this.sizePrice + this.toppingPrice
   return totalPrice;
}

$(document).ready(function(){

    $("#buttonAdd").click(function(event){
        event.preventDefault();

        var toppings = $("#toppings").val();
        var size = $("#size").val();
        var pizza = new Pizza(toppings, size)
        pizza.addSizePrice();
        pizza.addToppingPrice();
        pizza.findTotal()
        console.log(pizza.totalPrice)
    })
})

