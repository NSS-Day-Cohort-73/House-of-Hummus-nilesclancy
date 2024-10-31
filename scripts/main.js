import { FoodTruck } from "./FoodTruck.js";

const mainContainer = document.querySelector("#container");

const renderAllHTML = async () => {
  mainContainer.innerHTML = await FoodTruck();
};

renderAllHTML();

// import { FoodTruck } from "./FoodTruck.js";
// import { }
// // import transientState from "./transientState.js";

// const mainContainer = document.querySelector("#container");

// const renderAllHTML = async () => {
//   mainContainer.innerHTML = `
//         <header class="header">
//             <img src="./images/hummus.png" class="logo" />
//             <h1 class="title">House of Hummus</h1>
//         </header>
//         <article class="choices">
//             <section class="choices__base"></section>
//             <section class="choices__veggies"></section>
//             <section class="choices__sides"></section>
//         </article>
//         <article>
//             <button id="purchase">Purchase Combo</button>
//         </article>
//         <article class="customerOrders">
//             <h2>Monthly Sales</h2>
//         </article>
//     `;

//   await FoodTruck();
// };

// renderAllHTML();
