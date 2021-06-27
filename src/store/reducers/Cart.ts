const INITIAL_STATE = {
  cartModal: {
    isVisibled: false,
    items: [],
  },
};

const CartReducer = (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case 'OPEN_CART_MODAL':
      return {
        ...state,
        cartModal: { ...state.cartModal, isVisibled: true },
      };

    case 'CLOSE_CART_MODAL':
      return {
        ...state,
        cartModal: { ...state.cartModal, isVisibled: false },
      };

    case 'ADD_PRODUCT_CART':
      return {
        ...state,
        cartModal: {
          ...state.cartModal,
          items: [...state.cartModal.items, payload],
        },
      };

    case 'REMOVE_PRODUCT_CART':
      return {
        ...state,
        cartModal: {
          ...state.cartModal,
          items: state.cartModal.items.filter((product, index: number) => index !== payload),
        },
      };

    case 'CLEAN_CART':
      return {
        ...state,
        cartModal: {
          ...state.cartModal,
          items: [],
        },
      };

    default:
      return state;
  }
};

export default CartReducer;
