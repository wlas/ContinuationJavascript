async function fetchData() {
    try {
        const response = await fetch('data.json');
        if(!response.ok){
            throw new Error('Не удалось получить данные из data JSON');
        }
        const data = await response.json();
        const productBox = document.querySelector('.product');
        data.forEach(({name, image, text, price}) => {
            const product_item = `<div class="product_item">
            <img src="${image}" class="product_item_img" alt="${name}" />
            <div class="product_item_block">
              <a href="product.html">
                <h2 class="product_item_h2">${name}</h2>
              </a>
              <p class="product_item_p">
                ${text}
              </p>
              <p class="product_item_cent">$${price}</p>
            </div>
          </div>`;
          productBox.insertAdjacentHTML('beforeend', product_item);
        });
    } catch (error) {
        console.error(error);
    }
}

fetchData();