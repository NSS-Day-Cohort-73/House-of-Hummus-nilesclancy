import { FoodTruck } from "./FoodTruck.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
  mainContainer.innerHTML = `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class="choices">
            <section class="choices__base"></section>
            <section class="choices__veggies"></section>
            <section class="choices__sides"></section>
        </article>
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>
        <article class="customerOrders">
            <h2>Monthly Sales</h2>
        </article>
    `;

  FoodTruck();
};

renderAllHTML();
