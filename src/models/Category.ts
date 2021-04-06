class Category {

    constructor(private name: string) {   
    }

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }
}

export default Category;