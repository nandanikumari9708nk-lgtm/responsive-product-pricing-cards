const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

const prices = document.querySelectorAll(".price");

monthlyBtn.addEventListener("click", () => {
    prices.forEach(price => {
        price.textContent = "$" + price.dataset.monthly;
    });
});

yearlyBtn.addEventListener("click", () => {
    prices.forEach(price => {
        price.textContent = "$" + price.dataset.yearly;
    });
});
