// Récupérer les id des champs et leurs valeurs
function genererFiche() {
let prenom = document.getElementById("prenom").value;
let age = document.getElementById("age").value;
let couleur = document.getElementById("couleur").value;
let passions = document.getElementById("passions").value;
let qualites = document.getElementById("qualites").value;
let defauts = document.getElementById("defauts").value;


// Créer la description
let description = "Bonjour, je m'appelle " + prenom + ", j'ai " + age + " ans.\n" + 
"Ma couleur préférée est le " + couleur + ".\n" + 
"J'ai plusieurs passions comme " + passions + ".\n" + 
"Je suis " + qualites + ".\n" + 
"Je suis " + defauts + "."

// Insérer la description dans la page
document.getElementById("fiche-resultat").innerText = description;
}


