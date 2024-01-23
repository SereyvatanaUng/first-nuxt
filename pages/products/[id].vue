<template>
  <div>
    <ProductDetails :product="product"/>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;
console.log(uri);

// fetch the product, use key to fetch the new data, otherwise it gonna show the first one.
const { data: product } = await useFetch(uri, { key: id });

definePageMeta({ layout: "products" });
</script>
