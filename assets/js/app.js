const app = (function() {
  let sex;
  navigation.optionsBtn.forEach((el) => {
    el.addEventListener('click', () => {
      sex = el.value;
    });
  });

  navigation.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    const age = document.querySelector('#age').value;
    const plans = document.querySelectorAll('input[name="plan"]');
    let plan;
    plans.forEach((el) => {
      if(el.checked) {
        plan = el.value;
      }
    });
    const activity = document.querySelector('#activity').value;

    calculator.calcBMR(sex, weight, height, age);
    calculator.calcCPM(calculator.result[0], activity);
    calculator.calcPlan(calculator.result[1], plan);
    calculator.calcMicro(weight,calculator.result[2]);

    view.showResult(calculator.result, calculator.micro, calculator.calcBMI(weight, height), calculator.result[3]);
  });
})();
