document.getElementById('foodForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const foodItem = document.getElementById('foodInput').value;
  const apiUrl = `https://world.openfoodfacts.org/api/v0/product/${foodItem}.json`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = '';  // Limpa os resultados anteriores

      if (data.status === 1) {
        const product = data.product;
        const foodName = product.product_name || 'N/A';
        const servingSize = product.serving_size || 'N/A';
        const calories = product.nutriments['energy-kcal'] || 'N/A';

        const resultList = `
          <ul>
            <li><strong>Food:</strong> ${foodName}</li>
            <li><strong>Serving Size:</strong> ${servingSize}</li>
            <li><strong>Calories:</strong> ${calories} kcal</li>
          </ul>
        `;
        resultDiv.innerHTML = resultList;
      } else {
        resultDiv.innerHTML = '<p>No results found for this item.</p>';
      }
    })
    .catch(error => {
      document.getElementById('result').innerHTML = '<p>Error fetching data.</p>';
      console.error('Error:', error);
    });
});
