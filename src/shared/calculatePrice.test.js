import {calculatePrice} from './calculatePrice';

describe("calculatePrice", () => {
    it("returns the sum of all the selected ingridiens", () => {
        expect(calculatePrice({
            ingridients:{
                size: "large",
                dough: "thin",
                sauces: "tomato",
                cheeses: ["mozzarella", "cheddar", "dorblue"],
                vegs: ["tomato", "mushrooms", "pepper", "pineapple","olives", "onion", "broccoli"],
                meats: ["bacon", "pepperoni", "ham", "chiken", "salami"]
            }
        })).toEqual(685)
    })
});