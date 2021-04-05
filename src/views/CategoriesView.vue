<template>
    <div class="container mt-4">
        <h2>Categories:</h2>
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