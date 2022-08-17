import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import ReduxCounter from "./librarySpecific/Counter";

function App() {
  return (
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  );
}

export default App;
