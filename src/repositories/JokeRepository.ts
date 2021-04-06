import Joke from '@/models/Joke'
import Repository from '@/repositories/Repository'

import { GET_RANDOM_JOKE_FROM_CATEGORTY } from '@/api'

class JokeRepository extends Repository {

    private static repository: JokeRepository;

    public static getRepository(): JokeRepository {
        if (!this.repository) {
            this.repository = new JokeRepository;
        }

        return this.repository;
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

export default JokeRepository.getRepository();