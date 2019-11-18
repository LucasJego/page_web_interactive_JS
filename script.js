// ---------------------------------------------
// Fonctionnalité 1
//let footer = document.querySelectorAll("footer.text-muted")[0];
//console.log(footer)

//var fonction1 = function() {
//	console.log("clique");
//};

//footer.addEventListener("click", fonction1)



// Fonctionnalité 1-bis

// On cible le footer et on met cet objet dans la variable "footer"
let footer = document.querySelectorAll("footer.text-muted")[0];
console.log(footer)

// On définit un compteur qui est initialisé à 1
var i = 1

// On définit la fonction qui va afficher le n° du clic dans la console
var displayNumbClicks = function() {
	console.log(`clique numéro ${i}`)
	i += 1;
};

// On dit au navigateur d'exécuter la fonction 'displayNumbClicks' lorsque l'utilisateur clique 'click' sur l'objet 'footer'
footer.addEventListener("click", displayNumbClicks)




// ---------------------------------------------
// Fonctionnalité 2

// On cible le bouton déroulant (Hamburger Menu") de la navbar
let navbarHamburger = document.querySelector("button.navbar-toggler");
console.log(navbarHamburger)
console.log(navbarHamburger.classList)


// On définit la fonction qui va supprimer la classe 'collapse' de l'élément HTML portant l'id 'navbarHeader'
var deleteCollapseClass = function() {
	// On cible l'élément portant l'id 'navbarHeader'
	let navbarHeader = document.getElementById("navbarHeader")
	// On retire de la liste de ses classes la classe "collapse"
	navbarHeader.classList.toggle("collapse");
	// On affiche la liste de ses classes pour être sûr que la classe "collapse" a bien été supprimée
	console.log(navbarHeader.classList);
};

// On dit au navigateur d'exécuter la fonction 'deleteCollapseClass' lorsque l'utilisateur clique sur l'objet 'navbarHamburger'
navbarHamburger.addEventListener("click", deleteCollapseClass);




// ---------------------------------------------
// Fonctionnalité 3

// On cible le bouton "Edit" de la première card
let buttonEditCard1 = document.querySelector("button.btn.btn-sm.btn-outline-secondary");
console.log(buttonEditCard1)

// On définit la fonction qui va mettre le texte "Edit" de la première card en rouge si on clique dessus
var applyRed = function() {
	// On sélectionne le paragraphe à modifier (querySelector cible automatiquement le premier élément donc pas besoin de le préciser avec un '[0]' car cela renverrait une erreur)
	document.querySelector("p.card-text").style.color = "red";
	// ou : style = "color: red"
}

// On dit au navigateur d'exécuter la fonction 'applyRed' lorsque l'utilisateur clique sur l'objet 'boutonEditCard1'
buttonEditCard1.addEventListener("click", applyRed);




// ---------------------------------------------
// Fonctionnalité 4

// On cible le bouton "Edit" de la deuxième card
let buttonEditCard2 = document.querySelectorAll("button.btn.btn-sm.btn-outline-secondary")[1];

var applyGreenText = function() {
	// On cible le paragraphe contenant le texte de la 2ème card
  let secondCardText = document.querySelectorAll("p.card-text")[1];
  // Si aucune couleur n'a été définie pour ce texte (la couleur est la couleur par défaut,
  if (secondCardText.style.color == "") {
  	// On met le texte en vert
  	secondCardText.style.color = "green";
  } else {
  	// Sinon, on met la couleur par défaut
  	secondCardText.style.color = "";
  }
  
  // 2ème méthode :
  //secondCardText.classList.toggle("text-success");
}

// On dit au navigateur d'exécuter la fonction 'applyGreenText' lorsque l'utilisateur clique sur l'objet 'buttonEditCard2'
buttonEditCard2.addEventListener("click", applyGreenText)




// ---------------------------------------------
// Fonctionnalité 5

// On cible la navbar
//let navbar = document.getElementById("navbarHeader") -> ne cible que la navbar qui s'affiche lorsque l'on clique sur le bouton "Hamburger"
// On cible tout le header et pas uniquement la navbar
let navbar = document.getElementsByTagName("header")[0]
console.log (navbar)

// On définit la fonction qui va enlever la mise en page Bootstrap
var nuke = function() {
  let cdnBootstrap = document.getElementsByTagName("link")[0];
  if (cdnBootstrap.href == "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
  	cdnBootstrap.href = "";
  } else {
  	cdnBootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  }
}

// On dit au navigateur d'exécuter la fonction 'nuke' lorsque l'utilisateur double clique sur l'objet 'navbar'
navbar.addEventListener("dblclick", nuke)




// ---------------------------------------------
// Fonctionnalité 6

// On cible le bouton "View" de toutes les cartes
let viewButton = document.querySelectorAll("button.btn.btn-sm.btn-success")[0];
console.log(viewButton)

var reduceCards = function(event) {
	// On cible le texte de la card
  let cardText = document.getElementsByClassName("card-text")[0]
	// On cache le texte
	cardText.innerText = "";

	console.log("------------------")
  console.log(event)
	console.log("------------------")


	// On cible l'image pour la carte
	let cardImage = document.getElementsByClassName("card-img-top")[0];
	cardImage.style.width = "80%";

  console.log("on va réduire les cards")
}



viewButton.addEventListener("mouseover", reduceCards);


