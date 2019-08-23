import Hd from './hd_logo.png';

function addImage(){
    const img = document.createElement('img');
    img.alt = 'Hanne Digital Logo';
    img.width = 300;
    img.src = Hd;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;