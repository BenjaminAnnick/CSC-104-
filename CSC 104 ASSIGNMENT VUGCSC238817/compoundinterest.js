function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById("principal").value);
    const interestRate = parseFloat(document.getElementById("interest").value) / 100;
    const time = parseFloat(document.getElementById("time").value);
  
    const amount = principal * Math.pow(1 + interestRate, time);
    const compoundInterest = amount - principal;
  
    const result = document.getElementById("result");
    result.innerHTML = `
      Principal Amount: ${principal.toFixed(2)}<br>
      Interest Rate: ${interestRate.toFixed(2)}%<br>
      Time: ${time.toFixed(2)} years<br>
      Compound Interest: ${compoundInterest.toFixed(2)}<br>
      Total Amount: ${amount.toFixed(2)}
    `;
  }