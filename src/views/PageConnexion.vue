<script setup>
import { ref } from "vue";
import { connexion } from "../services/authService";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errorMsg = ref("");
const router = useRouter();

const handleConnexion = async () => {
  console.log("Email:", email.value, "Type:", typeof email.value);
  console.log("Mot de passe:", password.value, "Type:", typeof password.value);
  try {
    await connexion( email.value, password.value);
    router.push("/"); // Redirige vers l'accueil après connexion
  } catch (error) {
    console.error("Erreur de connexion :", error);
    errorMsg.value = "Identifiants incorrects. Veuillez réessayer.";
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-bold text-center mb-4">Connexion</h2>
      <form @submit.prevent="handleConnexion">
        <div>
          <label class="block mb-2">Email</label>
          <input v-model="email" type="email" class="w-full p-2 border rounded" required />
        </div>
        <div class="mt-4">
          <label class="block mb-2">Mot de passe</label>
          <input v-model="password" type="password" class="w-full p-2 border rounded" required />
        </div>
        <p v-if="errorMsg" class="text-red-500 text-sm mt-2">{{ errorMsg }}</p>
        <button type="submit" class="mt-4 w-full bg-blue-500 text-white p-2 rounded">Se connecter</button>
      </form>
      <p class="mt-4 text-center">
        Pas encore de compte ? <router-link to="/PageInscription" class="text-blue-600">S'inscrire</router-link>
      </p>
    </div>
  </div>
</template>
