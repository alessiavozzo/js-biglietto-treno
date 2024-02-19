// euro/km
const costPerKm = 0.21;

// ask user: how many km?
const userKm = Number(prompt("How many km do you want to travel for?"));

// ask user: your age?
const userAge = Number(prompt("How old are you?"));

// full price
const fullPrice = costPerKm * userKm;

// discounts
const minorDiscount = 0.2;
const seniorDiscount = 0.4;

// ticket price: if-else

/* if(userAge < 18){
    alert("Minors are entitled to a discount!");
    const minorPrice = fullPrice - (fullPrice * minorDiscount);
    console.log(minorPrice);
    alert(`Ticket price: ${minorPrice.toFixed(2)} €`);
    console.log(`Ticket price: ${minorPrice.toFixed(2)} €`);
}

else if (userAge > 65){
    alert("Seniors are entitled to a discount!");
    const seniorPrice = fullPrice - (fullPrice * seniorDiscount);
    console.log(seniorPrice);
    alert(`Ticket price: ${seniorPrice.toFixed(2)} €`);
    console.log(`Ticket price: ${seniorPrice.toFixed(2)} €`);
}

else{
    console.log(fullPrice);
    alert(`Ticket price: ${fullPrice.toFixed(2)} €`);
    console.log(`Ticket price: ${fullPrice.toFixed(2)} €`);
} */


let ticketPrice;
if(userAge < 18){
    alert("Minors are entitled to a discount!");
    ticketPrice = fullPrice - (fullPrice * minorDiscount);
}
else if(userAge > 65){
    alert("Seniors are entitled to a discount!");
    ticketPrice = fullPrice - (fullPrice * seniorDiscount);
}
else{
    ticketPrice = fullPrice;
}

alert(`Ticket price: ${ticketPrice} €`);
console.log(`Ticket price: ${ticketPrice} €`);