<template>
    <div class="row">
        <Category 
            v-for="category in categories" 
            :key="category.name" 
            :name="category.name" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Category from '@/components/Category.vue';
import CategoryModel from '@/models/Category';
import CategoryService from '@/services/ModelServices/CategoryService';
import EventBusService from '@/services/EventBusService';

@Options({
    components: {
        Category
    }
})

export default class Categories extends Vue {

    public categories: CategoryModel[] = [];

    mounted(): void {
        CategoryService
            .getAll()
            .then(allCategories => this.categories = allCategories)
            .catch(error => EventBusService.publish('error', 'App', error.response['data'].message));
    }
}
</script>