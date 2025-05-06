// script.js


function scrollToSection(sectionID) {
	const element = document.getElementById(sectionID);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
	else {
		console.error(`Element with id "${sectionID}" not found.`);
	}
}
