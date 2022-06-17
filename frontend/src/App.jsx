import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <p>Hello!</p>
    </Provider>
  );
}

export default App;
