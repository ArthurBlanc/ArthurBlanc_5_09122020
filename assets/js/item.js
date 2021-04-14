/* ↓ ITEM ↓ */
/* Requête fetch pour récuperer les détails d'un article avec son id (id récupéré dans l'url de la page) */
fetch(`${apiUrl}/api/teddies/${new URLSearchParams(window.location.search).get("id")}`)
	.then((response) => {
		/* Vérification serveur */
		if (response.ok) return response.json();
		else Promise.reject(response.status);
	})

	/* Si pas d'erreur : */
	.then((data) => {
		/* Changement du titre de la page (nom article) */
		pageTitle.textContent = data.name + " - Orinoco";
		let price = data.price / 100;

		/* Fonction permetant l'ajout d'article au panier (Local Storage) */
		const addToLocalStorage = () => {
			let quantity = document.getElementById("quantity");
			let itemDetails = {
				id: data._id,
				name: data.name,
				colorSelected: document.getElementById("select-color").value,
				quantity: quantity.value,
				priceForAll: price * quantity.value,
				pricePerUnit: price,
			};
			let cartItem = JSON.parse(localStorage.getItem(itemDetails.id + itemDetails.colorSelected));
			/* Vérifie si le panier contient deja l'article dans la couleur demandée, si c'est le cas la quantité est augmentée sinon l'article est ajouté au panier */
			if (cartItem !== null) {
				itemDetails.quantity = parseInt(itemDetails.quantity) + parseInt(cartItem.quantity);
				itemDetails.priceForAll = price * itemDetails.quantity;
			}
			localStorage[itemDetails.id + itemDetails.colorSelected] = JSON.stringify(itemDetails);
			numberItemInCartNav();
		};

		/* Generation HTML de la liste des couleurs */
		data.colors.forEach((color) => {
			const newOption = newElement("option", selectColor, { value: color }, color);
		});

		/* Ajout des informations de l'article */
		const itemImg = newValue("item-img", { src: data.imageUrl, alt: data.name });
		const itemName = newValue("item-name", {}, data.name);
		const itemPrice = newValue("item-price", {}, price);
		const itemDescription = newValue("item-description", {}, data.description);

		/* Bouton "ajouter au panier" avec EventListener (utilisation de la fonction "addToLocalStorage") */
		btnAddToCart.addEventListener("click", function () {
			addToLocalStorage();
		});
	})

	/* Sinon affichage d'un message d'erreur */
	.catch(function (error) {
		/* Changement du titre de la page (Article introuvable) */
		pageTitle.textContent = "Article introuvable - Orinoco";

		/* Suppression du HTML de "item-container" */
		itemContainer.remove();

		/* Block message d'erreur */
		const errorRow = newElement("div", item, { class: "row" });
		const errorContainer = newElement("div", errorRow, { class: "col-12 alert alert-danger text-center" });
		const errorText = newElement("h1", errorContainer, { class: "h2" }, "Erreur, article introuvable");
		const errorBacklinkContainer = newElement("div", errorContainer, { class: "col-12" });
		const errorBacklink = newElement("a", errorBacklinkContainer, { class: "h3", href: "index.html" }, "Retourner à l'accueil");
	});
/* ↑ ITEM ↑ */
