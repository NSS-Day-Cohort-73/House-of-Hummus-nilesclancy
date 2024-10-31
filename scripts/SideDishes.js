import { sideChangeEvent } from "./transientState.js";

export const SideDishes = async () => {
  let sidesHTML = "";

  await fetch("http://localhost:8080/sides")
    .then((response) => response.json())
    .then((data) => {
      const sides = data.sides;

      sidesHTML = sides
        .map(
          (side) =>
            `<div key="${side.id}">
                    <input type="radio" id="side ${
                      side.id
                    }" name="sideDish" value="${side.id}" />
                    <label for="side ${side.id}">${
              side.title
            } - $${side.price.toFixed(2)}</label>
                </div>`
        )
        .join("");

      document.querySelectorAll('input[name="sideDish"]').forEach((input) => {
        input.addEventListener("change", (event) => {
          const select = event.target.value;
          sideChangeEvent(event.target.value);
        });
      });

      sidesHTML = document.querySelector("choices__sides").innerHTML;
    });
  // .catch((error) => console.error("Side selection error", error));

  return sidesHTML;
};
