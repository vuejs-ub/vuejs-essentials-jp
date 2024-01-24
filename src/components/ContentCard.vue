<script setup lang="ts">
import type { Content } from "../../schema";
defineProps<{ content: Content }>();
</script>

<template>
  <div class="content-card">
    <h3>{{ content.title }}</h3>
    <p v-if="content.summary">{{ content.summary }}</p>
    <img v-if="content.img" :src="content.img.src" width="500px" />
    <ul>
      <li v-for="(url, i) in content.originalUrls" :key="i">
        <a
          :href="url.url"
          :alt="url.text"
          target="_blank"
          class="content-original-link"
          >{{ url.text || url.url }}</a
        >
      </li>
    </ul>
    <p class="content-date">{{ content.dateJst }}</p>
  </div>
</template>

<style lang="scss" scoped>
.content-card {
  padding: 1.8rem;
  border: solid 1px #dadef320;
  border-radius: 0.5rem;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1.8rem;
  font-weight: bold;
}
.content-original-link {
  color: #8d9ce5;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.content-date {
  text-align: right;
  font-size: 12px;
  color: #999;
}
</style>
