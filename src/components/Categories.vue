<template>
    <div>
        <Category v-for="category in categories" :key="category.getName" :name="category.getName" v-on:click="open(category)"/>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Category from '@/components/Category.vue';
import CategoryModel from '@/models/Category';
import CategoryRepository from '@/repositories/CategoryRepository';

@Options({
    components: {
        Category
    }
})

export default class Categories extends Vue {

    public categories: CategoryModel[] = [];

    created(): void {
        CategoryRepository
            .getAll()
            .then(allCategories => this.categories = allCategories);
    }

    open(category: CategoryModel): void {
        this.$router.push('/categories/' + category.getName);
    }
}
</script>
