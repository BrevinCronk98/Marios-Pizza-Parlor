function Pizza(toppings,size, total) {
    this.toppings = toppings;
    this.size = size;
    this.total = total
}


Pizza.prototype.addSizePrice = function(){
    this.sizePrice = 0;
    if(this.size === "12 Inch"){
        return this.sizePrice = 12
    } else{
        return this.sizePrice = 15
    }
}

Pizza.prototype.addToppingPrice = function(){
    this.toppingsPrice = 0
    if(this.toppings === "Pepperoni"){
        return this.toppingsPrice = 2;
    } else if(this.toppings == "Bacon"){
        return this.toppingsPrice = 3;
    } else{
        return this.toppingsPrice = 4;
    }
   
}

Pizza.prototype.findTotal = function(){
    this.total = this.toppingsPrice + this.sizePrice
    return this.total;
}

$(document).ready(function(){
   


    $("#add-btn").click(function(event){
        event.preventDefault();
        var toppings = $("#toppings").val();
        var size = $("#size").val();
        var pizza = new Pizza(toppings, size,)
        pizza.addSizePrice();
        pizza.addToppingPrice();
        pizza.findTotal()
       
        $("#display-div").show();
        $("#pizza-disp").text(pizza.toppings  + ' ' + pizza.size)
        $("#total-disp").text(pizza.total + ' ' + "dollars")
    })
})

