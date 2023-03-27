 let outputScreen=document.getElementById("output-screen");
function  Display(num){
  outputScreen.value=outputScreen.value+num;
}
function Calculate(){
  try{
    outputScreen.value=eval(outputScreen.value);
  }
  catch(error){
    alert("invalid");
  }
}
function Clear(){
  outputScreen.value="";
}
function Del(){
   outputScreen.value=outputScreen.value.slice(0,-1);
}