<template>
    <p>
        {{ joke.value }}
    </p>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {
        Joke
    },

    props: [
        'joke'
    ]
})

export default class Joke extends Vue {}
</script>
