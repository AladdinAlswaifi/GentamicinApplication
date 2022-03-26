/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


function ShowIndications(){
    var  e = document.getElementById("ContraIndication");
    var Cindication = e.options[e.selectedIndex].value;

    if (Cindication == "None" ) {
        document.getElementById("Special-indications").style.visibility="visible";
        document.getElementById("Warning").style.visibility="hidden";
    } else {
        document.getElementById("Special-indications").style.visibility="hidden";
        document.getElementById("Warning").style.visibility="visible";
    }
}







function Calculate(){
    var height = document.getElementById("h-input").value;
    var weight = document.getElementById("w-input").value;
    var Age = document.getElementById("A-input").value;
    var Creatinine = document.getElementById("C-input").value;
    var result = parseFloat(weight) /(parseFloat(height)/100)**2;

    document.getElementById("bmi-status").innerHTML = Cindication;
    document.getElementById("bmi-output").innerHTML = result;
}