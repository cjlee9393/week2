<script setup>
import { ref } from 'vue';
import CardComponent from '../components/CardComponent.vue';
import AuthComponent from '../components/AuthComponent.vue';
import CartComponent from '../components/CartComponent.vue';

// switch to compoisition api
const assetDir = "/src/assets/";
const picked = ref('Customer');
const pokemons = ref(
  [
    {
      id: 0,
      name: "파이리",
      imgSrc: assetDir + "pokemon1.jpg", 
      stock: 10, 
      stockInput: '' 
    },
    {
      id: 1,
      name: "고라파덕",
      imgSrc: assetDir + "pokemon2.jpg",
      stock: 10,
      stockInput: ''
    }
  ]
);
</script>

<template>
  <main>
    {{ picked }}
    <div id="auth-container">
        <AuthComponent v-model="picked" />
    </div>
    <div id="card-container">
        <CardComponent v-for="pokemon in pokemons" :pokemon="pokemon" :picked="picked"/>
    </div>
    
    <CartComponent :pokemons="pokemons" />
  </main>
</template>

<style>
#auth-container  {  
}

#card-container {
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>