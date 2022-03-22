/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

  




function Calculate(){
    var height = document.getElementById("h-input").value;
    var weight = document.getElementById("w-input").value;
    var Age = document.getElementById("A-input").value;
    var Creatinine = document.getElementById("C-input").value;

    var e = document.getElementById("ContraIndication");
	var Cindication = e.options[e.selectedIndex].text;

    var result = parseFloat(weight) /(parseFloat(height)/100)**2;

    document.getElementById("bmi-status").innerHTML = Cindication;
    document.getElementById("bmi-output").innerHTML = result;
}