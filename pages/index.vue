<script setup lang="ts">
const { data } = useFetch("/api/contents");
</script>

<template>
  <div class="pages-home">
    <!-- TODO: layout -->
    <div class="menu">
      <h3>Menu</h3>
      <ul>
        <li v-for="i in 6" :key="i">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
      </ul>
    </div>

    <ul>
      <li v-for="content in data?.contents">
        <ContentCard :content="content" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.pages-home {
  display: flex;
  gap: 1rem;
}

.menu {
  width: 120px;
  padding: 1rem;
  border-radius: 5px;
}
</style>
