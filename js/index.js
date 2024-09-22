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

let totalPrice = 0;

let selectedSeat = [];
// seat function
function handleSelectSeat(event) {
  // condition for not adding same button twice
  if (selectedSeat.includes(event.innerText)) {
    alert("seat already added");
    return;
  } else if (selectedSeat.length < 4) {
    event.classList.add("bg-primary");
    event.classList.add("text-white");
    selectedSeat.push(event.innerText);

    totalBookedEl.innerText = selectedSeat.length;
    // available seat decrease
    const availableSeatCountValue = Number(availableSeatCount.innerText);
    const newAvailableValue = availableSeatCountValue - 1;
    availableSeatCount.innerText = newAvailableValue;

    // remove default text
    defaultText.classList.add("hidden");
    // totalPrice calculation
    totalPrice += 550;
    totalPriceText.innerText = totalPrice.toFixed(2);

    seatSelectedEl.innerHTML += `
  <li class="text-base font-normal flex justify-between">
  <span>${event.innerText}</span>
  <span>Economy</span>
  <span>550</span>
</li>
  `;

    // active coupon when four items are selected
    if (selectedSeat.length >= 4) {
      couponInput.removeAttribute("disabled");
      couponBtn.removeAttribute("disabled");
    }
  } else {
    return alert("maximum seat booked");
  }
}

// coupon button function

document.getElementById("coupon-btn").addEventListener("click", function () {
  let discount = 0;
  const couponInputValue = couponInput.value;
  console.log(couponInputValue);
  if (couponInputValue !== "NEW15" && couponInputValue !== "Couple 20") {
    return alert("Invalid coupon");
  }

  if (couponInputValue === "NEW15") {
    discount = totalPrice * 0.15;
  } else if (couponInputValue === "Couple 20") {
    discount = totalPrice * 0.2;
  }

  const couponSection = document.getElementById("coupon-section");
  couponSection.innerHTML = `
    <div class="flex justify-between mt-4">
                  <p class="font-bold text-lg">Discount</p>
                  <p class="font-bold text-lg">
                    BDT <span>-${discount}</span>
                  </p>
                </div>
  `;

  const grandTotalValue = totalPrice - discount;
  grandTotal.innerText = grandTotalValue.toFixed(2);

  nameInput.removeAttribute("disabled");
  phoneNumber.removeAttribute("disabled");
  emailInput.removeAttribute("disabled");
});

// phone number 11 digit or not checking

phoneNumber.addEventListener("input", function (event) {
  const inputValue = event.target.value;
  console.log(inputValue);

  if (inputValue.length >= 11) {
    nextBtn.removeAttribute("disabled");
  }
});

// nextBtn event
nextBtn.addEventListener("click", function (event) {
  event.preventDefault();
});

// modal close btn event
document.getElementById("modal-close").addEventListener("click", function () {
  window.location.reload();
});
