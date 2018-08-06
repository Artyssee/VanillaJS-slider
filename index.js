let slides = document.querySelectorAll('.slide');
let sliderBulletContainer = document.querySelector('.slide__bullet--container');
let sliderBullets = document.getElementsByClassName('slide__bullet');
let autoPlayButton = document.getElementsByClassName('slider-container__sliderbutton--playpause')[0];
let slideButtonLeft = document.querySelector('.slider-container__sliderbutton--left');
let slideButtonRight = document.querySelector('.slider-container__sliderbutton--right');
let currentSlide = 0;
var AutomatedSlides;

function AutomatedSlides() {
	navSlide('next');
}

autoPlayButton.addEventListener('click', function() {
	if (autoPlayButton.innerHTML === '<i class="fas fa-play-circle fa-2x"></i>') {
		AutomatedSlides = setInterval(AutomatedSlides, 3000);
		autoPlayButton.innerHTML = '<i class="fas fa-pause-circle fa-2x"></i>';
	} else {
		clearInterval(AutomatedSlides);
		autoPlayButton.innerHTML = '<i class="fas fa-play-circle fa-2x"></i>';
	}
});

for (let i = 0; i < slides.length; i++) {
	sliderBulletContainer.insertAdjacentHTML('beforeend', `<div class="slide__bullet slide-bullet-${i}"></div>`);

	slides[i].addEventListener('click', function() {
		clearSlideActive(slides);
		slides[i].classList.add('slide--active');
	});
}

let startingBullet = document.querySelector(`.slide-bullet-0`);
startingBullet.classList.add('slide__bullet--active');

for (let i = 0; i < sliderBullets.length; i++) {
	sliderBullets[i].addEventListener('click', function() {
		clearClassActive(sliderBullets);
		clearSlideActive(slides);
		sliderBullets[i].classList.add('slide__bullet--active');
		let currentSlide = document.querySelector(`.slide-${i}`);
		currentSlide.classList.add('slide--active');
	});
}

slideButtonRight.addEventListener('click', function() {
	navSlide('next');
});

slideButtonLeft.addEventListener('click', function() {
	navSlide('prev');
});

function clearClassActive(sliderBullets) {
	for (let i = 0; i < sliderBullets.length; i++) {
		sliderBullets[i].classList.remove('slide__bullet--active');
	}
}

function clearSlideActive(slides) {
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('slide--active');
	}
}

function navSlide(prevOrNext) {

	clearClassActive(sliderBullets);
	clearSlideActive(slides);
	
	if (prevOrNext === 'next') {
		currentSlide++;

		if (currentSlide === slides.length) {
			currentSlide = 0;
		}
	} else {
		currentSlide--;

		if (currentSlide < 0) {
			currentSlide = slides.length - 1;
		}
	}

	let activeSlide = document.querySelector(`.slide-${currentSlide}`);
	activeSlide.classList.add('slide--active');
	let activeBullet = document.querySelector(`.slide-bullet-${currentSlide}`);
	activeBullet.classList.add('slide__bullet--active');
}
