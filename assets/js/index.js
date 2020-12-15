/* ↓ INDEX ↓ */
fetch("http://localhost:3000/api/teddies")
	.then((response) => {
		/* Vérification serveur */
		if (response.ok) return response.json();
		else Promise.reject(response.status);
	})

	/* Si pas d'erreur afficher les cartes des articles */
	.then((data) => {
		/* Boucle générateur carte HTML pour chaque article */
		data.forEach((objet) => {
			const price = objet.price / 100;

			const itemCardCol = newElement("div", cardContainer, { class: "col-12 col-md-6 col-lg-4 mb-5" });
			const itemCard = newElement("article", itemCardCol, { class: "card text-center bg-light shadow" });
			const itemCardImgContainer = newElement("div", itemCard, { class: "embed-responsive embed-responsive-4by3" });
			const itemCardImg = newElement("img", itemCardImgContainer, { class: "card-img-top embed-responsive-item", src: objet.imageUrl, alt: objet.name });
			const itemCardBody = newElement("div", itemCard, { class: "card-body" });
			const itemCardLink = newElement("a", itemCardBody, { class: "stretched-link text-dark", href: "item.html?id=" + objet._id });
			const itemCardTitle = newElement("h2", itemCardLink, { class: "card-title" }, objet.name);
			const itemCardPrice = newElement("p", itemCardBody, { class: "card-text" }, price + " €");
		});
	})

	/* Sinon affichage d'un message d'erreur */
	.catch(function (error) {
		/* Block message d'erreur */
		const errorContainer = newElement("div", cardContainer, { class: "col-12 alert alert-danger text-center" });
		const errorText = newElement("h2", errorContainer, {}, "Une erreur est survenue, veuillez réessayer plus tard");
		const errorBacklinkContainer = newElement("div", errorContainer, { class: "col-12" });
		const errorBacklink = newElement("a", errorBacklinkContainer, { class: "h3", href: "index.html" }, "Retourner à l'accueil");
	});
/* ↑ INDEX ↑ */
