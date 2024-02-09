//trig calculator
//setting up variable
var calc = document.getElementById("calc");
var otpt = document.getElementById("answer");

//event listener
document.getElementById("calc").addEventListener("click", ans);

function ans() {
  var Aval = +document.getElementById("Avalue").value;
  var Bval = +document.getElementById("Bvalue").value;
  var nom = Math.sqrt(Aval ** 2 + Bval ** 2);
  nom = Math.round(nom);
  otpt.innerHTML = nom;
  console.log(nom);
}
