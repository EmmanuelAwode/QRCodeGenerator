let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
/**
 * Generates a QR code based on the provided text or URL.
 * 
 * @function generateQRCode
 * @returns {void}
 */
function generateQRCode() {
    
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");

    setTimeout(() => {
            alert("QR Code generated successfully!");
        }, 1000); 

    }
    else{
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.claasslist.remove('error');
        }, 1000);   

        setTimeout(() => {
            alert("Please enter some text or URL");
        }, 1000); 
    }
}
