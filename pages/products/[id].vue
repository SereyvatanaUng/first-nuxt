<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = "https://fakestoreapi.com/products/" + id;

// fetch the product, use key to fetch the new data, otherwise it gonna show the first one.
const { data: product } = await useFetch(uri, { key: id });

if (!product.value) {
  // fatal:true -> to force application to show error
  throw createError({ statusCode: 404, statusMessage: "Product not found",fatal:true });
}

definePageMeta({ layout: "products" });
</script>
