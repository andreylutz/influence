import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Events } from './components/Events';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Events />} />
      </Routes>
    </Provider>
  );
}

export default App;
