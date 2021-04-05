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
    .button-custom {
        width: 100%;
        font-size: 1.5rem;
        text-align: center;
        border: solid 1px;
        text-decoration: none;
        background-color: white;
        max-width: 450px;
        width: 100%;
        color: black;
        display: inherit;

        &:hover {
            color: black;
            box-shadow: 1px 1px black;
        }
    }
</style>
