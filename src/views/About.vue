<template>
  <div class="container about">
    <div class="columns is-multiline is-mobile">
      <img
        v-for="n in 30"
        class="image column is-2"
        :key="n"
        src="https://placekitten.com/300/300"
      />
    </div>
  </div>
</template>
