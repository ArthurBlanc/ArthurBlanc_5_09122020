![Orinoco](/assets/img/orinoco-logo.png)

# Orinoco 🐻🛍️

[![forthebadge](https://forthebadge.com/images/badges/validated-html5.svg)](https://validator.w3.org/nu/?doc=https%3A%2F%2Farthurblanc.github.io%2FOrinoco%2F)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Farthurblanc.github.io%2FOrinoco%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=fr)
![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/ArthurBlanc)

[Site live](https://arthurblanc.github.io/Orinoco/) - <a href="#description-fr-">README en Français</a> - <a href="#en-description">English README</a>

## Description FR :

Ceci est un projet réalisé dans le cadre du programme de formation Développeur Web chez [OpenClassrooms](https://openclassrooms.com/fr/paths/717-developpeur-web)

> Créez le MVP d'un site e-commerce en utilisant JavaScript pour convaincre de futurs investisseurs de miser sur votre entreprise !
>
> #### Compétences évaluées :
>
> -   Créer un plan de test pour une application 📝
> -   Gérer des événements JavaScript 🎮
> -   Interagir avec un web service avec JavaScript 🌐
> -   Valider des données issues de sources externes ✅

### Situation (fictive) du projet :

Développeur web dans une entreprise de commerce en ligne.

Afin de se démarquer de ses concurrents, l'entreprise décide de créer des applications thématiques ne vendant qu'un seul groupe de produits.

Mon rôle a été de créer le front-end du MVP (Minimum Viable Product) d'une de ces applications à l'aide de JavaScript et de réaliser un [plan de test](/ressources/plan_test.pdf).

### Cahier des charges :

-   L’application web doit être composée de 4 pages :
    -   Une page **_d'accueil_** référençant les articles en vente
    -   Une page **_produit_** affichant dynamiquement l'article sélectionné par le client, celui-ci pourra choisir une personnalisation de l'article et l'ajouter au panier
    -   Une page **_panier_** contenant la liste des articles dans le panier, le prix total et un formulaire pour passer commande. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end.
    -   Une page de **_confirmation de commande_** remerciant le client pour sa commande, cette page doit indiquer le prix total et le numéro de commande envoyé par le serveur.
-   Dans un premier temps, il y aura une seule catégorie de produits parmi les propositions suivantes :
    -   Ours en peluche
    -   Caméras
    -   Meubles
-   Une suite de tests unitaires pour couvrir au minimum 80 % de la base de code pour le front-end doit être planifiée sous la forme d'un [plan de test](/ressources/plan_test.pdf) (sans obligation d’écrire ces tests).
-   Pour le MVP, la personnalisation du produit ne sera pas encore fonctionnelle : la page **_produit_** doit avoir un menu déroulant permettant de choisir une personnalisation, celle-ci ne sera ni envoyée au serveur ni reflétée dans la réponse du serveur.
-   Le code doit être indenté, commenté et utiliser des fonctions globales.
-   Concernant l’API, des promesses doivent être utilisées pour éviter les rappels.
-   Les inputs des utilisateurs doivent être validés avant l’envoi à l’API.

## Installation :

### Installation et lancement du back-end :

1. Cloner le repository du back-end :

-   `git clone https://github.com/ArthurBlanc/Orinoco-backend`

2. Installer toutes les dépendances pour le back-end :

-   `npm install` ou `yarn`

3. Lancer le back-end sur le port 3000 (port par défaut) :

-   `node server`

### Installation et lancement du front-end :

1. Téléchargez le dépôt en cliquant sur le bouton "Code" sur la page du dépôt et en sélectionnant "Download ZIP".

2. Extrayez le contenu du fichier ZIP dans un dossier sur votre ordinateur.

3. Ouvrez le dossier et double-cliquez sur le fichier HTML index pour le visualiser dans votre navigateur web (ou utilisez live-server sur Visual Studio Code, par exemple).

4. Pour effectuer des modifications, éditez les fichiers HTML, CSS ou JS à l'aide d'un éditeur de texte et enregistrez le fichier. Actualisez la page web dans votre navigateur pour voir la version mise à jour.

## Développé avec :

-   [Visual Studio Code](https://code.visualstudio.com/) - Éditeur de texte
-   [Sass](https://sass-lang.com/) - Préprocesseur CSS
-   [Bootstrap](https://getbootstrap.com/) - Collection d'outils utiles à la création du design de sites et d'applications web
-   [GitHub](https://github.com/) - Outil de gestion de versions
-   [GitHub Pages](https://pages.github.com/) - Outil d’hébergement
-   [Validateur W3C](https://validator.w3.org/) - Outils de détection des erreurs dans le code HTML et CSS

## Auteur :

**Arthur Blanc** : [**GitHub**](https://github.com/ArthurBlanc/) - [**Portfolio**](https://abcoding.fr/portfolio)

---

## EN Description:

This is a project carried out as part of the Web Developer training program at [OpenClassrooms](https://openclassrooms.com/en/paths/555-web-developer).

> Create the MVP of an e-commerce website using JavaScript to convince future investors to bet on your business!
>
> #### Skills evaluated:
>
> -   Create a test plan for an application 📝
> -   Manage JavaScript events 🎮
> -   Interact with a web service using JavaScript 🌐
> -   Validate data from external sources ✅
>
> ### Project (fictional) situation:

Web developer at an online commerce company.

In order to stand out from its competitors, the company decides to create themed applications selling only one group of products.

My role was to create the front-end of the MVP (Minimum Viable Product) of one of these applications using JavaScript and to create a [test plan (in French)](/ressources/plan_test.pdf).

### Specifications:

-   The web application must consist of 4 pages:
    -   A **_home_** page referencing the articles for sale
    -   A **_product_** page dynamically displaying the article selected by the customer, they can choose a customization of the article and add it to the cart
    -   A **_cart_** page containing the list of articles in the cart, the total price, and a form to place an order. The data from the form must be correct and well-formatted before being sent to the back-end.
    -   An **_order confirmation_** page thanking the customer for their order, this page must indicate the total price and the order number sent by the server.
-   Initially, there will be only one category of products from the following proposals:
    -   Teddy bears
    -   Cameras
    -   Furniture
-   A suite of unit tests covering at least 80% of the front-end codebase must be planned in the form of a [test plan (in French)](/ressources/plan_test.pdf) (without the obligation to write these tests).
-   For the MVP, the product customization will not yet be functional: the **_product_** page must have a dropdown menu to choose a customization, it will neither be sent to the server nor reflected in the server response.
-   The code must be indented, commented, and use global functions.
-   Regarding the API, promises must be used to avoid callbacks.
-   User inputs must be validated before being sent to the API.

## Installation:

### Installing and launching Back-end:

1. Clone the back-end repository:

-   `git clone https://github.com/ArthurBlanc/Orinoco-backend`

2. Install all dependencies for Back-end:

-   `npm install` or `yarn`

3. Launch back-end on port 3000 (default port):

-   `node server`

### Installing and launching Front-end:

1. Download the repository by clicking on the "Code" button on the repo page and selecting "Download ZIP."

2. Extract the contents of the ZIP file to a folder on your computer.

3. Open the folder and double-click on the index HTML file to view it in your web browser (or use live-server on Visual Studio Code for example).

4. To make changes, edit the HTML, CSS or JS files using a text editor and save the file. Refresh the web page in your browser to see the updated version.

That's it!

## Built With:

-   [Visual Studio Code](https://code.visualstudio.com/) - Text editor
-   [Sass](https://sass-lang.com/) - CSS preprocessor
-   [Bootstrap](https://getbootstrap.com/) - Collection of tools useful for creating the design of websites and web applications
-   [GitHub](https://github.com/) - Version control tool
-   [GitHub Pages](https://pages.github.com/) - Hosting tool
-   [W3C Validator](https://validator.w3.org/) - Tools for detecting errors in HTML and CSS code

## Author:

**Arthur Blanc**: [**GitHub**](https://github.com/ArthurBlanc/) - [**Portfolio**](https://abcoding.fr/portfolio)
