import { useDispatch, useSelector } from 'react-redux';
import CartItem from './components/CartItem.jsx';
import { addProduct } from './store/store.js';

function App() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleAddProduct() {
    const title = prompt('Введите название товара:');

    if (!title || !title.trim()) {
      alert('Название товара не может быть пустым');
      return;
    }

    dispatch(addProduct(title));
  }

  return (
    <div className="app">
      <h1>Корзина Redux</h1>

      <button className="add-button" onClick={handleAddProduct}>
        Добавить товар
      </button>

      <div className="cart-list">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
