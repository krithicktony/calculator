let displa = document.getElementById("box")
function display(input){
    displa.value += input;
}
function displayo(){
    displa.value=""
}
function calculate(){
    try{
        displa.value = eval(displa.value)
    }
    catch(error){
        displa.value = 'error'
    }
}