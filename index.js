const inputValue = window.document.querySelector("#inputValue")
const btnValue = window.document.querySelector("#btnValue")
const imgQrCode = window.document.querySelector("#imgQrCode")
const wrapper = window.document.querySelector(".wrapper")
let valueDefault = ""

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

btnValue.addEventListener("click", () => {
    let qrCodeValue = inputValue.value.trim() // o trim() remove todos os espacos que o utilizador adicionar
    if (!qrCodeValue || qrCodeValue === valueDefault) {
        return
    } else {
        valueDefault = qrCodeValue
    }

    btnValue.innerText = "Gerando QR Code..."

    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`

    imgQrCode.addEventListener("load", () => {
        wrapper.classList.add("active")
        btnValue.innerText = "Gerar QR Code"
    })
})