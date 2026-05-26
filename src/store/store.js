import { createStore } from 'redux';

const defaultState = [
  { id: 1, title: 'Велосипед', count: 5 },
  { id: 2, title: 'Самокат', count: 4 },
  { id: 3, title: 'Гантели', count: 7 },
  { id: 4, title: 'Ракетки', count: 1 }
];

const ADD_PRODUCT = 'ADD_PRODUCT';
const INCREMENT_PRODUCT = 'INCREMENT_PRODUCT';
const DECREMENT_PRODUCT = 'DECREMENT_PRODUCT';

function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const newTitle = action.payload.trim();

      if (!newTitle) {
        return state;
      }

      const newProduct = {
        id: Date.now(),
        title: newTitle,
        count: 1
      };

      return [...state, newProduct];
    }

    case INCREMENT_PRODUCT:
      return state.map((product) => {
        if (product.id === action.payload) {
          if (product.count >= 25) {
            return product;
          }

          return { ...product, count: product.count + 1 };
        }

        return product;
      });

    case DECREMENT_PRODUCT:
      return state
        .map((product) => {
          if (product.id === action.payload) {
            return { ...product, count: product.count - 1 };
          }

          return product;
        })
        .filter((product) => product.count > 0);

    default:
      return state;
  }
}

export const store = createStore(cartReducer);

export const addProduct = (title) => ({
  type: ADD_PRODUCT,
  payload: title
});

export const incrementProduct = (id) => ({
  type: INCREMENT_PRODUCT,
  payload: id
});

export const decrementProduct = (id) => ({
  type: DECREMENT_PRODUCT,
  payload: id
});
