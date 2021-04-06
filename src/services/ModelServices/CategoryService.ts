import Category from '@/models/Category'
import ModelService from '@/services/ModelServices/ModelService'

import { GET_ALL_CATEGORIES } from '@/api'

class CategoryService extends ModelService {

    private static _modelService: CategoryService;

    public static getModelService(): CategoryService {
        if (!this._modelService) {
            this._modelService = new CategoryService;
        }

        return this._modelService;
    }

    public async getAll(): Promise<Category[]> {
        const categories: Category[] = [];

        await this.client
            .get(GET_ALL_CATEGORIES)
            .then(response => {
                for (const category of response.data) {
                    categories.push(new Category(category));
                }
            });

        return categories;
    } 
}

export default CategoryService.getModelService();