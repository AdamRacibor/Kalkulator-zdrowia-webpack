const navigation = (function() {
  //Buttons
  const startBtn = document.querySelector("#start");
  const optionsBtn = document.querySelectorAll(".button-sex");
  const form = document.querySelector("#form");
  const resetBtn = document.querySelector('#reset');

  let activeSection = 0;

  function changeSection() {
    let sections = document.querySelector(`#section${activeSection}`);
    sections.classList.toggle("show");
    sections.classList.toggle("hidden");
    if(activeSection === 3) {
      activeSection = 0;
    }
    activeSection++;
    sections = document.querySelector(`#section${activeSection}`);
    sections.classList.toggle("hidden");
    sections.classList.toggle("show");
  }

  //Buttons listeners
  startBtn.addEventListener("click", changeSection);
  optionsBtn.forEach(el => {
    el.addEventListener("click", changeSection);
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    changeSection();
  });
  resetBtn.addEventListener('click', changeSection);

  return {
    form: form,
    optionsBtn: optionsBtn,
    resetBtn: resetBtn
  }
})();
