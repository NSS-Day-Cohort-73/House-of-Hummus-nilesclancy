import { transientState } from "./transientState";

export const Vegetables = () => {
  let vegetablesHTML = "";

  fetch("http://localhost:3000/api/database.json")
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
          transientState.storeSelectedVegetable(select);
        });

        document.querySelector(".choices__veggies").innerHTML = vegetablesHTML;
      });
    })
    .catch((error) => console.error("error fetching veggies", error));

  return vegetablesHTML;
};
