import { db } from "@/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Fonction pour ajouter une activité
export const ajouterActivite = async (titre, description, image, lieu, equipement, saison, ageAutorise, tailleAutorisee) => {
  try {
// Vérifiez si equipement est déjà un tableau, sinon transformez-le en tableau
const equipementArray = Array.isArray(equipement) ? equipement : equipement.split(",").map(item => item.trim());

    const docRef = await addDoc(collection(db, "activites"), {
      titre: titre,
      description: description,
      image,
      lieu,
      equipement: equipement.split(",").map(item => item.trim()),  // Transformer la chaîne en tableau
      saison,
      age_autorise: ageAutorise,
      taille_autorisee: tailleAutorisee,
      date: new Date()
    });
    console.log("Activité ajoutée avec ID :", docRef.id);
  } catch (error) {
    console.error("Erreur lors de l'ajout :", error);
  }
};

// Fonction pour récupérer toutes les activités
export const obtenirActivites = async () => {
  const querySnapshot = await getDocs(collection(db, "activites"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
