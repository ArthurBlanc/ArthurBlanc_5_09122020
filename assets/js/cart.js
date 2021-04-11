/* ↓ CART ↓ */
/* Si le panier est vide = ne pas afficher le formulaire et afficher un message indiquant que le panier est vide */
if (!localStorage.length) {
	cart.remove();
	const emptyCartContainer = newElement("div", main, { class: "container" });
	const emptyCartRow = newElement("div", emptyCartContainer, { class: "row" });
	const emptyCartCol1 = newElement("div", emptyCartRow, { class: "col-12 alert alert-danger text-center" });
	const emptyCartTitle = newElement("h1", emptyCartCol1, { class: "h2" }, "Votre panier est vide");
	const emptyCartCo2 = newElement("div", emptyCartCol1, { class: "col-12" });
	const emptyCartParagraph = newElement("p", emptyCartCo2, { class: "h3" });
	const emptyCartBackToHomepageLink = newElement("a", emptyCartParagraph, { href: "/" }, "Retourner à l'accueil");
} else {
	/* Boucle générateur HTML pour chaque article dans le panier */
	for (let i = 0; i < localStorage.length; i++) {
		let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
		products.push(data.id); /* Envoie les articles du panier dans le tableau "products" qui sera envoyer au serveur à la confirmation de la commande */
		totalPrice += parseInt(data.priceForAll);
		sessionStorage.setItem("orderTotalPrice", totalPrice);

		const itemNumber = newValue("item-number", {}, localStorage.length); /* Affiche le nombre d'article dans le panier */
		const totalPriceInCart = newValue("total-price", {}, totalPrice + " €"); /* Affiche le prix total de la commande */

		const cartLi = newElement("li", cartContainer, { class: "list-group-item d-flex justify-content-between lh-condensed" });
		const liBody = newElement("div", cartLi, {});
		const cartItemTitle = newElement("h3", liBody, { class: "my-0 h6" });
		const cartItemLink = newElement("a", cartItemTitle, { href: "item.html?id=" + data.id }, data.name);
		const cartItemDetails = newElement("small", liBody, { class: "text-muted" }, data.pricePerUnit + " € x" + data.quantity + " " + data.colorSelected);
		const cartItemPriceForAll = newElement("span", cartLi, { class: "text-muted" }, data.priceForAll + " €");
		const cartButtonRemoveItem = newElement("button", cartItemPriceForAll, { type: "button", class: "close", "aria-label": "Close", onclick: "removeItem('" + data.id + data.colorSelected + "')" });
		const cartButtonRemoveItemAria = newElement("span", cartButtonRemoveItem, { "aria-hidden": "true" });
		cartButtonRemoveItemAria.innerHTML += `&times;`;
	}

	/* Ajoute la classe "was-validated" au clic sur le bouton "Valider" du code promo, ce qui va afficher l'input en rouge avec un message d'erreur */
	btnCoupon.addEventListener("click", function () {
		couponForm.classList.add("was-validated");
	});

	/* Appel des fonctions de formatage des inputs "Numéro de carte bancaire" et "Date d'expiration" au chargement de la page */
	onload = function () {
		ccNumber.oninput = function () {
			this.value = cc_format(this.value);
		};
		ccExpiration.oninput = function () {
			this.value = cc_expiration(this.value);
		};
	};

	/* Ajoute la classe "was-validated" au clic sur le bouton "Confirmer votre commande", ce qui va afficher les inputs validés en vert et ceux non validés en rouge avec un message d'erreur */
	btnOrder.addEventListener("click", function () {
		orderForm.classList.add("was-validated");
	});

	/* Envoi les données au serveur lors du submit du formulaire */
	orderForm.addEventListener("submit", function (e) {
		e.preventDefault(); /* Empêche le formulaire d'envoyer les données tant qu'elle n'ont pas été validées */

		/* Récupération des valeurs entrées par l'utilisateur */
		let contact = {
			firstName: firstName.value,
			lastName: lastName.value,
			address: address.value,
			city: city.value,
			email: email.value,
		};
		/* Rempli "order" avec les données de "contact" et "products"*/
		let order = { contact, products };

		/* Appel de la fonction permant l'envoie des données au serveur */
		sendFormData(order);
	});
}
/* ↑ CART ↑ */
