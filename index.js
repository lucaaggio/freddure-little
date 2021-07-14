let random = Math.floor(Math.random() * 41);
console.log(random);

fetch("frasi.json")
  .then((response) => response.json())
  .then((json) => {
    let frase = json.frasi[random].barzelletta;
    document.getElementById("frase").innerHTML = frase;
  })
  .catch((error) => console.log("Oh oh, problema"));
