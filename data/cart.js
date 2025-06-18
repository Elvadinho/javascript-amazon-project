export const cart = []; 

export function addTocart(productId){
  let matchingItem;
  let qty;

  const select = document.querySelector(`.js-quantity-selector-${productId}`);
  qty = Number(select.value);

  cart.forEach((item) => {
    if(productId === item.productId){
      matchingItem = item;
    }
  });

  if(matchingItem){
    matchingItem.quantity += qty; //update
  }else{
    cart.push({
      productId: productId,
      quantity: qty
    });
  }
}