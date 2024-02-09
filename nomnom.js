//calulate for a

var otpt3 = document.getElementById("ans3");

//event lstneer
document.getElementById("calc3").addEventListener("click", ans3);

function ans3() {
  var Aval3 = +document.getElementById("Avalue3").value;
  var Cval3 = +document.getElementById("Cvalue3").value;
  var nom3 = Math.sqrt(Cval3 ** 2 - Aval3 ** 2);
  nom3 = Math.round(nom3);
  otpt3.innerHTML = nom3;
  console.log(nom3);
}
