/* ↓ ITEM ↓ */
fetch(`http://localhost:3000/api/teddies/${new URLSearchParams(window.location.search).get("id")}`)
	.then((response) => {
		/* Vérification serveur */
		if (response.ok) return response.json();
		else Promise.reject(response.status);
	})

	/* Si pas d'erreur affichage : */
	.then((data) => {
		/* Changement du titre de la page (nom article) */
		pageTitle.textContent = data.name + " - Orinoco";
		let price = data.price / 100;

		/* Generation HTML de la liste des couleurs */
		data.colors.forEach((color) => {
			const newOption = newElement("option", selectColor, { value: color }, color);
		});

		/* Ajout des informations de l'article */
		const itemImg = newValue("item-img", { src: data.imageUrl, alt: data.name });
		const itemName = newValue("item-name", {}, data.name);
		const itemPrice = newValue("item-price", {}, price);
		const itemDescription = newValue("item-description", {}, data.description);
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
		const errorText = newElement("h2", errorContainer, {}, "Erreur, article introuvable");
		const errorBacklinkContainer = newElement("div", errorContainer, { class: "col-12" });
		const errorBacklink = newElement("a", errorBacklinkContainer, { class: "h3", href: "index.html" }, "Retourner à l'accueil");
	});
/* ↑ ITEM ↑ */
