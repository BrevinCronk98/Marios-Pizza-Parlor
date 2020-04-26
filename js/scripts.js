function Pizza(toppings,toppingsTwo, size) {
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
    } else{
        return this.toppingsTwoPrice = 4 ;
    }
   
}

Pizza.prototype.findTotal = function(){
    this.total = this.toppingsPrice + this.toppingsTwoPrice + this.sizePrice
    return this.total;
}

Pizza.prototype.dblTopDisp = function(){
    if(this.toppings == "Pepperoni" && this.toppingsTwo == "Pepperoni"){
        $("#display-div").hide();
        $("#dbl-div").show();
        $("#pizza-disp-two").text(this.size + ' ' + "Double Pepperoni Pizza.")
        $("#total-disp-two").text(this.total + ' ' + "Dollars, thank you for ordering with us!")
    } else if(this.toppings == "Bacon" && this.toppingsTwo == "Bacon") {
        $("#display-div").hide();
        $("#dbl-div").show();
        $("#pizza-disp-two").text(this.size + ' ' + "Double Bacon Pizza.")
        $("#total-disp-two").text(this.total + ' ' + "Dollars, thank you for ordering with us!")
    } else if(this.toppings == "Chicken" && this.toppingsTwo == "Chicken"){
        $("#display-div").hide();
        $("#dbl-div").show();
        $("#pizza-disp-two").text(this.size + ' ' + "Double Chicken Pizza.")
        $("#total-disp-two").text(this.total + ' ' + "Dollars, thank you for ordering with us!") 
    }
}
       

$(document).ready(function(){
    
    
    $("#add-btn").click(function(event){
        event.preventDefault();
        var toppings = $("#toppings").val();
        var toppingsTwo = $("#toppingTwo").val();
        var size = $("#size").val();
        var pizza = new Pizza(toppings, toppingsTwo, size)
        pizza.addSizePrice();
        pizza.addToppingPrice();
        pizza.addToppingTwoPrice();
        pizza.findTotal()
       
      
       
        $("#display-div").show();
        pizza.dblTopDisp();
        $("#pizza-disp").text(pizza.size)
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

