export const Sales = async () => {
  let salesHTML = "";

  await fetch("http://localhost:8080/purchases")
    .then((response) => response.json())
    .then((data) => {
      const sales = data.purchases;

      if (sales.length === 0) {
        salesHTML = "<p>No purchases made yet.</p>";
      } else {
        salesHTML = sales
          .map(
            (sale, index) =>
              `<div class="sale">
                        Receipt #${index + 1} = $${parseFloat(
                sale.total_price
              ).toFixed(2)}
                    </div>`
          )
          .join("");
      }

      document.querySelector(".customerOrders").innerHTML = salesHTML;
    });
  // .catch((error) => console.error("Error fetching sales:", error));

  return salesHTML;
};
