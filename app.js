// Get the reference to the main div (ticket-container)
const ticketContainer = document.getElementById("ticket-container");

// Counter for the length of numbers not matching the loop value
let count = 0;

// Array containing the values to check against
const valuesToCheck = [1, 2, 3, 4, 5, 8, 9, 
                       10, 12, 13, 16, 17, 18, 19, 
                       20, 22, 24, 26, 29, 30,
                       31, 32, 33, 35, 38, 
                       42, 44, 45, 46, 
                       50, 52, 53, 54, 55, 
                       60, 61, 62, 65, 68, 69, 
                       70, 73, 74, 75, 77, 78,
                       80, 81, 83, 85, 86, 87, 88, 89, 
                       90, 93, 94, 95, 96, 99,
                       100, 101, 102, 104, 105, 108, 109, 
                       110, 111, 112, 115, 118,
                       120, 121, 123, 124, 125, 126, 127, 129, 
                       130, 131, 132, 135, 139, 
                       142, 143, 144,148, 149, 
                       152, 155, 156, 158, 160
                       ];

// Loop from 1 to 160
for (let i = 1; i <= 160; i++) {
    // Convert the loop value to a string and pad it with leading zeros
    const paddedValue = String(i).padStart(3, '0');

  // Create a new div element
  const ticketDiv = document.createElement("div");
  ticketDiv.className = "ticket";
  ticketDiv.innerText = paddedValue;

   // Check if the loop value matches a value in the array
   if (valuesToCheck.includes(i)) {
    ticketDiv.classList.add("red");
  }else{
    count++;
  }

  // Append the new div to the ticket-container
  ticketContainer.appendChild(ticketDiv);
}

document.querySelector(".let-ticket-number").innerHTML = count;