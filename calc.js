var allinput = document.querySelectorAll("input")
for(i=0; i < allinput.length;i++){
      allinput[i].addEventListener("click", e =>{
            e.target.style.backgroundColor = "gold";
      })
      allinput[i].addEventListener("blur", e =>{
            e.target.style.backgroundColor = "unset";
      })
}


var plus = document.getElementById("plusresult");
function plusResult(){
      
      var p_1 = document.getElementById("plus1").value;
      var p_2 = document.getElementById("plus2").value;
      p_1 = parseInt(p_1);
      p_2 = parseInt(p_2);
      var plustotal = p_1 + p_2;
      plus.value = plustotal;
     
}

var minus = document.getElementById("minusresult");
function minusResult(){
      
      var mi_1 = document.getElementById("minus1").value;
      var mi_2 = document.getElementById("minus2").value;
      mi_1 = parseInt(mi_1);
      mi_2 = parseInt(mi_2);
      var minustotal = mi_1 - mi_2;
      minus.value = minustotal;
     
}

var multiply = document.getElementById("multiplyresult");
function multiplyResult(){
      
      var mu_1 = document.getElementById("multiplication1").value;
      var mu_2 = document.getElementById("multiplication2").value;
      mu_1 = parseInt(mu_1);
      mu_2 = parseInt(mu_2);
      var multiplicationtotal = mu_1 * mu_2;
      multiply.value = multiplicationtotal;
     
}


var divided = document.getElementById("divideresult");
function divideResult(){
      
      var d_1 = document.getElementById("divide1").value;
      var d_2 = document.getElementById("divide2").value;
      d_1 = parseInt(d_1);
      d_2 = parseInt(d_2);
      var dividedtotal = d_1 / d_2;
      divided.value = dividedtotal;
     
}



var modulo = document.getElementById("moduloresult");
function moduloResult(){
      
      var mo_1 = document.getElementById("modulo1").value;
      var mo_2 = document.getElementById("modulo2").value;
      mo_1 = parseInt(mo_1);
      mo_2 = parseInt(mo_2);
      var modulototal = mo_1 % mo_2;
      modulo.value = modulototal;
     
}