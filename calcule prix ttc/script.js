document.addEventListener('DOMContentLoaded', () => {
    const prixHTInput = document.getElementById('prixHT');
    const tauxTVAInput = document.getElementById('tauxTVA');
    const prixTTCDisplay = document.getElementById('prixTTC');
    
    // Fonction de calcul du prix TTC
    function calculerTTC() {
        const prixHT = parseFloat(prixHTInput.value);
        const tauxTVA = parseFloat(tauxTVAInput.value);
        
        // Réinitialiser l'affichage du prix TTC
        prixTTCDisplay.innerText = "";

        // Validation des valeurs
        if (isNaN(prixHT) || prixHT <= 0) {
            afficherErreur("Veuillez entrer un prix HT valide supérieur à 0.");
            return;
        }
        if (isNaN(tauxTVA) || tauxTVA < 0) {
            afficherErreur("Veuillez entrer un taux de TVA valide.");
            return;
        }

        // Calcul du prix TTC
        const prixTTC = prixHT + (prixHT * tauxTVA / 100);
        
        // Affichage du prix TTC formaté
        prixTTCDisplay.innerText = `${prixTTC.toFixed(2)} €`;
    }

    // Fonction pour afficher un message d'erreur
    function afficherErreur(message) {
        prixTTCDisplay.innerText = message;
        prixTTCDisplay.style.color = "red"; // Change la couleur pour indiquer une erreur
    }

    // Ajouter un écouteur d'événements pour le bouton
    document.querySelector('button').addEventListener('click', () => {
        prixTTCDisplay.style.color = "#333"; // Remettre la couleur par défaut
        calculerTTC();
    });
});
