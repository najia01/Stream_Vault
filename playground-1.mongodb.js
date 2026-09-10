
// Select the database to use.
use('mongodb_database');

console.log("--- Réponse Q3 Combien de documents contient la collection ?---");
console.log(db.sample.countDocuments({}));

console.log("--- Réponse Q4 Affiche le tout premier document. Quel est son titre ?---");
console.log(db.sample.findOne({}));

console.log("--- Réponse Q5  Afficher le deuxième document :---");
console.log(db.sample.find().skip(1).limit(1));

console.log("--- Réponse Q6  Trouve le document dont le titre est celui de ton livre à auteurs multiples. A-t-il bien un champ auteurs au pluriel ? :---");
console.log(db.sample.find({ auteurs: { $exists: true }}));

console.log("--- Réponse Q7  Ce même document a-t-il un champ chapitres ? Liste-les.---");
console.log(db.sample.findOne({ titre: "Guide de survie en forêt" }).chapitres);

console.log("--- Réponse Q8  Trouve le document le plus ancien de la collection.---");
console.log(db.sample.find().sort({ annee: 1 }).limit(1));

console.log("--- Réponse Q9  Trouve le document le plus récent---");
console.log(db.sample.find().sort({ annee: -1 }).limit(1));

console.log("--- Réponse Q10  Un seul document a un champ qui n'existe sur aucun autre. Lequel, et lequel est ce champ ?---");
console.log(db.sample.find({ illustrations: { $exists: true } }));

console.log("--- Réponse Q11  Trouve le livre publié une année précise de ton choix.---");
console.log(db.sample.find({ annee: 2020 }));

console.log("--- Réponse Q12  Combien de livres ont été publiés après 2000 ?.---");
console.log(db.sample.find({ annee: { $gt: 2000 } }));

console.log("--- Réponse Q13  Combien de livres ont été publiés avant 1950 ?---");
console.log(db.sample.find({ annee: { $lt: 1950 } }));

console.log("--- Réponse Q14  Trouve le livre qui contient un chapitre précis.---");
console.log(db.sample.find({ chapitres: "Feu" }));

console.log("--- Réponse Q15  Trouve un livre à partir du nom exact de son auteur---");
console.log(db.sample.find({ auteur: "Isaac Asimov" }));

console.log("--- Réponse Q16  Ouvre un document et ajoute-lui un champ note avec une valeur de ton choix.---");
console.log(db.sample.updateOne({ titre: "1984" }, { $set: { note: 5 } }));

console.log("--- Réponse Q17  Rouvre ce document pour confirmer que le champ est bien là.---");
console.log(db.sample.findOne({ titre: "1984" }));

console.log("--- Réponse Q18  Insère un nouveau document avec un titre et une année de ton choix.---");
console.log(db.sample.insertOne({ titre: "La vie est belle", auteur: "Marc Lévy", année:2021 }));

console.log("--- Réponse Q19 Le nombre total de documents a-t-il bien augmenté de 1 ?---");
console.log(db.sample.countDocuments({}));

console.log("--- Réponse Q20  Supprime ce document ajouté. ---");
console.log(db.sample.deleteOne({ titre: "La vie est belle" }));

console.log("--- Q20   Le compteur est-il revenu à sa valeur initiale ? ---");
console.log(db.sample.countDocuments({}));