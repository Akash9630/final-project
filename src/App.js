import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loginform from "./components/Login";
import Signupform from "./components/Signup.js";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redux/reducers/MovieReducer'
import Dashboard from './components/Dashboard';

const store = createStore(
  reducer,
  window._REDUXDEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(), applyMiddleware(thunk)
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/Loginform" element={<Loginform />} />
            <Route path="/Signupform" element={<Signupform />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Loginform />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}
export default App;
