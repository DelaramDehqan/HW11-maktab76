
var imgs = ['https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg', 
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg', 
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg', 
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg',
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg',
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg',
'https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg'];
var container = document.getElementById('imageContainer');

for (var i = 0, j = imgs.length; i < j; i++) {
var img = document.createElement('img');
img.src = imgs[i];
container.appendChild(img);
}