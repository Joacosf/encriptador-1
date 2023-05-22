const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const texto = document.getElementById("texto");

btnEncriptar.addEventListener("click", ()=> {
    
    const inputText = document.querySelector(".input").value.toLowerCase();

    txt = inputText.replace(/a/img,"airx");
    var txt = txt.replace(/e/img,"elvus");
    var txt = txt.replace(/i/img,"inti");
    var txt = txt.replace(/o/img,"over");
    var txt = txt.replace(/u/img,"under");

    document.querySelector(".input").textContent = "mensaje encriptado";
    texto.innerHTML = txt;
});

btnDesencriptar.addEventListener("click",() =>{

    const inputText = document.querySelector(".input").value.toLowerCase();

    var txt = inputText.replace(/airx/img,"a");
    var txt = txt.replace(/elvus/img,"e");
    var txt = txt.replace(/inti/img,"i");
    var txt = txt.replace(/over/img,"o");
    var txt = txt.replace(/under/img,"u");

    texto.innerHTML = txt;

});
