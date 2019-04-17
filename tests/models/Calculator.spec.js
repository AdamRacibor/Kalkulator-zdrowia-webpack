import { expect } from 'chai';
import Calculator from '../../src/js/models/Calculator';

let calculatorForMan;
let calculatorForWoman;

const man = {
    weight: 90,
    height: 180,
    age: 20,
    sex: 'man',
    plan: 'slim',
    activity: 'none'
};
const woman = {
    weight: 90,
    height: 180,
    age: 20,
    sex: 'woman',
    plan: 'slim',
    activity: 'none'
};

before(() => {
    calculatorForMan = new Calculator(man);
    calculatorForWoman = new Calculator(woman);
});

describe("Calculator BMR methods", () => {
    it("Calculate man BMR and return value", () => {
        expect(calculatorForMan.calculateBMR()).equal(2063);
    });
    it("Calculate woman BMR and return value", () => {
        expect(calculatorForWoman.calculateBMR()).equal(1749);
    });
});

describe("Calculator CPM methods", () => {
    it("Calculate CPM and return value", () => {
        expect(calculatorForMan.calculateCPM()).equal(2475);
    });
});

describe("Calculator Plan methods", () => {
    it("Calculate Plan and return value", () => {
        expect(calculatorForMan.calculatePlan()).equal(2175);
    });
});

describe("Calculator Micro methods", () => {
    it("Calculate Micro and return value", () => {
        expect(calculatorForMan.calculateMicro()).deep.equal({
            protein: 326,
            carbohydrates: 652,
            fats: 1197
        });
    });
});

describe("Calculator BMI methods", () => {
    it("Calculate BMI and return value", () => {
        expect(calculatorForMan.calculateBMI()).equal("27 (nadwaga)");
    });
});