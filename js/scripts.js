function Pizza(toppings,toppingsTwo, size, total) {
    this.toppings = toppings;
    this.toppingsTwo = toppingsTwo;
    this.size = size;
}


Pizza.prototype.addSizePrice = function(){
    this.sizePrice = 0;
    if(this.size === "12 Inch"){
        return this.sizePrice = 12;
    } else{
        return this.sizePrice = 15;
    }
}

Pizza.prototype.addToppingPrice = function(){
    this.toppingsPrice = 0
    if(this.toppings === "Pepperoni"){
        $("#pep-pic").show();
        $("#bacon").hide();
        $("#chk-pic").hide();
        return this.toppingsPrice = 2;
    } else if(this.toppings == "Bacon"){
        $("#bacon").show();
        $("#pep-pic").hide();
        $("#chk-pic").hide();
        return this.toppingsPrice = 3;
    } else{
        $("#chk-pic").show();
        $("#bacon").hide();
        $("#pep-pic").hide();
        return this.toppingsPrice = 4 ;
    }
   
}
Pizza.prototype.addToppingTwoPrice = function(){
    this.toppingsTwoPrice = 0
    if(this.toppingsTwo == "Pepperoni"){
        return this.toppingsTwoPrice = 2;
    } else if(this.toppingsTwo == "Bacon"){
        return this.toppingsTwoPrice = 3;
    } else if(this.toppingsTwoPrice == "Chicken"){
        return this.toppingsTwoPrice = 4 ;
    } else {
        return this.toppingsTwoPrice = 0
    }
   
}

Pizza.prototype.findTotal = function(){
    this.total = this.toppingsPrice + this.toppingsTwoPrice + this.sizePrice
    return this.total;
}

Pizza.prototype.dblTopDisp = function(){
    if(this.toppings == "Pepperoni" && this.toppingsTwo == "Pepperoni"){
        $("#display-div").hide();
        $("#double-top-div").show();
        $("#pizza-disp-two").text(this.size + ' ' + "Double Pepperoni Pizza.")
        $("#total-disp-two").text(this.total + ' ' + "Dollars, thank you for ordering with us!")
        $("#pep-pic-two").show();
    } else if(this.toppings == "Bacon" && this.toppingsTwo == "Bacon") {
        $("#display-div").hide();
        $("#double-top-div").show();
        $("#pizza-disp-two").text(this.size + ' ' + "Double Bacon Pizza.")
        $("#total-disp-two").text(this.total + ' ' + "Dollars, thank you for ordering with us!")
        $("#bacon").show();
    } else if(this.toppings == "Chicken" && this.toppingsTwo == "Chicken"){
        $("#display-div").hide();
        $("#double-top-div").show();
        $("#pizza-disp-two").text(this.size + ' ' + "Double Chicken Pizza.")
        $("#total-disp-two").text(this.total + ' ' + "Dollars, thank you for ordering with us!") 
        $("#chk-pic").show();
    }
}

var pizzas = [];
$(document).ready(function(){
    var priceAr = [];
    var totalPrice = 0;
    
    $("#add-btn").click(function(event){
        event.preventDefault();
        
        var toppings = $("#toppings").val();
        var toppingsTwo = $("#toppingTwo").val();
        var size = $("#size").val();
        var pizza = new Pizza(toppings, toppingsTwo, size)
        pizzas.push(pizza);
        pizza.addSizePrice();
        pizza.addToppingPrice();
        pizza.addToppingTwoPrice();
        pizza.findTotal()
        for(var i = 0; i< pizzas.length; i++) {
            priceAr.push(pizzas[i].total)
        }
        priceAr.forEach(total => totalPrice += total )
        console.log(totalPrice)

        pizzas.forEach((pizza) => {
            $("#pizza-list").append(`<li id="listitem">  ${pizza.size} ${pizza.toppings} and  ${pizza.toppingsTwo} $${pizza.findTotal()}</li> <br><p id="total-price">$${totalPrice}</p>`)
            $("#pizza-list-two").append(`<li id="listitem">  ${pizza.size} ${pizza.toppings} ${pizza.toppingsTwo} $${pizza.findTotal()}</li> <br> <p id="total-price">$${totalPrice} Dollars</p>`)
        })
        
        $("#double-top-div").hide();
        $("#display-div").show();
        pizza.dblTopDisp();
        $("#pizza-disp").text(pizza.size + ' ' + toppings + ' ' + 'with' + ' ' + toppingsTwo)
        $("#total-disp").text(pizza.total + ' ' + "dollars")
        pizzas = [];
        priceAr= []
    });

    $("#reset").click(function(event){
        event.preventDefault();
        $("#end-row").show();
        $("#total-price-disp").text('$' + ' ' + totalPrice + ' ' + 'Dollars')
        $("#display-div").hide()
        $("#double-top-div").hide();
        $(".row1").hide();
        $(".row2").hide();
        $("#top-btn-div").hide(); 
    })
    
    $("#reset-two").click(function(event){
        event.preventDefault();
        $("#end-row").show();
        $("#total-price-disp").text('$' + ' ' + totalPrice + ' ' + 'Dollars')
        $("#display-div").hide()
        $("#double-top-div").hide();
        $(".row1").hide();
        $(".row2").hide();
        $("#top-btn-div").hide(); 
    })
});

