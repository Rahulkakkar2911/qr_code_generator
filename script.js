const container = document.querySelector('.container');
const generatorBtn = document.querySelector('.form button');
const qrInput = document.querySelector('.form input');
const qrImg = document.querySelector('.qr-code img');

generatorBtn.addEventListener('click', ()=>{
    let qrValue = qrInput.value.trim();
    if(!qrValue) return;
    generatorBtn.innerHTML = "Generating QR Code..."
    generatorBtn.classList.add('active');
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&size=180x180`;
    qrImg.addEventListener('load', () =>{
        generatorBtn.classList.remove('active');
        container.classList.add('active');
        generatorBtn.innerHTML = "Generate QR Code";
    })
    
});
qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        container.classList.remove('active');
    }
})