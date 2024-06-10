function convert() {
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const temperature = parseFloat(document.getElementById("temperature").value);
    let convertedTemp;
  
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      convertedTemp = (temperature * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      convertedTemp = (temperature - 32) * 5/9;
    } else {
      // No conversion needed if units are the same
      convertedTemp = temperature;
    }
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = `${temperature} ${fromUnit} is equal to ${convertedTemp.toFixed(2)} ${toUnit}`;
  }