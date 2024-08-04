const path = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
let image = document.getElementsByTagName('div')[1];
let card = document.getElementsByTagName('div')[0];
let input;

document.getElementById('button').addEventListener('click',()=>{
    input = document.getElementsByTagName('input')[0].value;
    card.style.display = 'none';
    image.style.display = 'block';
    image.style.position = 'absolute';
    image.style.top = '50%';
    image.style.left = '50%';
    image.style.transform = 'translate(-50%,-50%)';
    
    document.getElementById('imageTitle').innerHTML = input;
    document.getElementsByTagName('img')[0].src = path + input;
    
})

document.getElementById('svg').addEventListener('click',()=>{
    image.style.display = 'none';
    card.style.display = 'block';
    document.getElementsByTagName('input')[0].value = '';
})