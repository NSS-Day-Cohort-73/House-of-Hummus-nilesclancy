const transientState = {
  selectedSide: 0,
  selectedEntree: 0,
  selectedVegetable: 0,
};

export const sideChangeEvent = (num) => {
  transientState.selectedSide = parseInt(num);
};

export const entreeChangeEvent = (num) => {
  transientState.selectedEntree = parseInt(num);
};

export const vegetableChangeEvent = (num) => {
  transientState.selectedVegetable = parseInt(num);
};

export const getAllSelections = async () => {
  return transientState, console.log(transientState);
};

// const transientState = (() => {
//   // creates immediately invoked function
//   let selectedEntree = null;
//   let selectedVegetable = null;
//   let selectedSide = null;

//   const storeDishSelection = (entreeId) => {
//     selectedEntree = entreeId;
//   };

//   const storeVegetableSelection = (vegetableId) => {
//     selectedVegetable = vegetableId;
//   };

//   const storeSideDishSelection = (sideDishId) => {
//     selectedSide = sideDishId;
//   };

//   const getDishSelection = () => selectedEntree;
//   const getVegetableSelection = () => selectedVegetable;
//   const getSideDishSelection = () => selectedSide;

//   const savePurchase = (purchase) => {
//     return fetch("http://localhost:3000/api/database.json", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(purchase),
//     })
//       .then((response) => response.json())
//       .catch((error) => console.error("Error saving purchase:", error));
//   };

//   const clearSelections = () => {
//     selectedEntree = null;
//     selectedVegetable = null;
//     selectedSide = null;
//   };

//   return {
//     storeDishSelection,
//     storeVegetableSelection,
//     storeSideDishSelection,
//     getDishSelection,
//     getVegetableSelection,
//     getSideDishSelection,
//     savePurchase,
//     clearSelections,
//   };
// })();

// export default transientState;

// // rebuild in accordance with the way that kneel-diamonds is built.
