import Category from '@/models/Category'
import ModelService from '@/services/ModelServices/ModelService'

import { GET_ALL_CATEGORIES } from '@/api'

class CategoryService extends ModelService {

    private static modelService: CategoryService;
    private categories: Category[] = [];

    public static getModelService(): CategoryService {
        if (!this.modelService) {
            this.modelService = new CategoryService;
        }

        return this.modelService;
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

export default CategoryService.getModelService();