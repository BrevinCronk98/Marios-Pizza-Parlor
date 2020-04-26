function Pizza(toppings,size, toppingsTwo) {
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
    this.toppingsPrice = 0
    if(this.toppingsTwo === "Pepperoni"){
        return this.toppingsPrice = 2;
    } else if(this.toppingsTwo == "Bacon"){
        return this.toppingsPrice = 3;
    } else{
        return this.toppingsPrice = 4 ;
    }
   
}

Pizza.prototype.findTotal = function(){
    this.total = this.toppingsPrice + this.sizePrice
    return this.total;
}



$(document).ready(function(){
    var toppings = $("#toppings").val();
    var toppingsTwo = $("#toppingTwo").val();
    var size = $("#size").val();
    var pizza = new Pizza(toppings, toppingsTwo, size)
    
    
    dblToppingDisp = function () {
        if(pizza.toppings == "Pepperoni" && pizza.toppingsTwo == "Pepperoni"){
            $("#display-div").hide()
            $("#double-top-div").show();
            $("#pizza-disp-two").text(pizza.size + '' + 'Double Pepperoni Pizza')
            $("#total-disp-two").text(pizza.total + ' ' + "Dollars")
        } else if(pizza.toppings == "Chicken" && pizza.toppingsTwo == "Chicken"){
            $("#display-div").hide()
            $("#double-top-div").show();
            $("#pizza-disp-two").text(pizza.size + '' + 'Double Chicken Pizza')
            $("#total-disp-two").text(pizza.total + ' ' + "Dollars")
        } else if (pizza.toppings == "Bacon" && pizza.toppingsTwo == "Bacon") {
            $("#display-div").hide()
            $("#double-top-div").show();
            $("#pizza-disp-two").text(pizza.size + '' + 'Double Bacon Pizza')
            $("#total-disp-two").text(pizza.total + ' ' + "Dollars")
        }
    }

    $("#add-btn").click(function(event){
        event.preventDefault();
       
        pizza.addSizePrice();
        pizza.addToppingPrice();
        pizza.findTotal()
        dblToppingDisp(toppings, toppingsTwo);
       
        $("#display-div").show();
        $("#pizza-disp").text(pizza.toppings + ' ' + pizza.toppingsTwo  + ' ' + pizza.size)
        $("#total-disp").text(pizza.total + ' ' + "dollars")
        $(".row1").hide();
        $(".row2").hide();
    });

    $("#reset").click(function(event){
        event.preventDefault();
        $("#display-div").hide()
        $(".row1").show();
        $(".row2").show();
    })
});

