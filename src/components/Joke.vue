<template>
    <div class="joke">
        <img :src="joke.getIconUrl" />
        <p class="joke-text mt-4">{{ joke.getValue }}</p>
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
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .joke {
        text-align: center;
    }

    .joke-text {
        max-width: 450px;
        font-size: 1.25rem;
    }
</style>
