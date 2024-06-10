function calculateInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value) / 100; // Convert rate to decimal
    const time = parseFloat(document.getElementById("time").value);
    
    const interest = principal * rate * time;
    const totalAmount = principal + interest;
  
    const result = document.getElementById("result");
    result.innerHTML = `
      Principal Amount: ${principal.toFixed(2)}<br>
      Interest Rate: ${rate.toFixed(2)}%<br>
      Time: ${time.toFixed(2)} years<br>
      Simple Interest: ${interest.toFixed(2)}<br>
      Total Amount: ${totalAmount.toFixed(2)}
    `;
  }