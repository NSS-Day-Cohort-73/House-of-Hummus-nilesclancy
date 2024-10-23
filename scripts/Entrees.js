import { transientState } from "./transientState.js";

export const Entrees = () => {
  let entreesHTML = "";

  fetch("http://localhost:3000/api/database.json")
    .then((response = response.json()))
    .then((data) => {
      const entrees = data.entrees;

      entreesHTML = entrees
        .map(
          (entree) =>
            `<div key="${entree.id}">
                    <input type="radio" id="entree ${
                      entree.id
                    }" name="entree" value="${entree.id}" />
                    <label for="entree ${entree.id}">${
              entree.name
            } - $${entree.price.toFixed(2)}</label>
                </div>`
        )
        .join("");

      document.querySelectorAll("input[name=entree]").forEach((input) => {
        input.addEventListener("change", (even) => {
          const select = event.target.value;
          transientState.storeSelectedEntree;
        });
      });

      entreesHTML = document.querySelector("choices__base").innerHTML;
    });
  // .catch(error => console.error('error fetching entrees', error))

  return entreesHTML;
};
