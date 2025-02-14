<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Connexion</h1>
    <form @submit.prevent="connexion">
      <input type="text" v-model="email" placeholder="Email" class="border p-2 m-2" />
      <input type="password" v-model="password" placeholder="Mot de passe" class="border p-2 m-2" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2">Se connecter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const connexion = () => {
  console.log("Connexion en cours...");
};
</script>
