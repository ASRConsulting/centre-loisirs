<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold">Bienvenue au Centre de Loisirs</h1>
    <p>Découvrez et inscrivez-vous à nos activités !</p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
    <div v-for="activite in activites" :key="activite.id" class="bg-white shadow-lg rounded-lg overflow-hidden">
      <img :src="activite.image" alt="Image de l'activité" class="w-full h-48 object-cover" />
      <div class="p-4">
        <h3 class="font-bold text-xl">{{ activite.titre }}</h3>
        <p class="text-sm text-gray-500">{{ activite.lieu }}</p>
        <p class="text-gray-700 mt-2">{{ activite.description }}</p>
        <ul class="mt-4 text-sm text-gray-600">
          <li><strong>Équipement :</strong> {{ activite.equipement ? activite.equipement.join(", ") : 'Aucun équipement' }}</li>
          <li><strong>Saison :</strong> {{ activite.saison }}</li>
          <li><strong>Âge autorisé :</strong> {{ activite.age_autorise }}</li>
          <li><strong>Taille autorisée :</strong> {{ activite.taille_autorisee }}</li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from "vue";
import { obtenirActivites } from "../services/firebase";

const activites = ref([]);

const loadActivites = async () => {
  activites.value = await obtenirActivites();
};

onMounted(loadActivites);
</script>
