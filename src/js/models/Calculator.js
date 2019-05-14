export default class Calculator {
    constructor(person) {
        this.person = person;
    }

    calculateBMR() {
        if(this.person.sex === "man") {
            this.bmr = Math.floor(66 + (13.7 * this.person.weight) + (5 * this.person.height) - (6.76 * this.person.age));
        } else {
            this.bmr = Math.floor(655 + (9.6 * this.person.weight) + (1.8 * this.person.height) - (4.7 * this.person.age));
        }
        return this.bmr;
    }

    calculateCPM() {
        switch(this.person.activity) {
            case 'none':
                this.cpm = Math.floor(this.bmr * 1.2);
                break;
            case 'low':
                this.cpm = Math.floor(this.bmr * 1.4);
                break;
            case 'medium':
                this.cpm = Math.floor(this.bmr * 1.6);
                break;
            case 'high':
                this.cpm = Math.floor(this.bmr * 1.7);
                break;
            case 'very-high':
                this.cpm = Math.floor(this.bmr * 1.9);
            break;
        }
        return this.cpm;
    }

    calculatePlan() {
        switch (this.person.plan) {
            case 'slim':
                this.target = this.cpm - 300;
                break;
            case 'hold':
                this.target = this.cpm;
                break;
            case 'gain':
                this.target = this.cpm + 300;
                break;
        }
        return this.target;
    }

    calculateMicro() {
        this.protein = Math.floor(this.target * 0.15);
        this.carbohydrates = Math.floor(this.target * 0.55);
        this.fats = Math.floor(this.target*0.30);

        return {
            protein: Math.floor(this.protein/4),
            carbohydrates: Math.floor(this.carbohydrates/4),
            fats: Math.floor(this.fats/9)
        };
    }

    calculateBMI() {
        const bmi = Math.floor(this.person.weight / (this.person.height / 100 * this.person.height / 100));
        if (bmi < 18.5) {
            this.bmi = `${bmi} (niedowaga)`;
        } else if (bmi > 18.5 && bmi <= 24.9) {
            this.bmi = `${bmi} (waga prawidłowa)`;
        } else if (bmi > 25 && bmi <= 29.9) {
            this.bmi = `${bmi} (nadwaga)`;
        } else {
            this.bmi = `${bmi} (otyłość)`;
        }
        return this.bmi;
    }
}