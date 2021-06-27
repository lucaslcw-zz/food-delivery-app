export const setCategories = (payload: any) => ({
  type: 'SET_CATEGORIES',
  payload,
});

export const setCategory = (payload: any) => ({
  type: 'SET_CATEGORY',
  payload,
});

export const setProducts = (payload: any) => ({
  type: 'SET_PRODUCTS',
  payload,
});

export const setContentProductModal = (payload: any) => ({
  type: 'SET_CONTENT_PRODUCT_MODAL',
  payload,
});

export const deleteContentProductModal = () => ({
  type: 'DELETE_CONTENT_PRODUCT_MODAL',
});
