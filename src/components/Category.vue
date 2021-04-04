<template>
    <div>
        {{ name }}
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
