/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function ContraIndication() {
    
    var C_indication = document.getElementById("dropdown-content").value;
    if (C_indication = "None"){
        document.getElementById("bmi-status").innerHTML = "None";
    }
}
  




function Calculate(){
    var height = document.getElementById("h-input").value;
    var weight = document.getElementById("w-input").value;
    var Age = document.getElementById("A-input").value;
    var Creatinine = document.getElementById("C-input").value;


    var result = parseFloat(weight) /(parseFloat(height)/100)**2;

    if(!isNaN(result)){
        document.getElementById("bmi-output").innerHTML = result;
        if(result < 18.5){
            document.getElementById("bmi-status").innerHTML = "Underweight";
        }
        else if(result < 25){
            document.getElementById("bmi-status").innerHTML = "Healthy";
        }
        else if(result < 30){
            document.getElementById("bmi-status").innerHTML = "Overweight";
        }
        else{
            document.getElementById("bmi-status").innerHTML = "Obesity";
        }
    }
}