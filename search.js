//calulate for a

var otpt2 = document.getElementById("ans2");

//event lstneer
document.getElementById("calc2").addEventListener("click", ans2);

function ans2() {
  var Bval2 = +document.getElementById("Bvalue2").value;
  var Cval2 = +document.getElementById("Cvalue2").value;
  var nom2 = Math.sqrt(Cval2 ** 2 - Bval2 ** 2);
  nom2 = Math.round(nom2);
  otpt2.innerHTML = nom2;
  console.log(nom2);
}
