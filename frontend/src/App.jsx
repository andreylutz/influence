import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { MyEvents } from './components/MyEvents/MyEvents';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MyEvents />} />
      </Routes>
    </Provider>
  );
}

export default App;
