class Category {
    private name: string

    constructor(name: string) {
        this.name = name;
    }

    get getName(): string {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }

    public getRoute(): string {
        return "/categories/" + this.name;
    }
}

export default Category;