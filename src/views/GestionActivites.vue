<script setup>
import { ref, onMounted } from "vue";
import { ajouterActivite, obtenirActivites } from "../services/firebase";

const titre = ref("");
const description = ref("");
const image = ref("");
const lieu = ref("");
const equipement = ref("");
const saison = ref("");
const ageAutorise = ref("");
const tailleAutorisee = ref("");
const activites = ref([]);

// Ajouter une activité
const ajouter = async () => {
  if (titre.value && description.value  && image.value  && lieu.value  && equipement.value  && saison.value  && ageAutorise.value  && tailleAutorisee.value) {
    try {
      await ajouterActivite(titre.value, description.value, image.value, lieu.value, equipement.value, saison.value, ageAutorise.value, tailleAutorisee.value);
    alert("Activité ajoutée avec succès !");
    // Réinitialiser les champs du formulaire
    titre.value = "";
    description.value = "";
    image.value = "";
    lieu.value = "";
    equipement.value = "";
    saison.value = "";
    ageAutorise.value = "";
    tailleAutorisee.value = "";

  } catch (error) {
    console.error("Erreur lors de l'ajout :", error);
  } finally {
    // Charger les activités apres ajout
  }
    chargerActivites();
  }
};

// Charger les activités
const chargerActivites = async () => {
  activites.value = await obtenirActivites();
};

onMounted(chargerActivites);
</script>

<template>
  <div class="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
    <h2 class="text-2xl font-bold">Gestion des Activités</h2>
    <form @submit.prevent="ajouter">
      <div>
        <label class="block mb-2">Titre</label>
        <input v-model="titre" type="text" class="w-full p-2 border rounded" required />
      </div>
      <div>
        <label class="block mb-2">Description</label>
        <textarea v-model="description" class="w-full p-2 border rounded" required></textarea>
      </div>
      <div>
        <label class="block mb-2">Image (URL)</label>
        <input v-model="image" type="text" class="w-full p-2 border rounded" required />
      </div>
      <div>
        <label class="block mb-2">Lieu</label>
        <input v-model="lieu" type="text" class="w-full p-2 border rounded" required />
      </div>
      <div>
        <label class="block mb-2">Équipement</label>
        <input v-model="equipement" type="text" class="w-full p-2 border rounded" placeholder="Séparez les équipements par une virgule" />
      </div>
      <div>
        <label class="block mb-2">Saison</label>
        <input v-model="saison" type="text" class="w-full p-2 border rounded" required />
      </div>
      <div>
        <label class="block mb-2">Âge autorisé</label>
        <input v-model="ageAutorise" type="text" class="w-full p-2 border rounded" required />
      </div>
      <div>
        <label class="block mb-2">Taille autorisée</label>
        <input v-model="tailleAutorisee" type="text" class="w-full p-2 border rounded" />
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 mt-4">Ajouter l'activité</button>
    </form>

    <div v-if="activites.length">
      <h3 class="text-xl font-bold mt-4">Liste des Activités</h3>
      <ul>
        <li v-for="act in activites" :key="act.id" class="border-b p-2">{{ act.titre }} - {{ act.description }}</li>
      </ul>
    </div>
  </div>
</template>
