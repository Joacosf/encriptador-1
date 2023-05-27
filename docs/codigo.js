const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const texto = document.getElementById("texto");
const copiar = document.querySelector(".copiar");

btnEncriptar.addEventListener("click", ()=> {
    
    const inputText = document.querySelector(".input").value.toLowerCase();

    txt = inputText.replace(/a/igm,"arx");
    var txt = txt.replace(/e/igm,"elv");
    var txt = txt.replace(/i/igm,"int");
    var txt = txt.replace(/o/igm,"ovr");
    var txt = txt.replace(/u/igm,"und");

    texto.innerHTML = txt;
});


btnDesencriptar.addEventListener("click", () =>{
    const inputText = document.querySelector(".input").value.toLowerCase();

    var txt = inputText.replace(/arx/igm,"a");
    var txt = txt.replace(/elv/igm,"e");
    var txt = txt.replace(/int/igm,"i");
    var txt = txt.replace(/ovr/igm,"o");
    var txt = txt.replace(/und/igm,"u");

    texto.innerHTML = txt;
});

copiar.addEventListener("click", () =>{

    navigator.clipboard.writeText(texto.value);
    alert("texto copiado");
})
