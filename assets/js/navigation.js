const navigation = (function() {
  //Buttons
  const startBtn = document.querySelector("#start");
  const optionsBtn = document.querySelectorAll(".button-sex");
  const form = document.querySelector("#form");

  let activeSection = 0;

  function changeSection() {
    let sections = document.querySelector(`#section${activeSection}`);
    sections.classList.toggle("show");
    sections.classList.toggle("hidden");
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

  return {
    form: form,
    optionsBtn: optionsBtn
  }
})();
