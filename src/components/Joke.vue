<template>
    <div class="joke">
        <img :src="joke.iconUrl" />
        <p class="joke-text mt-4">{{ joke.value }}</p>
    </div>
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

<style lang="scss" scoped>
    @import '@/scss/joke.scss';
</style>
