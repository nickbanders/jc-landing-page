let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

(function(){
	let stylesheet = document.createElement('link');
		stylesheet.setAttribute('href','https://raw.githubusercontent.com/nickbanders/jc-landing-page/main/style.css');
		stylesheet.setAttribute('rel','stylesheet');
		stylesheet.setAttribute('type','text/css');
	
	let video = document.createElement('video');
		video.setAttribute('src','https://hou-public.s3.amazonaws.com/shared/josh_christopher_x_rockets_line.mp4');
		video.classList.add('hero');
		video.autoplay = 'autoplay';
		video.muted = 'muted';
		video.controls = 'controls';

	document.querySelector('head').appendChild(stylesheet);
	document.querySelector('.custom-content').prepend(video);	
}());
