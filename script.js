
const heroSection = document.getElementById('hero');
const images = [
  'img/jakob-owens-kbd1oAf-9Ms-unsplash.jpg',
  'img/kevin-schmid-FcT1Lcikwho-unsplash.jpg',
  'img/peter-stumpf-yk9VXp4W5-Q-unsplash.jpg',
  'img/kal-visuals-DqmXihYx5UE-unsplash.jpg'
];
let index = 0;

function preloadImage(src) {
  const img = new Image();
  img.src = src;
}

function rotateBackground() {
  index = (index + 1) % images.length;
  const nextImage = images[index];
  preloadImage(nextImage);
  heroSection.style.transition = 'background-image 1s ease-in-out';
  heroSection.style.backgroundImage = 'url(' + nextImage + ')';
}

// Inicial
heroSection.style.backgroundImage = 'url(' + images[0] + ')';
setInterval(rotateBackground, 6000);
