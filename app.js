let displays = document.getElementById("display");

function clickV(value){
  displays.value += value;
}
function clearDisplay(){
  displays.value = "";
}
function calculate (){
  try{
    displays.value= eval(displays.value)
  } catch(error) {
    displays.value = "Error";
  }
}