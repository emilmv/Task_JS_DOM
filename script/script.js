let description = document.getElementById("description");
let output = document.getElementById("output");
let input1 = document.getElementById("firstInput");
let input2 = document.getElementById("secondInput");

let addition = document //toplama
  .getElementById("additionButton")
  .addEventListener("click", function () {
    output.classList.remove("display-none");
    output.value = parseInt(input1.value) + parseInt(input2.value);
    description.innerHTML = `${input1.value}+${input2.value} =`;
    input1.value = "";
    input2.value = "";
  });

let subtraction = document
  .getElementById("subtraction")
  .addEventListener("click", function () {
    output.classList.remove("display-none");
    output.value = parseInt(input1.value) - parseInt(input2.value);
    description.innerHTML = `${input1.value}-${input2.value} =`;
    input1.value = "";
    input2.value = "";
  });

let multiplication = document
  .getElementById("multiplication")
  .addEventListener("click", function () {
    output.classList.remove("display-none");
    output.value = parseInt(input1.value) * parseInt(input2.value);
    description.innerHTML = `${input1.value}*${input2.value} =`;
    input1.value = "";
    input2.value = "";
  });

let division = document
  .getElementById("division")
  .addEventListener("click", function () {
    if (input2.value == 0) {
      description.innerHTML = "0-a bölmək mümkün deyil";
      input1.value = "";
      input2.value = "";
      output.classList.add("display-none")
      return;
    }
    output.classList.remove("display-none");
    output.value = parseInt(input1.value) / parseInt(input2.value);
    description.innerHTML = `${input1.value}/${input2.value} =`;
    input1.value = "";
    input2.value = "";
  });
