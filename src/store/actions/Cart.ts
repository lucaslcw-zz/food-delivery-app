export const openCartModal = () => ({
  type: 'OPEN_CART_MODAL',
});

export const closeCartModal = () => ({
  type: 'CLOSE_CART_MODAL',
});

export const addProductCart = (payload: any) => ({
  type: 'ADD_PRODUCT_CART',
  payload,
});

export const removeProductCart = (payload: any) => ({
  type: 'REMOVE_PRODUCT_CART',
  payload,
});

export const cleanCart = () => ({
  type: 'CLEAN_CART',
});
