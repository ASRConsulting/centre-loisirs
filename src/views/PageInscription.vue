<script setup>
import { ref } from "vue";
import { auth } from "@/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorMsg = ref("");
const router = useRouter();

const inscription = async () => {
  if (password.value !== confirmPassword.value) {
    errorMsg.value = "Les mots de passe ne correspondent pas.";
    return;
  }
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push("/connexion"); // Redirige vers la connexion après inscription
  } catch (error) {
    errorMsg.value = "Erreur lors de l'inscription.";
  }
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-bold text-center mb-4">Inscription</h2>
      <form @submit.prevent="inscription">
        <div>
          <label class="block mb-2">Email</label>
          <input v-model="email" type="email" class="w-full p-2 border rounded" required />
        </div>
        <div class="mt-4">
          <label class="block mb-2">Mot de passe</label>
          <input v-model="password" type="password" class="w-full p-2 border rounded" required />
        </div>
        <div class="mt-4">
          <label class="block mb-2">Confirmer le mot de passe</label>
          <input v-model="confirmPassword" type="password" class="w-full p-2 border rounded" required />
        </div>
        <p v-if="errorMsg" class="text-red-500 text-sm mt-2">{{ errorMsg }}</p>
        <button type="submit" class="mt-4 w-full bg-green-500 text-white p-2 rounded">S'inscrire</button>
      </form>
      <p class="mt-4 text-center">
        Déjà un compte ? <router-link to="/connexion" class="text-blue-600">Se connecter</router-link>
      </p>
    </div>
  </div>
</template>
