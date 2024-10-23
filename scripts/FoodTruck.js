import { Sales } from "./Sales.js";
import { Entrees } from "./Entrees.js";
import { Vegetables } from "./Vegetables.js";
import { SideDishes } from "./SideDishes.js";
import TransientState from "./transientState.js";

export const FoodTruck = async () => {
  const salesHTML = await Sales();
  const entreesHTML = Entrees();
  const vegetablesHTML = Vegetables();
  const sidesHTML = SideDishes();

  return `
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
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("purchase").addEventListener("click", async () => {
    const selectedEntree = TransientState.getDishSelection();
    const selectedVegetable = TransientState.getVegetableSelection();
    const selectedSide = TransientState.getSideDishSelection();

    if (selectedEntree && selectedVegetable && selectedSide) {
      const totalPrice = (
        parseFloat(selectedEntree.price) +
        parseFloat(selectedVegetable.price) +
        parseFloat(selectedSide.price)
      ).toFixed(2);

      const newPurchase = {
        entree_id: selectedEntree,
        vegetable_id: selectedVegetable,
        side_dish_id: selectedSide,
        total_price: totalPrice,
      };

      await TransientState.savePurchase(newPurchase);
      TransientState.clearSelections();

      const updatedSalesHTML = await Sales();

      document.querySelector(".customerOrders").innerHTML = `
                <h2>Monthly Sales</h2>
                ${updatedSalesHTML}
            `;
    } else {
      alert(
        "Please select an entree, vegetable, and side before making a purchase!"
      );
    }
  });
});
