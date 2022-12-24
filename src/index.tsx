import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { sessionService } from "redux-react-session";
import { client } from "./apollo";
import App from "./App";
import "./index.scss";
import configureStore from "./redux/store";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();
sessionService.initSessionService(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
);
reportWebVitals();
