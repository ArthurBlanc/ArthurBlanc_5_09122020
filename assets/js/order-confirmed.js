/* ↓ ORDER-CONFIRMED ↓ */
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
/* ↑ ORDER-CONFIRMED ↑ */
