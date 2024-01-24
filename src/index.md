---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "Vue.js Essentials JP"
  # text: " Vue.js や周辺エコシステムに関する情報のまとめサイトです。"
  # description: "Vue.js や周辺エコシステムに関する情報のまとめサイトです。"
  tagline: Vue.js や周辺エコシステムに関する情報のまとめサイトです。
  actions:
    # - theme: brand
    #   text: Markdown Examples
    #   link: /markdown-examples
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples
---

<script setup lang="ts">
import ContentCard from './components/ContentCard.vue'
import { data as contents } from './_loader/contents.data'
</script>

<div class="pad">
  <ul>
    <li v-for="content in contents" style="margin-bottom: 8px">
      <ContentCard :content="content" />
    </li>
  </ul>
</div>

<style lang="scss">
  .pad {
    margin: 0 auto;
    max-width: 1152px;
    @media (max-width: 640px) {
      padding: 0 24px 0;
    }
  }
</style>
