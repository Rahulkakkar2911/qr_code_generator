const container = document.querySelector('.container');
const generatorBtn = document.querySelector('.form button');
const qrInput = document.querySelector('.form input');
const qrImg = document.querySelector('.qr-code img');

generatorBtn.addEventListener('click',async ()=>{
    let qrValue = qrInput.value.trim();
    if(!qrValue) return;
    generatorBtn.innerHTML = "Generating QR Code..."
    let newIMGURL = await `https://api.qrserver.com/v1/create-qr-code/?data=${qrValue}&size=200x200`  
    qrImg.src = await newIMGURL;
    console.log(qrValue);
    container.classList.add('active');
    generatorBtn.innerHTML = "Generate QR Code";
});
qrInput.addEventListener("keyup", ()=>{
    if(!qrInput.value){
        container.classList.remove('active');
    }
})