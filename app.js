const inputField = document.getElementById("human-years");
const convertBtn = document.getElementById("convert-btn");
// en output
const enDogAge = document.getElementById("dog");
const enCatAge = document.getElementById("cat");
// es output
const esDogAge = document.getElementById("perro");
const esCatAge = document.getElementById("gato");



convertBtn.addEventListener("click", () => {
  const dogAge = humanYearsToCatAndDog(inputField.value)[1];
  const catAge = humanYearsToCatAndDog(inputField.value)[2];

  // EN
  try {
    enDogAge.textContent = `Your dog is: ${dogAge} years old`;
    enCatAge.textContent = `Your cat is: ${catAge} years old`;
  } catch (error) {
    console.log(error);
  }

  // ES
  try {
    esDogAge.textContent = `Tu perro tiene: ${dogAge} años`;
    esCatAge.textContent = `Tu gato tiene: ${catAge} años`;
  } catch (error) {
    console.log(error);
  }
});

/**@return int array [human_yrs, dog_yrs, cat_yrs] */
const humanYearsToCatAndDog = (humanYears) => {
  // default
  if (humanYears == undefined || !humanYears || humanYears == 0) return [0, 0, 0];
  // +15 on first year
  if (humanYears == 1) return [1, 15, 15];
  // +9 on the second year
  else if (humanYears == 2) return [2, 9 + 15, 9 + 15];
  // +4 on the rest of the years
  return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
};