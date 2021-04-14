/* ↓ ORDER-CONFIRMED ↓ */
if (sessionStorage.getItem("order_id") != null) {
	/* Affichage des données contenu dans la SessionStorage (numéro et prix de commande et adresse de livraison) */
	const orderIdConfirm = newValue("order-id", {}, sessionStorage.getItem("order_id"));
	const totalPriceConfirm = newValue("total-price-confirm", {}, sessionStorage.getItem("orderTotalPrice"));
	const adressConfirm = newValue(
		"adress-confirm",
		{},
		sessionStorage.getItem("firstName") + " " + sessionStorage.getItem("lastName") + ", " + sessionStorage.getItem("address") + ", " + sessionStorage.getItem("city") + ", " + sessionStorage.getItem("zip")
	);

	/* Appel de la fonction qui va effacer les local et session storage */
	clearLocalStorage();
} else {
	/* Suppression du HTML de "order-container" */
	orderContainer.remove();

	const errorRow = newElement("div", order, { class: "row" });
	const errorContainer = newElement("div", errorRow, { class: "col-12 alert alert-danger text-center" });
	const errorText = newElement("h1", errorContainer, { class: "h2" }, "Erreur, votre commande n'a pas été confirmée");
	const errorBacklinkContainer = newElement("div", errorContainer, { class: "col-12" });
	const errorBacklink = newElement("a", errorBacklinkContainer, { class: "h3", href: "index.html" }, "Retourner à l'accueil");
}
/* ↑ ORDER-CONFIRMED ↑ */
