let images = ['images/corgi-boat.png', 'images/corgi-cute.png', 'images/corgi-cute.png', 'images/corgi-goggles.png', 'images/corgi-hotdog.png'];

let currentImgIndex = 0;

const mainImage = document.querySelector('#mainImage');

// console.log(mainImage);

mainImage.setAttribute('src', images[currentImgIndex]);

// console.log(mainImage);

const next = document.querySelector('.next');

// console.log(next);



next.addEventListener('click', () => {
  if (currentImgIndex >= images.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex += 1;
  }
  mainImage.setAttribute('src', images[currentImgIndex]);
})

const prev = document.querySelector('.prev');

// console.log(prev);

prev.addEventListener('click', () => {
  if (currentImgIndex <= 0) {
    currentImgIndex = images.length - 1;
  } else {
    currentImgIndex -= 1;
  }
  mainImage.setAttribute('src', images[currentImgIndex]);
})