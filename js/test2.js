/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables * 
*/

let sections = document.querySelectorAll('section');

let navbar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const isInViewport = (elem) => {
	const bounding = elem.getBoundingClientRect();
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

sections.forEach((section) => {
	let navMenu = document.createElement('li');
	let anchor = document.createElement('a');

	anchor.href = `#${section.id}`;
	anchor.innerText = section.dataset.nav;
	anchor.classList.add('menu__link');
	anchor.onclick = () => {
		const activeElements = document.querySelectorAll('.active');
		activeElements.forEach((elem) => elem.classList.remove('active'));
		anchor.classList.add('active');
		section.classList.add('your-active-class'); // remove this like we removed active above
	};

	// anchor.onscroll = () => {
	// 	sections.forEach((section) => {
	// 		if (isInViewport(section)) {
	// 			section.classList.add('your-active-class');
	// 		} else {
	// 			section.classList.remove('your-active-class');
	// 		}
	// 	});
	// };

	navMenu.appendChild(anchor);
	navbar.appendChild(navMenu);
	// navbar.appendChild(navMenu);
});

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

window.addEventListener('scroll', function scrolling() {
	sections.forEach((section) => {
		if (isInViewport(section)) {
			section.classList.add('your-active-class');
		} else {
			section.classList.remove('your-active-class');
		}
	});
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
