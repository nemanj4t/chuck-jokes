<template>
    <div class="row">
        <Category 
            v-for="category in categories" 
            :key="category.getName" 
            :name="category.getName" />
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
            .then(allCategories => this.categories = allCategories)
            .catch(error => console.log(error));
    }
}
</script>