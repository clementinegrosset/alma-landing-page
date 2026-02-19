// Code JavaScript pour Bubble - Run JavaScript
// À utiliser dans un workflow Bubble déclenché par "Javascript to Bubble" avec function name = "newSlot"
// Ce code reçoit output1 (JSON string) et crée un nouveau slot dans Bubble

// output1 est une chaîne JSON qui contient : {"id":"...","jour":"Lundi","ouvert":true}
// Parse le JSON
let dispoData;
try {
    dispoData = JSON.parse(output1);
    console.log('Données reçues:', dispoData);
} catch (e) {
    console.error('Erreur lors du parsing JSON:', e);
    return; // Arrêter si le JSON est invalide
}

// Vérifier que les données nécessaires sont présentes
if (!dispoData || !dispoData.id) {
    console.error('Données manquantes: dispoData.id est requis');
    return;
}

// Créer un nouveau slot dans Bubble
// Remplacez "Disponibilités Slots" par le nom exact de votre type de données dans Bubble
// et ajustez les champs selon votre structure de données
const newSlot = {
    hour_begin: "9",        // Heure de début par défaut
    minute_begin: "0",      // Minute de début par défaut
    hour_end: "18",         // Heure de fin par défaut
    minute_end: "0",        // Minute de fin par défaut
    dispo: dispoData.id     // Lien vers la disponibilité
};

// Dans Bubble, vous devrez utiliser une action "Create a new thing" pour créer le slot
// Ce code prépare les données, mais la création se fait via l'action Bubble
// Vous pouvez utiliser ces valeurs dans votre action Bubble :
// - newSlot.hour_begin
// - newSlot.minute_begin
// - newSlot.hour_end
// - newSlot.minute_end
// - newSlot.dispo (qui est dispoData.id)

// Retourner les données pour les utiliser dans les actions Bubble suivantes
return {
    dispoId: dispoData.id,
    jour: dispoData.jour,
    ouvert: dispoData.ouvert,
    slotHourBegin: newSlot.hour_begin,
    slotMinuteBegin: newSlot.minute_begin,
    slotHourEnd: newSlot.hour_end,
    slotMinuteEnd: newSlot.minute_end
};
