let btnGerar = document.querySelector("#gerar-qr")
let box = document.querySelector(".box")
let divQrCode = document.querySelector(".qr-code")


function gerarCodigoQr() {

    let linkInput = document.querySelector("#campo-qr").value; /* pegando valor digitado no input para variavel */

    box.innerHTML= ""

    if(linkInput.trim() !=""){
        
        var qrcode = new QRCode(box, {
            text: linkInput,
            width: 200,
            height: 200,
        });

        setTimeout(() => {
            
            const img = box.querySelector("img")
            const download = document.querySelector("#download")
        
            download.href = img.src
            
        }, 300);

    divQrCode.classList.add("display-hidden")




    }
    else{
        divQrCode.classList.remove("display-hidden")
        alert("Campo vazio!")
    }
}

btnGerar.addEventListener("click", gerarCodigoQr)

