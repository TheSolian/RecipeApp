type Recipe = {
    name: string;
    ingredients: Ingredient[];
    description: string;
    preparation: string;
}

type Ingredient = {
    name: string;
    quantity: string;
}