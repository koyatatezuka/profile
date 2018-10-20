class Dom {
	constructor(element) {
		this.element = element;
	}

	addListenerMulti(eventNames, listener) {
		var events = eventNames.split(' ');
		for (var i = 0, iLen = events.length; i < iLen; i++) {
			this.element.addEventListener(events[i], listener, false);
		}
	}
}

(function() {
	const menuIcon = new Dom(document.querySelector('.menu'));
	const icon = new Dom(document.querySelector('.fa-bars'));
	const menuBox = new Dom(document.querySelector('.menu-box'));
	const backDrop = new Dom(document.querySelector('.backdrop'));
	const menuItems = new Dom(document.querySelectorAll('.menu-item'));

	// menu icon click events
	menuIcon.addListenerMulti('click mouseover', event => {
		const value = event.target.getAttribute('value');

		if (value === 'closed') {
			menuBox.element.setAttribute('style', 'transform: translateX(0%)');
			event.target.setAttribute('value', 'open');
			backDrop.element.setAttribute('style', 'display: block');
		} else if (value === 'open') {
			menuBox.element.setAttribute('style', 'transform: translateX(-100%)');
			event.target.setAttribute('value', 'closed');
			backDrop.element.setAttribute('style', 'display: none');
		}
	});

	// backdrop click/mouseenter toggle away side menu box
	backDrop.addListenerMulti('click mouseover', event => {
		menuBox.element.setAttribute('style', 'transform: translateX(-100%)');
		event.target.setAttribute('style', 'display: none');
		icon.element.setAttribute('value', 'closed');
	});

	// side bar link click

	menuItems.element.forEach(item => {
		item.addEventListener('click', event => {
			menuBox.element.setAttribute('style', 'transform: translateX(-100%)');
			backDrop.element.setAttribute('style', 'display: none');
			icon.element.setAttribute('value', 'closed');
		});
	});
})();
