<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { onBeforeMount } from 'vue';

const props = defineProps({
  pokemons: Object
})
const cart = ref([]);

onBeforeMount(() => {
  for (let pokemon of props.pokemons) {
    cart.value.push({
      ...pokemon,
      quantity:0
    })
  }
})
</script>

<template>
  <div id="cart-container">
    <h1>Shopping List</h1>
    
    <q-list v-for="pokemon in cart" :key="pokemon.id">
      <q-item clickable v-ripple>
        <q-item-section>{{pokemon.name}}</q-item-section>
        <div>
          <q-btn flat color="primary" label="-" @click="pokemon.quantity--"/>
          {{ pokemon.quantity }}
          <q-btn flat color="primary" label="+" @click="pokemon.quantity++" />
        </div>
        <q-item-section thumbnail>
          <div id="img-wrap">
            <img id="img-pokemon" :src="pokemon.imgSrc">
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    
    <q-btn color="black" label="주문하기" />
  </div>
</template>

<style scoped>
#img-wrap {
  width: 75px;
  height: 100px;
}

#img-pokemon {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

#cart-container {
  display:flex;
  flex-direction: column;
}
</style>