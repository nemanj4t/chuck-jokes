import Category from '@/models/Category'
import Repository from '@/repositories/Repository'

import { GET_ALL_CATEGORIES } from '@/api'

class CategoryRepository extends Repository {

    private static repository: CategoryRepository;
    private categories: Category[] = [];

    public static getRepository(): CategoryRepository {
        if (!this.repository) {
            this.repository = new CategoryRepository;
        }

        return this.repository;
    }

    public async getAll(): Promise<Category[]> {
        
        if (this.categories.length == 0) {
            await this.getAxios
                .get(GET_ALL_CATEGORIES)
                .then(response => {
                    for (const category of response.data) {
                        this.categories.push(new Category(category));
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }

        return this.categories;
    } 
}

export default CategoryRepository.getRepository();