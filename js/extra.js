const seatSelectedEl = document.getElementById("selected-seat");
const totalBookedEl = document.getElementById("total-booked");
const availableSeatCount = document.getElementById("available-seat-count");
const totalPriceText = document.getElementById("total-price");
const couponInput = document.getElementById("coupon-input");
const couponBtn = document.getElementById("coupon-btn");
const defaultText = document.getElementById("default-text");
const grandTotal = document.getElementById("grand-total");
const phoneNumber = document.getElementById("phone-number");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const nextBtn = document.getElementById("next-btn");
const modalBtn = document.getElementById("modal-close");

let count = 0;
let totalPrice = 0;
let clickedSeat = [];

document
  .getElementById("seat-section")
  .addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
      // giving condition for not including a seat twice
      if (clickedSeat.includes(event.target.innerText)) {
        return alert("seat is included");
      }
      // seat clicked monitor
      clickedSeat.push(event.target.innerText);
      //giving condition for returning when 4 seats are added
      if (clickedSeat.length > 4) {
        return alert("maximum seat added");
      }

      // seat increase
      count++;
      document.getElementById("total-booked").innerText = count;

      //   seat decrease
      let available = Number(
        document.getElementById("available-seat-count").innerText
      );

      const newAvailableValue = available - 1;
      document.getElementById("available-seat-count").innerText =
        newAvailableValue;
      //   class added
      event.target.classList.add("bg-primary");
      event.target.classList.add("text-white");
      //   defaultText hide

      defaultText.classList.add("hidden");

      //   seat added to the right
      seatSelectedEl.innerHTML += `
         <li class="text-base font-normal flex justify-between">
        <span>${event.target.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li>
      `;

      //   total price calculation
      totalPrice += 550;
      totalPriceText.innerText = totalPrice;

      if (clickedSeat.length === 4) {
        couponBtn.removeAttribute("disabled");
        couponInput.removeAttribute("disabled");
      }
    }
  });

//   coupon apply button events

couponBtn.addEventListener("click", function () {
  const couponInputValue = couponInput.value;
  if (couponInputValue !== "NEW15" && couponInputValue !== "Couple 20") {
    return alert("Invalid coupon");
  }

  if (couponInputValue === "NEW15") {
    let discount = totalPrice * 0.15;
    let grandPrice = totalPrice - discount;
    grandTotal.innerText = grandPrice;

    document.getElementById("coupon-section").innerHTML = `
    <div class="flex justify-between mt-4">
                  <p class="font-bold text-lg">Discount</p>
                  <p class="font-bold text-lg">
                    BDT <span>-${discount}</span>
                  </p>
                </div>
    `;
  }
  if (couponInputValue === "Couple 20") {
    let discount = totalPrice * 0.2;
    let grandPrice = totalPrice - discount;
    grandTotal.innerText = grandPrice;

    document.getElementById("coupon-section").innerHTML = `
    <div class="flex justify-between mt-4">
                  <p class="font-bold text-lg">Discount</p>
                  <p class="font-bold text-lg">
                    BDT <span>-${discount}</span>
                  </p>
                </div>
    `;
  }

  phoneNumber.removeAttribute("disabled");
  nameInput.removeAttribute("disabled");
  emailInput.removeAttribute("disabled");
});

// if phone number is 11 digit the next button enable

phoneNumber.addEventListener("input", function (event) {
  if (event.target.value.length >= 11) {
    nextBtn.removeAttribute("disabled");
  }
});

// when model button is clicked then reload the page

modalBtn.addEventListener("click", function () {
  window.location.reload();
});
