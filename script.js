document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('growth-slider');
    const rateVal = document.getElementById('rate-val');
    const totalVal = document.getElementById('total-val');

    // This function runs every time you move the slider
    slider.oninput = function() {
        let rate = this.value;
        rateVal.innerHTML = rate; // Updates the percentage number shown
        
        // The Compound Interest Formula: FV = 10,000 * (1 + r)^10
        let interestRate = rate / 100;
        let futureValue = 10000 * Math.pow((1 + interestRate), 10);
        
        // Updates the big number with commas (e.g., 25,937)
        totalVal.innerHTML = "£" + Math.round(futureValue).toLocaleString();
    };
});
