export function userIsRegistered() {
  if (localStorage.getItem("firstName") === null) return false;
  return true;
}

export function cartGuestIsEmpty() {
  if (localStorage.getItem("cartGuest") === null) return true;
  return false;
}

//При авторизации товары гостя помещаются в его корзину из localStorage.
export function addProductsGuestCart() {
  if (!cartGuestIsEmpty()) {
    JSON.parse(localStorage.getItem("cartGuest")).map(id =>
      fetch("https://sneakers-shop-back.herokuapp.com/cart/add/", {
        method: "POST",
        body: JSON.stringify({ _id: id }),
        headers: {
          "Content-Type": "application/json"
        }
      })
    );
    localStorage.removeItem("cartGuest");
  }
}
