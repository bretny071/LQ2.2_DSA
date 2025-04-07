console.log('The items in the grocery:\n' +
    'A. Pepsi Cola Php 30\n' +
    'B. Coca Cola Php 35\n' +
    'C. Apple (per kg) Php 100\n' +
    'D. Orange (per kg) Php 120\n' +
    'E. Hotdog (per kg) Php 180');

let items_choice = prompt("Select by letter of the item:").toLowerCase(); // Convert to lowercase for consistency
let qty = parseInt(prompt("How many:"));
let tot_price = 0;

switch (items_choice) {
    case "a":
        tot_price = qty * 30;
        alert(`The total price of the order ${items_choice} x ${qty}: Php ${tot_price}`);
        break;
    case "b":
        tot_price = qty * 35;
        alert(`The total price of the order ${items_choice} x ${qty}: Php ${tot_price}`);
        break;
    case "c":
        tot_price = qty * 100;
        alert(`The total price of the order ${items_choice} x ${qty}: Php ${tot_price}`);
        break;
    case "d":
        tot_price = qty * 120;
        alert(`The total price of the order ${items_choice} x ${qty}: Php ${tot_price}`);
        break;
    case "e":
        tot_price = qty * 180; // Corrected price for Hotdog
        alert(`The total price of the order ${items_choice} x ${qty}: Php ${tot_price}`);
        break;
    default:
        alert("Invalid item selected.");
        break;
}
