<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fuga, quod
      repudiandae totam nulla possimus obcaecati tempora blanditiis. Quaerat,
      pariatur!
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis inventore
      placeat fugiat accusamus. Praesentium, id? A exercitationem perspiciatis
      possimus minima?
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/KHR");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
