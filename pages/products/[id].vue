<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sequi
      dolor vel, dolorum nobis architecto aliquid voluptatum itaque rem officia?
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
console.log(id);
</script>
