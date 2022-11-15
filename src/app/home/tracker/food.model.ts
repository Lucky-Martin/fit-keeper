export interface IMacros {
    protein: number;
    carbs: number;
    fats: number;
}

export class Macros implements IMacros {
    protein: number = 0;
    carbs: number = 0;
    fats: number = 0;
}

export class Food {
    name: string = '';
    calories: number = 0;
    macros: Macros = new Macros();
}