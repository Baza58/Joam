require('./style.scss');
import App from './app';	

	const tweets = new App({
		tabsContainer: document.querySelector('.testimonials-switcher'),
		tabsWindow: document.querySelector('.testimonials-content'),
		tabs: document.querySelectorAll('.testimonials'),
		tabsButtons: document.querySelectorAll('.testimonials-switch')
	});
	const testimonials = new App({
		tabsContainer: document.querySelector('.tweets-switcher'),
		tabsWindow: document.querySelector('.tweets-content'),
		tabs: document.querySelectorAll('.tweets'),
		tabsButtons: document.querySelectorAll('.tweets-switch')
	});
	
	tweets.init();
	testimonials.init();
