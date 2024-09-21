// global variables

const seatContainer = document.getElementById("seat-container");
const availableSeatCount = document.getElementById("available-seat-count");
const selectedSeatCount = document.getElementById("selected-seat-count");

let seatIncrease = 0;
let empty = [];

document
  .getElementById("seat-section")
  .addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      // class add
      event.target.classList.add("bg-primary");
      event.target.classList.add("text-white");
      empty.push(event.target.innerText);

      // seat include
      const row = `
        <div class="flex justify-between mt-4">
                    <p>${event.target.innerText}</p>
                    <p>Economy</p>
                    <p>550</p>
                  </div>
        
        `;

      seatContainer.innerHTML += row;

      // available seat count decrease

      const availableSeatCountNum = Number(availableSeatCount.innerText);
      count = availableSeatCountNum - 1;
      availableSeatCount.innerText = count;

      //   selected seat count increase
      //   console.log(empty.length);
    }
  });
