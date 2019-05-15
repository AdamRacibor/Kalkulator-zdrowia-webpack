import { elements } from './base';

export const createResult = (person) => {
    elements.bmr.textContent = `${person.bmr} kcal`;
    elements.plan.textContent = person.plan;
    elements.cpm.textContent = `${person.target} kcal`;
    elements.bmi.textContent = person.bmi;
    elements.prot.textContent = `${person.micro.protein}g`;
    elements.carbo.textContent = `${person.micro.carbohydrates}g`;
    elements.fat.textContent = `${person.micro.fats}g`;
};