import { useDispatch } from 'react-redux';
import { decrementProduct, incrementProduct } from '../store/store.js';

function CartItem({ product }) {
  const dispatch = useDispatch();

  function handleIncrement() {
    if (product.count >= 25) {
      alert('Количество товара не может быть больше 25');
      return;
    }

    dispatch(incrementProduct(product.id));
  }

  function handleDecrement() {
    dispatch(decrementProduct(product.id));
  }

  return (
    <div className="cart-item">
      <h2 className="cart-title">{product.title}</h2>

      <div className="cart-controls">
        <button onClick={handleIncrement}>+</button>
        <span>{product.count}</span>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
}

export default CartItem;
