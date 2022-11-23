const exploreButton = document.getElementById("explore-button");
const nav = document.getElementsByTagName("nav")[0];
const hMenu = document.querySelector("nav > #hamburger-menu");

function main() {
	let menuActive = false;

	exploreButton.addEventListener("click", () => {
		let destination = exploreButton.getAttribute("destination");
		let destinationElement = document.querySelector(destination);

		if (destination != null && destinationElement != null) {
			window.scrollTo({
				top: destinationElement.offsetTop,
				behavior: "smooth",
			});
		}
	});

	hMenu.addEventListener("click", () => {
		menuActive = !menuActive;

		if (menuActive) {
			hMenu.classList.add("active");
		} else {
			hMenu.classList.remove("active");
		}
	});
}

let oldScroll = scrollY;

function scrollNav() {
	let value = scrollY;
	let scrolledVal = oldScroll - value;

	let heightToHide = parallax.offsetHeight * 0.7 ?? 350;

	if (Math.abs(scrolledVal) >= 120) {
		if (scrolledVal < 0) {
			if (!nav.classList.contains("hidden-nav")) {
				nav.classList.add("hidden-nav");
			}
		} else {
			if (nav.classList.contains("hidden-nav")) {
				nav.classList.remove("hidden-nav");
			}

			if (value >= heightToHide && !nav.classList.contains("background-nav")) {
				nav.classList.add("background-nav");
			} else if (
				value <= heightToHide &&
				nav.classList.contains("background-nav")
			) {
				nav.classList.remove("background-nav");
			}
		}

		oldScroll = value;
	}
}

addEventListener("DOMContentLoaded", main);
addEventListener("scroll", scrollNav);
