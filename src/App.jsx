import Api from "./Components/api";
import { Provider } from "react-redux";
import { store } from "./Redux/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Api />
      </Provider>
    </>
  );
}

export default App;
