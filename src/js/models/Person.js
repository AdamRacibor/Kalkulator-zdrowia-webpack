export default class Person {
    constructor(weight, height, age, sex, plan, activity) {
        this.weight = weight;
        this.height = height;
        this.age = age;
        this.sex = sex;
        this.plan = plan;
        this.activity = activity;
    }

    addBMI(bmi) {
        this.bmi = bmi;
    }
    addBMR(bmr) {
        this.bmr = bmr;
    }
    addTarget(target) {
        this.target = target;
    }
    addMicro(micro) {
        this.micro = {
            protein: micro.protein,
            carbohydrates: micro.carbohydrates,
            fats: micro.fats
        };
    }
    addCPM(cpm) {
        this.cpm = cpm;
    }
    changePlanName() {
        switch (this.plan) {
            case 'slim':
                this.plan = "Schudnąć";
                break;
            case 'hold':
                this.plan = "Utrzymać";
                break;
            case 'gain':
                this.plan = "Przytyć";
                break;
        }
    }
}