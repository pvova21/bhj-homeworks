const products = document.querySelectorAll('.product__quantity-control');
const productsAdd = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');

products.forEach(productsControl => {
  productsControl.addEventListener('click', e => {
    if (e.target.classList.contains('product__quantity-control_dec')) {
      if (Number(e.target.parentElement.querySelector('.product__quantity-value').textContent) >= 2) {
        --e.target.parentElement.querySelector('.product__quantity-value').textContent;
      }
    };
    if (e.target.classList.contains('product__quantity-control_inc')) {
      ++e.target.parentElement.querySelector('.product__quantity-value').textContent;
    };
  })
})

function createCartItem(id, quantity, imageUrl) {
  const newCartItem = document.createElement('div');
  const itemHTMLContent = `<div class="cart__product" data-id="${id}"><img class="cart__product-image" src="${imageUrl}"><div class="cart__product-count">${quantity}</div>`;
  cart.appendChild(newCartItem);
  newCartItem.outerHTML = itemHTMLContent;
}

function modifyCartItem(product, quantity) {
  product.querySelector('.cart__product-count').textContent = Number(product.querySelector('.cart__product-count').textContent) + Number(quantity);
}

function addToCart(product) {
  product.id = product.dataset.id;
  product.quantity = product.querySelector('.product__quantity-value').textContent;
  product.image = product.querySelector('.product__image').src;
    if (cart.children.length > 0 && Array.from(cart.children).find(elem => elem.dataset.id === product.id)) {
    modifyCartItem(Array.from(cart.children).find(elem => elem.dataset.id === product.id), product.quantity);
    } else {
  createCartItem(product.id, product.quantity, product.image);
  }
}

productsAdd.forEach(toCartButton => {
  toCartButton.addEventListener('click', e => {
    addToCart(e.target.closest('.product'));
  })
})