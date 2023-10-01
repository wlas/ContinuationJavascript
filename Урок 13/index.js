
const basketTotalEl = document.querySelector('.basketTotal');
const basketTotalValueEl = document.querySelector('.basketTotalValue');
const cartIcon = document.querySelector('.header_right_cartIcon span');
const cartIconEl = document.querySelector('.header_right_cartIcon');
const basketEl = document.querySelector('.basket');

const basket = {};

/** 
 * Функция вывода товара из БД.
 */
async function fetchData() {
    try {
        const response = await fetch('data.json');
        if(!response.ok){
            throw new Error('Не удалось получить данные из data JSON');
        }
        const data = await response.json();
        const productBox = document.querySelector('.featuredItems');
        data.forEach(({id, name, image, text, price}) => {
            const product_item = `            
            <div class="featuredItem">
                <div class="featuredImgWrap">
                    <img src="${image}" alt="${name}">
                    <div class="featuredImgDark">
                        <button class="addToCart" data-id="${id}" data-name="${name}" data-price="${price}">
                            <img src="img/cart.svg" alt="${name}">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="featuredData">
                    <a href="product.html">
                        <h2 class="product_item_h2">${name}</h2>
                    </a>
                    <p class="product_item_p">${text}</p>
                    <p class="product_item_cent">$${price}"</p>
                </div>
            </div>`;
          productBox.insertAdjacentHTML('beforeend', product_item);
        });
    } catch (error) {
        console.error(error);
    }
}

/** 
 * Функция отслеживания кликов пользователя на добавление товаров корзину.
 */
function basketUser() { 

  cartIconEl.addEventListener('click', () => {
        basketEl.classList.toggle('hidden');
    } )    

    const featuredItemsEl = document.querySelector('.featuredItems');
    featuredItemsEl.addEventListener('click', event => {
        if (event.target.tagName === "BUTTON") {
              const addCartEl = event.target;          
              const id = addCartEl.dataset.id;            
              const name = addCartEl.dataset.name;
              const price = addCartEl.dataset.price;
              addToCart(id, name, price); 
        }  
    })
}

/** 
 * Функция добавления товара в корзину.
 */
function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = {id: id, name: name, price: price, count: 0};
    }
    basket[id].count++;    
    cartIcon.textContent = getTotalBasketCount().toString();    
    basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);  
    addProductBasket(id);
}

/**
 * Считает и возвращает количество продуктов в корзине.
 */
function getTotalBasketCount() {
    return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}
/**
 * Общая стоимость в корзине.
 */
function getTotalBasketPrice() {
    return Object.values(basket).reduce((acc, product) => acc + product.price * product.count, 0);
}
/**
 * Отрисовка товара в корзине.
 */
function addProductBasket(productId) {
    const basketRowEl = basketEl
      .querySelector(`.basketRow[data-id="${productId}"]`);
    if (!basketRowEl) {
      addNewProductBasket(productId);
      return;
    }
    const product = basket[productId];
    basketRowEl.querySelector('.productCount').textContent = product.count;
    basketRowEl.querySelector('.productTotalRow').textContent = (product.price * product.count).toFixed(2);
}
/**
 * Отрисовка нового товара в корзине.
 */
function addNewProductBasket(productId) {
  const productRow = `
    <div class="basketRow" data-id="${productId}">
      <div>${basket[productId].name}</div>
      <div>
        <span class="productCount">${basket[productId].count}</span> шт.
      </div>
      <div>$${basket[productId].price}</div>
      <div>
        $<span class="productTotalRow">${(basket[productId].price * basket[productId].count).toFixed(2)}</span>
      </div>
    </div>
    `;
  basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

/* Вывод функций.*/
fetchData();
basketUser();