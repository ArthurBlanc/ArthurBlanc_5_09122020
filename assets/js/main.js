/* ↓ VARIABLES ↓ */
let apiUrl = location.hostname === "localhost" || location.hostname === "127.0.0.1" ? "http://localhost:3000" : "https://p5-backend-arthurblanc.herokuapp.com";

const cardContainer = document.getElementById("card-container");
const itemNumberNav = document.getElementById("item-number-nav");

const pageTitle = document.getElementById("title");
const item = document.getElementById("item");
const itemContainer = document.getElementById("item-container");
const selectColor = document.getElementById("select-color");
const btnAddToCart = document.getElementById("btnAddToCart");

const main = document.getElementById("main");
const cart = document.getElementById("cart");
const cartContainer = document.getElementById("cart-container");
const orderForm = document.getElementById("order-form");
const couponForm = document.getElementById("coupon-form");
const btnCoupon = document.getElementById("btn-coupon");
const ccNumber = document.getElementById("cc-number");
const ccExpiration = document.getElementById("cc-expiration");
const btnOrder = document.getElementById("btn-order");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const zip = document.getElementById("zip");
const email = document.getElementById("email");
let totalPrice = 0;
let products = [];
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
const newValue = (id, attributes, textContent) => {
	const element = document.getElementById(id);
	for (key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
	element.textContent = textContent;
	return element;
};

/* Fonction permettant de retirer des articles du panier */
const removeItem = (item) => {
	localStorage.removeItem(item);
	document.location.href = "cart.html";
};

/* Fonction permettant d'envoyer les données du formulaire ainsi que la liste des id des produits commandés via un fetch POST */
const sendFormData = (data) => {
	fetch(`${apiUrl}/api/teddies/order`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data), // Conversion des données au format JSON
	})
		.then((response) => {
			/* Vérification reponse serveur */
			if (response.ok) {
				/* Si pas d'erreur lecture de la réponse au format JSON */
				response.json().then((responseData) => {
					/* Envoi des données de la réponse serveur et de la commande dans le SessionStorage */
					sessionStorage.setItem("order_id", responseData.orderId);
					sessionStorage.setItem("firstName", firstName.value);
					sessionStorage.setItem("lastName", lastName.value);
					sessionStorage.setItem("address", address.value);
					sessionStorage.setItem("city", city.value);
					sessionStorage.setItem("zip", zip.value);

					/* Envoi de l'utilisateur sur la page order-confirmed.html */
					window.location.href = "order-confirmed.html";
				});
			} else Promise.reject(response.status);
		})
		/* Sinon affichage des erreurs dans la console */
		.catch((error) => console.log(error));
};

/* Fonction formatant le numéro de carte bancaire au format XXXX XXXX XXXX XXXX */
const cc_format = (value) => {
	var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
	var matches = v.match(/\d{4,16}/g);
	var match = (matches && matches[0]) || "";
	var parts = [];
	for (i = 0, len = match.length; i < len; i += 4) {
		parts.push(match.substring(i, i + 4));
	}
	if (parts.length) {
		return parts.join(" ");
	} else {
		return value;
	}
};

/* Fonction formatant la date d'expération des cartes bancaires au format MM/AA (1 à 12 pour le mois et 21 à 29 pour l'année) */
const cc_expiration = (value) => {
	var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
	var matches = v.match(/\d{2,4}/g);
	var match = (matches && matches[0]) || "";
	var parts = [];
	for (i = 0, len = match.length; i < len; i += 2) {
		parts.push(match.substring(i, i + 2));
	}
	if (parts.length) {
		return parts.join("/");
	} else {
		return value;
	}
};

/* Fonction vidant le LocalStorage et la SessionStorage */
const clearLocalStorage = () => {
	localStorage.clear();
	sessionStorage.clear();
};
/* ↑ FUNCTIONS ↑ */

/* ↓ NAV ↓ */
numberItemInCartNav();
/* ↑ NAV ↑ */
