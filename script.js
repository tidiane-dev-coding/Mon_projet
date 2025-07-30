// script.js
// Gestion complète de la page produits.html pour Guinée Style Market
// Toutes les fonctionnalités JS sont centralisées ici
(function() {
    // --- Données produits ---
    const produits = {
        'vetements-femme': [
            { nom: 'Robe Wax Élégante', prix: 120000, image: 'Robe Wax Élégante.webp' },
            { nom: 'Boubou Traditionnel', prix: 95000, image: 'Boubou Traditionnel.webp' },
            { nom: 'Mailot Real Madrid', prix: 90000,image:'Maillot real.webp'},
            { nom:'Mailot du FC Barcelone',prix:80000,image:'Maillot du barça.webp'},
            { nom:'t-shirt',prix:60000,image:'t-shirt pou femme.webp'},
            { nom:'Caustume',prix:500000,image:'V F.webp'},
            { nom:'Caustume',prix:500000,image:'VESTE F.webp'},
            { nom:'Abaya',prix:30000,image:'abaya 1.jpg'}, 
            { nom:'Abaya',prix:30000,image:'ABAYA 3.webp'},
            { nom:'Abaya',prix:30000,image:'ABAYA 4.webp'}, 
            { nom:'Abaya',prix:20000,image:'ABAYA 5.jpeg'},
            { nom:'Abaya',prix:20000,image:'ABAYA 6.webp'},
            { nom:'Abaya',prix:20000,image:'ABAYA 7.webp'},
            { nom:'Abaya',prix:20000,image:'ABAYA 8.webp'}, 
            { nom:'Abaya',prix:20000,image:'abaya-2.jpg'},
            { nom:'Foulard',prix:30000,image:'abaya 6.jpg'},
            { nom:'Foulard',prix:30000,image:'foular3.jpg'}, 
            { nom:'Foulard',prix:20000,image:'foulard 1.webp'},
            { nom:'Foulard',prix:20000,image:'foulard 2.webp'},
            
        ],
        'vetements-homme': [
            { nom: 'Chemise Bazin', prix: 80000, image: 'Chemise Bazin.webp' },
            { nom: 'Pantalon Ankara', prix: 60000, image: 'Pantalon Ankara.webp' },
            { nom: 'Mailot Real Madrid', prix: 90000,image:'Maillot real.webp'},
            { nom:'Mailot du FC Barcelone',prix:80000,image:'Maillot du barça.webp'},
            { nom:'t-shirt',prix:60000,image:'t-shirt).webp'},
            { nom:'t-shirt',prix:60000,image:'t-shirt 3).webp'},
            { nom:'t-shirt',prix:60000,image:'thisrt 4.webp'},
            { nom:'t-shirt',prix:60000,image:'tshirt.web.webp'},
            { nom:'t-shirt',prix:60000,image:'T2.peg.jpeg'},
            { nom:'Macky Sall',prix:250000,image:'1.webp'},
            { nom:'Macky Sall',prix:250000,image:'3.webp'},
            { nom:'Macky Sall',prix:24000,image:'2.webp'},
            { nom:'Caustume',prix:500000,image:'V H 2.jpeg'},
            { nom:'Caustume',prix:500000,image:'V H.webp'},
            { nom:'Caustume',prix:500000,image:'VESTE H.jpg'},
        ],
        'accessoires': [
            { nom: 'Sac en raphia', prix: 35000, image: 'Sac en raphia.webp' },
            { nom: 'Ceinture cuir', prix: 25000, image: 'Ceinture cuir.webp' },
            { nom: 'Sac', prix:70000, image: 'Pochette.jpg' },
            { nom: 'Sac', prix:70000, image: 'Pochette 2.webp' },
            { nom: 'Pochette Iphone 13 pro', prix: 25000, image: 'pochette 3.webp' },
            { nom: 'Pochette Iphone 14 proMax', prix: 25000, image: 'Pochette 4.webp' },
            { nom: 'Pochette Iphone 15 pro', prix: 25000, image: 'pochette iphone .jpeg' },
            { nom: 'Pochette Samsumg S24 ultra', prix: 25000, image: 'pochette s23ultra.webp' },
            { nom: 'Pochette Samsumg A22', prix: 25000, image: 'pochette samsumg.webp' },
            { nom: 'Sac téléphone', prix: 25000, image: 'Pochette.webp' },
            { nom: 'Sac téléphone', prix: 25000, image: 'Pochette1.webp' },

        ],
        'chaussures': [
            { nom: 'Retro 3', prix: 95000, image: 'Retro 3.jpeg' },
            { nom: 'Retro 4', prix: 98000, image: 'Retro 4.jpeg' },
            { nom: 'Retro 5', prix: 99000, image: 'Retro 5.webp' },
            { nom: 'Retro 6', prix: 100000, image: 'retro 7.webp' },
            { nom: 'Retro 7', prix: 102000, image: 'retro 6 - 7.webp' },
            { nom: 'Retro 8', prix: 104000, image: 'retro 8.jpeg' },
            { nom: 'Retro 9', prix: 106000, image: 'retro 9).webp' },
            { nom: 'Retro 10', prix: 108000, image: 'retro 10.webp' },
            { nom: 'Retro 11', prix: 110000, image: 'retro 11).webp' },
            { nom: 'Retro', prix: 90000, image: 'OIP (2).webp' },
            { nom: 'Basket', prix: 120000, image: 'Basket).webp' },
            { nom: 'Nike Air Max', prix: 180000, image: 'air max.webp' },
            { nom: 'Jordan 1', prix: 200000, image: 'Jordan 1.webp' },
            { nom: 'Soulier', prix: 200000, image: 'soulier 1.webp' },
            { nom: 'Soulier', prix: 200000, image: 'soulier F 2 .jpg' },
            { nom: 'Soulier', prix: 200000, image: 'Soulier femme.webp' },
            { nom: 'Soulier', prix: 200000, image: 'soulier3.jpg' },
            { nom: 'Soulier', prix: 200000, image: 'SOULIER3.webp' },
            { nom: 'Air MAX', prix: 200000, image: 'air max.webp' },
            { nom: 'Nike', prix: 200000, image: 'NIKE 1.webp' },
            { nom: 'Nike', prix: 200000, image: 'nike 3.jpg' },
        ],
        'smartphone': [
            { nom: 'Dell Inspiron 15', prix: 3500000, image: 'Dell.webp' },
            { nom: 'HP Pavilion 14', prix: 3200000, image: 'HP Pavilion 14.jpeg' },
            { nom: 'Acer Aspire 5', prix: 2800000, image: 'OIP (1).webp' },
            { nom:'Iphone XR', prix:2000000,image:'Iphone XR.webp'},
            { nom: 'iPhone 12', prix: 4200000, image: 'Iphone 12.jpeg' },
            { nom: 'iPhone 13', prix: 4800000, image: 'Iphone 13.jpeg' },
            { nom: 'iPhone 14', prix: 5500000, image: 'iphone_14_pro_ldvova_8.jpg' },
            { nom: 'iPhone 15', prix: 6000000, image: 'iphone 15.webp' },
            { nom: 'iPhone 16', prix: 7000000, image: 'iPhone 16.webp' },
            { nom: 'Samsung Galaxy S24', prix: 5200000, image: 'Galaxy S24 Ultra.webp' },
            { nom: 'Samsung Galaxy A54', prix: 3200000, image: 'Samsung-Galaxy-A54-1.jpg' },
            { nom: 'Nokia G21', prix: 1500000, image: 'OIP.webp' },
        ],
        'montres': [
            { nom: 'Rolex Submariner', prix: 12000000, image: 'Rolex Submariner.webp' },
            { nom: 'Montre connectée', prix: 250000, image: 'Montre connectée.jpg' },
            { nom: 'Montre', prix: 250000, image: 'montre 1.webp' },
            { nom: 'Montre', prix: 250000, image: 'montre 2.webp' },
            { nom: 'FORMEX', prix: 250000, image: 'montre 3.webp' },
            { nom: 'FORMEX', prix: 250000, image: 'montre.webp' },
            { nom: 'Casio', prix: 250000, image: 'montre Casio).webp' },
            
        ]
    };

    // --- Utilitaires ---
    function getCategorieFromURL() {
        const params = new URLSearchParams(window.location.search);
        return params.get('categorie');
    }

    // --- Gestion du panier ---
    function getPanier() {
        return JSON.parse(localStorage.getItem('panier') || '[]');
    }
    function setPanier(panier) {
        localStorage.setItem('panier', JSON.stringify(panier));
        majNbPanier();
    }
    function ajouterAuPanier(produit) {
        let panier = getPanier();
        panier.push(produit);
        setPanier(panier);
        alert('Produit ajouté au panier !');
    }
    function majNbPanier() {
        var nb = document.getElementById('nb-panier');
        if(nb) nb.textContent = getPanier().length;
    }

    // --- Affichage des produits avec filtre et recherche ---
    function afficherProduits() {
        const cat = getCategorieFromURL();
        const titre = document.getElementById('titre-categorie');
        const liste = document.querySelector('.produits-list');
        const filtre = document.getElementById('filtre-produit')?.value || cat || '';
        const recherche = document.getElementById('recherche-produit')?.value?.toLowerCase() || '';
        let produitsAffiches = [];
        if (filtre && produits[filtre]) {
            produitsAffiches = produits[filtre];
            if(titre) titre.textContent = 'Produits : ' + (document.querySelector('a.categorie-card[href$="'+filtre+'" i]')?.textContent || filtre);
        } else if (cat && produits[cat]) {
            produitsAffiches = produits[cat];
            if(titre) titre.textContent = 'Produits : ' + (document.querySelector('a.categorie-card[href$="'+cat+'" i]')?.textContent || cat);
        } else {
            // Tous les produits
            produitsAffiches = Object.values(produits).flat();
            if(titre) titre.textContent = 'Tous les produits';
        }
        if (recherche) {
            produitsAffiches = produitsAffiches.filter(p => p.nom.toLowerCase().includes(recherche));
        }
        if (!produitsAffiches.length) {
            if(liste) liste.innerHTML = '<p>Aucun produit trouvé.</p>';
            return;
        }
        if(liste) liste.innerHTML = produitsAffiches.map((p, idx) => `
            <div class="produit-card">
                <img src="${p.image}" alt="${p.nom}">
                <h3>${p.nom}</h3>
                <div class="prix">${p.prix.toLocaleString()} GNF</div>
                <button class="ajouter-panier" data-idx="${idx}">Ajouter au panier</button>
            </div>
        `).join('');
        // Ajout des listeners sur les boutons
        document.querySelectorAll('.ajouter-panier').forEach(btn => {
            btn.onclick = function() {
                const i = btn.getAttribute('data-idx');
                ajouterAuPanier(produitsAffiches[i]);
            };
        });
    }

    // --- Recherche et filtre ---
    function setupRechercheEtFiltre() {
        const recherche = document.getElementById('recherche-produit');
        const filtre = document.getElementById('filtre-produit');
        if (recherche) recherche.oninput = afficherProduits;
        if (filtre) filtre.onchange = afficherProduits;
    }

    // --- Initialisation ---
window.addEventListener('DOMContentLoaded', function() {
    majNbPanier();
    // Si on est sur la page produits
    if (document.querySelector('.produits-list')) {
        afficherProduits();
        setupRechercheEtFiltre();
    }
    // Si on est sur la page panier
    if (document.querySelector('.panier-list')) {
        function afficherPanier() {
            const panier = getPanier();
            const liste = document.querySelector('.panier-list');
            const totalSpan = document.getElementById('total-panier');
            if (!liste || !totalSpan) return;
            if (!panier.length) {
                liste.innerHTML = '<p>Votre panier est vide.</p>';
                totalSpan.textContent = '0 GNF';
                return;
            }
            let total = 0;
            liste.innerHTML = panier.map((p, idx) => {
                total += p.prix;
                return `<div class="panier-item">
                    <img src="${p.image}" alt="${p.nom}">
                    <div class="panier-item-details">
                        <span class="panier-item-nom">${p.nom}</span>
                        <span class="panier-item-prix">${p.prix.toLocaleString()} GNF</span>
                    </div>
                    <div class="panier-item-actions">
                        <button class="supprimer-panier" data-idx="${idx}">Supprimer</button>
                    </div>
                </div>`;
            }).join('');
            totalSpan.textContent = total.toLocaleString() + ' GNF';
            // Ajout des listeners pour supprimer
            document.querySelectorAll('.supprimer-panier').forEach(btn => {
                btn.onclick = function() {
                    let panier = getPanier();
                    panier.splice(btn.getAttribute('data-idx'), 1);
                    setPanier(panier);
                    afficherPanier();
                };
            });
        }
        afficherPanier();
        const btnVider = document.getElementById('vider-panier');
        if (btnVider) {
            btnVider.onclick = function() {
                setPanier([]);
                afficherPanier();
            };
        }
        const btnCommander = document.getElementById('commander-panier');
        if (btnCommander) {
            btnCommander.onclick = function() {
                const panier = getPanier();
                if (!panier.length) {
                    alert('Votre panier est vide.');
                    return;
                }
                if (confirm('Confirmez-vous votre commande ?')) {
                    alert('Merci pour votre commande ! Nous vous contacterons rapidement.');
                }
            };
        }
        const btnRetourProduits = document.getElementById('retour-produits');
        if (btnRetourProduits) {
            btnRetourProduits.onclick = function() {
                window.location.href = 'produits.html';
            };
        }
        const btnAccueil = document.getElementById('retour-accueil');
        if (btnAccueil) {
            btnAccueil.onclick = function() {
                window.location.href = 'index.html';
            };
        }
    }
});
})();
