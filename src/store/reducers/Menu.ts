const INITIAL_STATE = {
  categories: [],
  products: [],
  typeOfCategory: '',
};

const MenuReducer = (state = INITIAL_STATE, { type, payload }: any) => {
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

    default:
      return state;
  }
};

export default MenuReducer;
