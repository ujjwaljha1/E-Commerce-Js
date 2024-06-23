export const findProductInCart = (cart, prodid) => {
    return cart && cart.length > 0 && cart.some(({ _id }) => _id == prodid);
  };
  