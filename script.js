var temp = document.getElementById("temp");
var humid = document.getElementById("humid");
// var press = document.getElementById("press");
var wind = document.getElementById("wind");
let button = document.getElementById("button");

const calc = (temp, humid/*, press*/, wind) => {
    const kmhwind = wind / 3.6; // Wind needs to be converted to m/s since the formula and calculations are made for that unit
    const waterVapourPressure = ((humid / 100) * 6.105) * Math.exp(17.27 * temp / (237.7 + temp)); // I could have added a field asking for the water vapour pressure directly but I prefer to proceed like that
    const ATC = temp + (0.33 * waterVapourPressure) - (0.7 * kmhwind) - 4.00; // Calculation in degrees Celcius
    const ATF = (ATC * (9/5)) + 32; // Convert result from ATC to degrees Fahrenheit
    console.log({ ATC, ATF });
    return { ATC, ATF };
};

button.addEventListener("click", (e) => {
  e.preventDefault(); // prevent form submission
  if (temp.value.length < 1 || humid.value.length < 1 || wind.value.length < 1) {
    console.log("Error: Make sure you input values on all fields!");
    alert("Error: Make sure you input values on all fields!");
  } else {
    console.log("form successfully submitted");
    var result = calc(parseFloat(temp.value), parseFloat(humid.value)/*, parseFloat(press.value)*/, parseFloat(wind.value));
    console.log(result.ATC + "°C\n" + result.ATF + "°F");
    const snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = result.ATC + "°C\n" + result.ATF + "°F";
    showNotif();
  }
});

function showPopup() {
  var popup = document.getElementById("sourcesp");
  popup.classList.toggle("show");
}

function showNotif() {
  var a = document.getElementById("snackbar");
  a.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 5000);
}