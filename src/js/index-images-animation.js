const animationImage = document.getElementById('animated-image');

let imageCount = 3;
let imageNumber = 1;
let imageSrc = './src/img/intro-img' + imageNumber + '.jpg';
const imageBtn = document.getElementsByClassName('intro-images__item');

function getImageSrc(){
    if (imageNumber < imageCount) {
        imageNumber++;
    } else if (imageNumber >= imageCount){
        imageNumber = 1;
    }
    imageSrc = './src/img/intro-img' + imageNumber + '.jpg';
};

function changeBtnColor() {
    for (let i = 0; i < imageCount; i++) {
        imageBtn[i].classList.remove("active");
    };
    imageBtn[imageNumber-1].classList.add('active');
}

function changeImage(){
    getImageSrc();
    changeBtnColor();
    animationImage.src = imageSrc;
};

setInterval(changeImage, 4000);
