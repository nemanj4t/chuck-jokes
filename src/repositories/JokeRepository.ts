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

        await this.getAxios
            .get(GET_RANDOM_JOKE_FROM_CATEGORTY + category)
            .then(response => {
                const {data} = response; 
                joke.setId = data.id;
                joke.setIconUrl = data.icon_url;
                joke.setUrl = data.url;
                joke.setValue = data.value;
            })
            .catch(error => {
                console.log(error);
            })

        return joke;
    } 
}

export default JokeRepository.getRepository();