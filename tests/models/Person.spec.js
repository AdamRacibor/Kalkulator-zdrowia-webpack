import { expect } from 'chai';
import Person from '../../src/js/models/Person';

let person;

before(() => {
    person = new Person(90, 180, 20, 'man', 'slim', 'none');
});

describe("Person properties", () => {
    it('Create object Person with 6 propertis (weight, height, age, sex, plan, activity)', () => {
        expect(person).to.deep.equal({
            weight: 90,
            height: 180,
            age: 20,
            sex: 'man',
            plan: 'slim',
            activity: 'none'
        });
    });
});

describe("Person methods", () => {
    it('Add propertie BMI, when use method addBMI', () => {
        person.addBMI(20)
        expect(person).to.have.property('bmi').equal(20);
    });
    it('Add propertie BMR, when use method addBMR', () => {
        person.addBMR(10)
        expect(person).to.have.property('bmr').equal(10);
    });
    it('Add propertie CPM, when use method addCPM', () => {
        person.addCPM(5)
        expect(person).to.have.property('cpm').equal(5);
    });
    it('Add propertie target, when use method addTarget', () => {
        person.addTarget(2019)
        expect(person).to.have.property('target').equal(2019);
    });
    it('Add propertie micro, when use method addMicro', () => {
        person.addMicro({
            protein: 326,
            carbohydrates: 652,
            fats: 1197
        });
        expect(person).to.have.property('micro').deep.equal({
            protein: 326,
            carbohydrates: 652,
            fats: 1197
        });
    });
    it('Translates the plan', () => {
        person.changePlanName('slim');
        expect(person.plan).equal('Schudnąć');
    });
});