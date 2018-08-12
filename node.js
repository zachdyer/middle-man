var readline = require('readline-sync');

console.log("Hi! My name is Node JS. But you can call me Node.");

transaction();

function transaction() {
  var answer = readline.question("Would you like to make a financial transactions?");
  if(answer == "yes") {
    buyer_or_seller();
  } else if(answer == "no") {
    console.log("You know where to find me if you ever need to make a transaction.");
  } else {
    console.log("I only understand yes or no.");  
    transaction();
  }
}

function buyer_or_seller() {
  var answer = readline.question("Are you a buyer or a seller?");
  if(answer == "buyer") {
    buyer();
  } else if(answer == "seller") {
    seller();
  } else {
    console.log("I only understand buyer or seller.");
  }
}

function buyer() {
  var want_to_buy = readline.question("What would you like to buy?");
  var willing_to_buy = readline.question("How much are you willing to buy this for?");
  if(isNumber(willing_to_buy)) {
    var buyer_price = parseInt(willing_to_buy);
    seller(want_to_buy, buyer_price);
  } else {
    console.log(willing_to_buy + " is not a number.");
  }
}

function seller(buyer_buy, buyer_price) {
  if (buyer_buy && buyer_price) {
    willing_to_sell(buyer_buy, buyer_price);
  } else {
    var seller_sell = readline.question("What would you like to sell?");
    var seller_price = readline.question("How much are you willing to do it for?")
    willing_to_buy(seller_sell, seller_price);
  }
}

function willing_to_sell(want_to_buy, buyer_price) {
  var answer = readline.question("Would you be willing to sell " + want_to_buy);
  if(answer == "yes") {
    var seller_price = readline.question("How much are you willing to sell this for?");
    if(isNumber(seller_price)) {
      seller_price = parseInt(seller_price);
//       console.log("seller price: " + seller_price);
//       console.log("buyer price: " + buyer_price);
      if(seller_price <= buyer_price) {
        var final_price = seller_price;
        console.log("Transaction success! You agree to sell " + want_to_buy + " for $" + final_price)
      } else {
        console.log("Transaction failed. The amount you are willing to sell is not equal to or less than what the buyer is willing to pay.");
      }
    } else {
      console.log(seller_price + " is not a number.");
    }
  } else if(answer == "no") {
    console.log("Thanks for using Node Middleman.")
  } else {
    console.log("I only understand yes or no.");
    willing_to_sell(want_to_buy, buyer_price);
  }
}

function willing_to_buy(seller_sell, seller_price) {
  var answer = readline.question("Would you be willing to buy " + seller_sell);
  if(answer == "yes") {
    var buyer_price = readline.question("How much are you willing to buy this for?")
    if(isNumber(buyer_price)) {
      buyer_price = parseInt(buyer_price);
      if(buyer_price >= seller_price) {
        console.log("The seller agrees to do it for $" + buyer_price);
      } else {
        console.log("The seller is not willing to do it for $" + buyer_price);
      }
    } else {
      console.log(buyer_price + " is not a number.");
      willing_to_buy(seller_sell, seller_price);
    }
  } else if(answer == "no") {
    
  } else {
    console.log("I only understand yes or no.");
    willing_to_buy(seller_sell, seller_price);
  }
}

function isNumber(num){
  return !isNaN(num)
}
