const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDesencriptar = document.querySelector(".btnDesencriptar");
const inputText = document.querySelector(".inputText");
const texto = document.getElementById("texto");


btnEncriptar.addEventListener("click", ()=> {

    inputText.value.forEach(letra => {
        switch(letra){
            case "a":
                letra = "aix";
                break;
            case "b":
                letra = "eloy";
                break;
            case "i":
                letra = "inti";
                break;
            case "o":
                letra = "over";
                break;
            case "u":
                letra = "ulloa";
                break;
            default:
        }
        console.log(inputText);
    });
});
