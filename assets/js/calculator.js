const calculator = (function(){
  const result = []; //BMR,CPM,PlanKcal,PlanName
  const micro = []; //protein,fat,carbohydrates

  function calcBMR(sex, weight, height, age) {
    switch(sex) {
      case "woman":
        result.push(Math.floor(655+(9.6*weight)+(1.8*height)-(4.7*age)));
        break;
      case "man":
        result.push(Math.floor(66+(13.7*weight)+(5*height)-(6.76*age)));
        break;
    }
  }

  function calcCPM(bmr, activity) {
    switch(activity) {
      case 'none':
        result.push(Math.floor(bmr*1.2));
        break;
      case 'low':
        result.push(Math.floor(bmr*1.4));
        break;
      case 'medium':
        result.push(Math.floor(bmr*1.6));
        break;
      case 'high':
        result.push(Math.floor(bmr*1.7));
        break;
      case 'very-high':
        result.push(Math.floor(bmr*1.9));
        break;
    }
  }

  function calcPlan(cpm,plan) {
    switch(plan) {
      case 'slim':
      result.push(cpm - 300);
      result[3] = 'schudnąć';
      break;
      case 'hold':
        result.push(cpm);
        result[3] = 'utrzymać wagę';
      break;
      case 'gain':
        result.push(cpm + 300);
        result[3] = 'przytyć';
      break;
    }
  }

  function calcMicro(weight,kcal) {
    micro.push(weight*2.5*4);
    micro.push(kcal*0.2);
    micro.push(kcal-(micro[0]+micro[1]));
  }

  function calcBMI(weight,height) {
    let bmi = Math.floor(weight/(height/100*height/100));
    if(bmi < 18.5) {
      bmi = `${bmi} (niedowaga)`;
    } else if(bmi > 18.5 && bmi <= 24.9) {
      bmi = `${bmi} (waga prawidłowa)`;
    } else if(bmi > 25 && bmi <= 29.9){
      bmi = `${bmi} (nadwaga)`;
    } else {
      bmi = `${bmi} (otyłość)`;
    }
    return bmi;
  }

  return {
    calcBMR: calcBMR,
    calcCPM: calcCPM,
    calcPlan: calcPlan,
    calcBMI: calcBMI,
    calcMicro: calcMicro,
    result: result,
    micro: micro
  }
})();
