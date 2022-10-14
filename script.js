(function(){
	let stylesheet = document.createElement('link');
		stylesheet.setAttribute('href','https://hou-public.s3.amazonaws.com/shared/shop-jaygup.css');
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
