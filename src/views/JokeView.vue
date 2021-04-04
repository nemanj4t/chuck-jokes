<template>
  <div>
    <div @click="goBack">return back</div>
    <Joke :joke="this.joke" />
    <button @click="readAnotherOne">Show me another</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Joke from '@/components/Joke.vue';
import JokeModel from '@/models/Joke'
import JokeRepository from '@/repositories/JokeRepository';

@Options({
  components: {
    Joke
  },
})

export default class JokeView extends Vue {
  
  public joke: JokeModel = new JokeModel();
  public category: string|string[] = "";

  mounted() {
    this.category = this.$route.params.category;
    this.readAnotherOne();
  }

  readAnotherOne(): void {
    JokeRepository
      .getRandomJoke(this.category)
      .then((response) => this.joke = response);
  }

  goBack(): void {
    this.$router.push('/');
  }
}
</script>