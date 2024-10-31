import { Sales } from "./Sales.js";
import { Entrees } from "./Entrees.js";
import { Vegetables } from "./Vegetables.js";
import { SideDishes } from "./SideDishes.js";
import { getAllSelections } from "./transientState.js";

export const FoodTruck = async () => {
  const entreesHTML = Entrees();
  const sidesHTML = SideDishes();
  const salesHTML = await Sales();
  const vegetablesHTML = Vegetables();

  const hummusHTML = `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="choices__base">
                ${entreesHTML}
            </section>
            <section class="choices__veggies">
                ${vegetablesHTML}
            </section>
            <section class="choices__sides">
                ${sidesHTML}
            </section>
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>
    `;

  document.querySelector("#container").innerHTML = hummusHTML;

  document.getElementById("purchase").addEventListener("click", async () => {
    const selections = await getAllSelections();

    if (
      selections.selectedEntree &&
      selections.selectedVegetable &&
      selections.selectedSide
    ) {
      const newTransaction = {
        entree_id: selections.selectedEntree,
        vegetable_id: selections.selectedVegetable,
        side_dish_id: selections.selectedSide,
        total_price: (
          selections.selectedEntree +
          selections.selectedVegetable +
          selections.selectedSide
        ).toFixed(2),
      };

      await fetch("http://localhost:8080/purchases", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
      });

      const updatedSalesHTML = await Sales();
      document.querySelector(".customerOrders").innerHTML = `
                <h2>Monthly Sales</h2>
                ${updatedSalesHTML}
            `;
    } else {
      console.log("Please select an entree, vegetable, and side.");
    }
  });

  return hummusHTML;
};
