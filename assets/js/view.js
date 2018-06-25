const view = (function() {
  function showResult(result,micro,bmi,plan) {
    const bmrText = document.querySelector('#bmr');
    const planText = document.querySelector('#plan');
    const cpmText = document.querySelector('#cpm');
    const bmiText = document.querySelector('#bmi');
    const protText = document.querySelector('#prot');
    const fatText = document.querySelector('#fat');
    const carboText = document.querySelector('#carbo');

    bmrText.textContent = `${result[0]} kcal`;
    planText.textContent = result[3];
    cpmText.textContent = `${result[2]} kcal`;
    bmiText.textContent = bmi;

    protText.textContent = `${(micro[0]/4).toFixed(1)}g`;
    carboText.textContent = `${(micro[2]/4).toFixed(1)}g`;
    fatText.textContent = `${(micro[1]/9).toFixed(1)}g`;
  }

  return {
    showResult: showResult
  }
})();
