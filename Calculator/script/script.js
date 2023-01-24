function deleted(){
    document.getElementById('result').value = "";
}
function rakib(cal){
    document.getElementById("result").value +=  cal;  
}
function ans(){
    let answer = document.getElementById("result").value;
    let as = eval(answer);
    document.getElementById("result").value = as;
}
function deletedCaracter(){
    let x = document.getElementById("result").value;
    let p = x.length;
    let part = x.slice(0,(p-1));
    document.getElementById("result").value = part;
}