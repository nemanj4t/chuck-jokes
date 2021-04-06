<template>
    <div class="container mt-4 joke-view">
        <img src="../assets/left-arrow.svg" class="go-back-icon" @click="goBack" />

        <div class="joke-container mt-4">
            <Joke :joke="joke" />
            <Loader v-if="loading" />
            <button class="button-custom mt-4" @click="readAnotherOne">Another one</button>
        </div>
    </div>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Joke from '@/components/Joke.vue';
import Loader from '@/components/Loader.vue';
import JokeModel from '@/models/Joke';
import JokeService from '@/services/ModelServices/JokeService';
import EventBusService from '@/services/EventBusService';

@Options({
    components: {
        Joke,
        Loader
    },
})

export default class JokeView extends Vue {
  
    public joke: JokeModel = new JokeModel;
    public category: string|string[] = "";
    public loading = false;

    mounted() {
        this.category = this.$route.params.category;
        this.readAnotherOne();
    }

    readAnotherOne(): void {
        this.loading = true;

        JokeService
            .getRandomJoke(this.category)
            .then(response => this.joke = response)
            .catch(error => EventBusService.publish('error', 'App', error.response['data'].message))
            .finally(() => this.loading = false);
    }

    goBack(): void {
        this.$router.push('/');
    }
}
</script>

<style lang="scss" scoped>
    @import '@/scss/joke-view.scss';
</style>
