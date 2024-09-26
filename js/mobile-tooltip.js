document.addEventListener("DOMContentLoaded", (event) => {
	function handler(e) {
		this.parentNode.parentNode
		.querySelector(".glossary-tooltip-content-mobile")
		.classList.toggle("glossary-show-tooltip");
		e.preventDefault();
	}
	function close_handler(e) {
		this.parentNode.classList.toggle("glossary-show-tooltip");
		e.preventDefault();
	}
	function set_mobile() {
		document.querySelector("body").classList.remove("glossary-mobile");
		document.querySelectorAll(".glossary-tooltip").forEach(selector => {
			let _selector = '';
			if ( selector.querySelector(".glossary-tooltip-content-mobile") !== null ) {
				_selector = selector.querySelector(".glossary-tooltip-content-mobile").classList;
				_selector.toggle("glossary-tooltip-content");
				_selector.toggle("glossary-tooltip-content-mobile");
			}
			if ( selector.querySelector(".glossary-tooltip-text-mobile") !== null ) {
				_selector = selector.querySelector(".glossary-tooltip-text-mobile").classList;
				_selector.toggle("glossary-tooltip-text");
				_selector.toggle("glossary-tooltip-text-mobile");
			}
			if ( window.matchMedia("(any-pointer: coarse)").matches ) {
				document.querySelector("body").classList.add("glossary-mobile");
				_selector = selector.querySelector(".glossary-tooltip-content").classList;
				_selector.toggle("glossary-tooltip-content");
				_selector.toggle("glossary-tooltip-content-mobile");
				_selector = selector.querySelector(".glossary-tooltip-text").classList;
				_selector.toggle("glossary-tooltip-text");
				_selector.toggle("glossary-tooltip-text-mobile");
				const addButton = Array.from(document.querySelector(".glossary-tooltip-content-mobile").children).filter(function (child) {
					return child.classList.contains("span.close");
				});
				if (
					addButton.length === 0 && selector.querySelectorAll('.glossary-mobile .glossary-tooltip-content-mobile .close').length === 0
				) {
					const span = document.createElement("span");
					span.classList.add('close');
					span.textContent = 'X';
					if ( document.querySelector("body.is-rtl") === null ) {
						selector.querySelector(".glossary-tooltip-content-mobile").prepend(span);
					} else {
						selector.querySelector(".glossary-tooltip-content-mobile").append(span);
					}
				}
			}
		});
		let selector = document.querySelectorAll('.glossary-mobile .glossary-tooltip-content-mobile .close');
		if (selector.length > 0) {
			selector.forEach(element => {
				element.addEventListener('click', close_handler);
			});
		}
		selector = document.querySelectorAll('.glossary-mobile .glossary-link a, .glossary-mobile .glossary-link span');
		if (selector.length > 0) {
			selector.forEach(element => {
				element.addEventListener('click', handler);
			});
		}
	}
	set_mobile();
	window.addEventListener('resize', function() {
		set_mobile();
	});
});
