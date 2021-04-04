<template>
  <div class="container mt-4">
    <Categories />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Categories from '@/components/Categories.vue'

@Options({
  components: {
    Categories
  },
})

export default class CategoriesView extends Vue {}
</script>