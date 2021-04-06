import Joke from '@/models/Joke'
import ModelService from '@/services/ModelServices/ModelService'

import { GET_RANDOM_JOKE_FROM_CATEGORTY } from '@/api'

class JokeService extends ModelService {

    private static modelService: JokeService;

    public static getModelService(): JokeService {
        if (!this.modelService) {
            this.modelService = new JokeService;
        }

        return this.modelService;
    }

    public async getRandomJoke(category: string|string[]): Promise<Joke> {
        const joke: Joke = new Joke;

        await this.client
            .get(GET_RANDOM_JOKE_FROM_CATEGORTY + category)
            .then(response => {
                const {data} = response; 
                joke.id = data.id;
                joke.iconUrl = data.icon_url;
                joke.url = data.url;
                joke.value = data.value;
            });

        return joke;
    } 
}

export default JokeService.getModelService();