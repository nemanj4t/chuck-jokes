<template>
    <div class="col-md-3 col-sm-6 col-12 mt-2 p-4">
        <router-link 
            class="button-custom" 
            :to="'/categories/' + name"
        >
            {{ name }}
        </router-link>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Joke from '@/components/Joke.vue'

@Options({
    components: {
        Joke
    },

    props: [
        'name'
    ]
})

export default class Category extends Vue {}
</script>

<style lang="scss" scoped>
    @import '@/scss/category.scss';
</style>
