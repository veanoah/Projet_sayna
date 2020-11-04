function getValue() {
  var valeurText = document.getElementById("txt").value;
  console.log(valeurText);
  if (valeurText == "") {
    alert("Veuillez remplir le champ de saisi!")
  } else {
    var afficherResulat = document.getElementById('message');
    afficherResulat.innerHTML = "";
    var textReverse = valeurText.split('').reverse().join('');
    console.log(textReverse);
    afficherResulat.innerHTML = "L\' inverse est = " + textReverse;
  }

}
