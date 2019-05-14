import '../scss/style.scss';

import { elements } from './views/base';

//Views
import * as navigationView from './views/navigationView';
import * as resultView from './views/resultView';

//Models
import Person from './models/Person';
import Calculator from './models/Calculator';

const status = {};

elements.headerBtn.addEventListener('click', () => {
    navigationView.moveToSection('header', 'first-step');
});

let sex;
elements.buttonSex.forEach(btn => {
    btn.addEventListener('click', () => {
        sex = btn.value;
        navigationView.moveToSection('first-step', 'second-step');
    });
});

elements.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = elements.weight.value;
    const height = elements.height.value;
    const age = elements.age.value;
    const activity = elements.activity.value;
    let plan;

    elements.planRadio.forEach(el => {
        if(el.checked) {
            plan = el.value;
        }
    });

    status.person = new Person(weight, height, age, sex, plan, activity);
    status.calculator = new  Calculator(status.person);

    status.person.addBMR(status.calculator.calculateBMR());
    status.person.addCPM(status.calculator.calculateCPM());
    status.person.addTarget(status.calculator.calculatePlan());
    status.person.addMicro(status.calculator.calculateMicro());
    status.person.addBMI(status.calculator.calculateBMI());
    status.person.changePlanName();

    navigationView.moveToSection('second-step', 'result');
    resultView.createResult(status.person);
});

elements.reset.addEventListener('click', () => {
    window.location.reload(true);
});
