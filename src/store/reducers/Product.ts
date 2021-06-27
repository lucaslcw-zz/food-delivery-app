const INITIAL_STATE = {
  categories: [],
  products: [],
  typeOfCategory: '',
  productModal: {
    isVisibled: false,
    content: {},
  },
};

const ProductReducer = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: payload,
        typeOfCategory: payload[0].title,
      };

    case 'SET_CATEGORY':
      return { ...state, typeOfCategory: payload };

    case 'SET_PRODUCTS':
      return { ...state, products: payload };

    case 'SET_CONTENT_PRODUCT_MODAL':
      return { ...state, productModal: { isVisibled: true, content: payload } };

    case 'DELETE_CONTENT_PRODUCT_MODAL':
      return { ...state, productModal: { isVisibled: false, content: {} } };

    default:
      return state;
  }
};

export default ProductReducer;
