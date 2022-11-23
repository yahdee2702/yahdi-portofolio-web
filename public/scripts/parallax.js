let parallax = document.getElementById("parallax");

let moon = document.querySelector(
	"#parallax > #parallax-background > div#moon"
);
let mountain1 = document.querySelector(
	"#parallax > #parallax-background > div#mountain-1"
);
let mountain2 = document.querySelector(
	"#parallax > #parallax-background > div#mountain-2"
);
let mountain3 = document.querySelector(
	"#parallax > #parallax-background > div#mountain-3"
);
let foreground = document.querySelector(
	"#parallax > #parallax-background > div#foreground"
);

let content = document.querySelector("#parallax > #parallax-content");

function parallaxApply() {
	var value = window.scrollY;

	mountain1.style.top = value * 0.3 + parallax.offsetHeight * 0.25 + "px";
	mountain2.style.top = value * 0.1 + parallax.offsetHeight * 0.55 + "px";
	mountain3.style.top =
		value * 0.05 + parallax.offsetHeight * (70 / 100) + "px";
	foreground.style.top = -value * 0.35 + parallax.offsetHeight * 0.5 + "px";
	content.style.top = value * 0.25 + parallax.offsetHeight / 2 + "px";
	moon.style.left = value * 0.9 + parallax.offsetWidth / 2 + "px";
	moon.style.top = value * 0.7 + 50 + "px";
}

addEventListener("DOMContentLoaded", parallaxApply);
addEventListener("scroll", parallaxApply);
addEventListener("resize", parallaxApply);
