<script setup>
import { ref, onMounted } from "vue";
import { ajouterActivite, obtenirActivites } from "../services/firebase";

const titre = ref("");
const description = ref("");
const activites = ref([]);

// Ajouter une activité
const ajouter = async () => {
  if (titre.value && description.value) {
    await ajouterActivite(titre.value, description.value);
    titre.value = "";
    description.value = "";
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

    <div class="space-y-2">
      <input v-model="titre" class="border p-2 w-full" placeholder="Titre de l'activité" />
      <textarea v-model="description" class="border p-2 w-full" placeholder="Description"></textarea>
      <button @click="ajouter" class="bg-blue-500 text-white px-4 py-2 rounded">Ajouter</button>
    </div>

    <div v-if="activites.length">
      <h3 class="text-xl font-bold mt-4">Liste des Activités</h3>
      <ul>
        <li v-for="act in activites" :key="act.id" class="border-b p-2">{{ act.titre }} - {{ act.description }}</li>
      </ul>
    </div>
  </div>
</template>
