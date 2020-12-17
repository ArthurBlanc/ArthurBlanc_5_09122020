/* ↓ VARIABLES ↓ */
const cardContainer = document.getElementById("card-container");
const itemNumberNav = document.getElementById("item-number-nav");

const pageTitle = document.getElementById("title");
const item = document.getElementById("item");
const itemContainer = document.getElementById("item-container");
const selectColor = document.getElementById("select-color");
/* ↑ VARIABLES ↑ */

/* ↓ FUNCTIONS ↓ */
/* Fonction affichant le nombre d'article dans le panier dans la barre de navigation */
const numberItemInCartNav = () => {
	if (localStorage.length !== 0) {
		itemNumberNav.textContent = localStorage.length;
	}
};

/* Fonction permettant de creer des élements avec leurs attributs et contenus */
const newElement = (type, parent, attributes, ...contents) => {
	const element = document.createElement(type);
	parent.appendChild(element);
	for (key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
	contents.forEach((content) => {
		if (typeof content === "string") {
			element.appendChild(document.createTextNode(content));
		} else {
			element.appendChild(content);
		}
	});
	return element;
};

/* Fonction permettant d'ajouter des attributs et contenus */
const newValue = (id, attributes, text) => {
	const element = document.getElementById(id);
	for (key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
	element.textContent = text;
	return element;
};
/* ↑ FUNCTIONS ↑ */

/* ↓ NAV ↓ */
numberItemInCartNav();
/* ↑ NAV ↑ */
