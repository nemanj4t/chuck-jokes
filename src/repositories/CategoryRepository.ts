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
        //cache categories
        if (this.categories.length == 0) {
            await this.client
                .get(GET_ALL_CATEGORIES)
                .then(response => {
                    for (const category of response.data) {
                        this.categories.push(new Category(category));
                    }
                });
        }

        return this.categories;
    } 
}

export default CategoryRepository.getRepository();