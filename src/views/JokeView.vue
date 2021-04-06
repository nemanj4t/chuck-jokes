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
import JokeRepository from '@/repositories/JokeRepository';
import EventBusService from '@/service/EventBusService';

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

        JokeRepository
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
    .go-back-icon {
        width: 2rem;
        cursor: pointer;
    }
    
    .jok-view {
        text-align: center;
    }

    .button-custom {
        text-align: center;
        border: solid 1px;
        text-decoration: none;
        background-color: white;
        max-width: 450px;
        width: 100%;
        font-size: 1.25rem;

        &:hover {
            color: black;
            box-shadow: 1px 1px black;
        }
    }

    .joke-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>
