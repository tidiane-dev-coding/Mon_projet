// Filtre produits par catégorie via <select>
// Ce script suppose que vous avez :
// - Un <select id="filtre-categorie"> avec des <option value="nom_categorie">
// - Un conteneur <div id="liste-produits"></div> pour afficher les produits
// - Un tableau JS de produits avec un attribut "categorie"


// On suppose que l'objet "produits" est déjà défini dans script.js
// Exemple : produits = { 'vetements-femme': [...], 'vetements-homme': [...], ... }

function afficherProduitsParCategorie(categorie) {
    const liste = document.getElementById('liste-produits');
    let produitsAffiches = [];
    if (typeof produits === 'undefined') {
        liste.innerHTML = '<p>Les données produits ne sont pas chargées.</p>';
        return;
    }
    if (categorie && produits[categorie]) {
        produitsAffiches = produits[categorie];
    } else {
        // Toutes les catégories
        produitsAffiches = Object.values(produits).flat();
    }
    if (!produitsAffiches.length) {
        liste.innerHTML = '<p>Aucun produit trouvé.</p>';
        return;
    }
    liste.innerHTML = produitsAffiches.map(p => `
        <div class="produit-card">
            <img src="${p.image}" alt="${p.nom}">
            <h3>${p.nom}</h3>
            <div class="prix">${p.prix.toLocaleString()} GNF</div>
        </div>
    `).join('');
}

document.getElementById('filtre-categorie').addEventListener('change', function(e) {
    afficherProduitsParCategorie(e.target.value);
});

// Affichage initial (tous les produits)
afficherProduitsParCategorie('');
