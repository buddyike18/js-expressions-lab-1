// index.js

// 1️⃣ Temperature Data (Alternating Fahrenheit & Celsius)
const temperatures = [
  32, 25, 70, 18, 80, 15, 72, 28, 68, 20, 
  75, 23, 82, 30, 65, 22, 77, 26, 78, 24, 
  73, 21, 79, 27, 71, 19, 74, 17, 76, 29
];

// 2️⃣ Conversion Functions
const fahrenheitToCelsius = (tempF) => ((tempF - 32) * 5) / 9;
const celsiusToFahrenheit = (tempC) => (tempC * 9) / 5 + 32;

// 3️⃣ Separate Fahrenheit and Celsius Values
const fahrenheitTemps = temperatures.filter((_, index) => index % 2 === 0); // Every even index is Fahrenheit
const celsiusTemps = temperatures.filter((_, index) => index % 2 !== 0); // Every odd index is Celsius

// 4️⃣ Convert Fahrenheit to Celsius
const convertedFahrenheitToCelsius = fahrenheitTemps.map(fahrenheitToCelsius);

// 5️⃣ Convert Celsius to Fahrenheit
const convertedCelsiusToFahrenheit = celsiusTemps.map(celsiusToFahrenheit);

// 6️⃣ Combine Converted Temperatures
const allTempsInCelsius = [...celsiusTemps, ...convertedFahrenheitToCelsius]; // Ensures all temps are in Celsius
const allTempsInFahrenheit = [...fahrenheitTemps, ...convertedCelsiusToFahrenheit]; // Ensures all temps are in Fahrenheit

// 7️⃣ Sum Up All Temperatures
const tot_temperature_in_celsius = allTempsInCelsius.reduce((sum, temp) => sum + temp, 0);
const tot_temperature_in_fahrenheit = allTempsInFahrenheit.reduce((sum, temp) => sum + temp, 0);

// 8️⃣ Calculate Averages
const avg_temperature_in_celsius = tot_temperature_in_celsius / allTempsInCelsius.length;
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / allTempsInFahrenheit.length;

// 9️⃣ Fix Floating Point Precision
const formatted_tot_temperature_in_fahrenheit = parseFloat(tot_temperature_in_fahrenheit.toFixed(2));
const formatted_tot_temperature_in_celsius = parseFloat(tot_temperature_in_celsius.toFixed(2));
const formatted_avg_temperature_in_fahrenheit = parseFloat(avg_temperature_in_fahrenheit.toFixed(2));
const formatted_avg_temperature_in_celsius = parseFloat(avg_temperature_in_celsius.toFixed(2));

// ✅ Debugging Logs (Verify Fixed Values)
console.log("Total Temperature in Fahrenheit:", formatted_tot_temperature_in_fahrenheit);
console.log("Total Temperature in Celsius:", formatted_tot_temperature_in_celsius);
console.log("Average Temperature in Fahrenheit:", formatted_avg_temperature_in_fahrenheit);
console.log("Average Temperature in Celsius:", formatted_avg_temperature_in_celsius);

// 10️⃣ Export Variables for Testing
module.exports = {
  tot_temperature_in_fahrenheit: formatted_tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius: formatted_tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit: formatted_avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius: formatted_avg_temperature_in_celsius
};
