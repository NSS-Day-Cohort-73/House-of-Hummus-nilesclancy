import { vegetableChangeEvent } from "./transientState.js";

export const Vegetables = async () => {
  let vegetablesHTML = "";

  await fetch("http://localhost:8080/vegetables") //use await in this instance
    .then((response) => response.json())
    .then((data) => {
      const veggies = data.veggies;

      vegetablesHTML = veggies
        .map(
          (veggie) =>
            `<div key="${veggie.id}">
                <input type="radio" id="veggie ${
                  veggie.id
                }" name="vegetable" value="${veggie.id}" />
                <label for="veggie ${veggie.id}">${
              veggie.type
            } - $${veggie.price.toFixed(2)}</label>
                </div>`
        )
        .join("");

      document.querySelectorAll('input[name="vegetable"]').forEach((input) => {
        input.addEventListener("change", (event) => {
          const select = event.target.value;
          vegetableChangeEvent(event.target.value);
        });

        document.querySelector(".choices__veggies").innerHTML = vegetablesHTML;
      });
    });
  // .catch((error) => console.error("error fetching veggies", error));

  return vegetablesHTML;
};
