function convert() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    let conversionRate = 1; // Assume equal conversion for simplicity
  
    // Update conversionRate based on from and to currency (for a more realistic scenario, you'd need to fetch live exchange rates from an API)
    if (fromCurrency === "USD" && toCurrency === "EUR") {
      conversionRate = 0.9; // Placeholder rate for USD to EUR
    } else if (fromCurrency === "USD" && toCurrency === "JPY") {
      conversionRate = 157.11; // Placeholder rate for USD to JPY
    } else if (fromCurrency === "USD" && toCurrency === "NGN") {
        conversionRate = 780.00; // Placeholder rate for USD to NGN
    } else if (fromCurrency === "EUR" && toCurrency === "USD") {
      conversionRate = 1.11; // Placeholder rate for EUR to USD 
    } else if (fromCurrency === "EUR" && toCurrency === "JPY") {
        conversionRate = 170.16; // Placeholder rate for EUR to JPY
    } else if (fromCurrency === "EUR" && toCurrency === "NGN") {
        conversionRate = 1,576.35; // Placeholder rate for EUR to NGN
    } else if (fromCurrency === "JPY" && toCurrency === "USD") {
        conversionRate = 0.0064; // Placeholder rate for JPY to USD 
    } else if (fromCurrency === "JPY" && toCurrency === "EUR") {
        conversionRate = 0.0059; // Placeholder rate for JPY to EUR 
    } else if (fromCurrency === "JPY" && toCurrency === "NGN") {
        conversionRate = 9.26; // Placeholder rate for JPY to NGN
    } else if (fromCurrency === "NGN" && toCurrency === "USD") {
        conversionRate = 0.00067; // Placeholder rate for JPY to USD 
    } else if (fromCurrency === "NGN" && toCurrency === "EUR") {
        conversionRate = 0.00063; // Placeholder rate for JPY to EUR 
    } else if (fromCurrency === "NGN" && toCurrency === "JPY") {
        conversionRate = 0.10; // Placeholder rate for JPY to USD 
    } 
  
    const convertedAmount = amount * conversionRate;
    const result = document.getElementById("result");
    result.textContent = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(5)} ${toCurrency}`;
  }