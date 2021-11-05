import { Component, StrictMode } from "react";
import someTypeScript from "./someTypeScript";

import "./styles/main.css";
import "./styles/main.scss";

import ReactDom from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { HomePage } from "./components/pages/home/home";
import { ProductsPage } from "./components/pages/products/products";
import { AboutPage } from "./components/pages/about/about";

interface AppProps {
  nothing: boolean;
}
interface AppState {
  title: string;
}

class AppContainer extends Component<AppProps, AppState> {
  ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      title: someTypeScript("Test-block for css-modules"),
    };
    const goExlcude = true;
    if (!goExlcude) {
      console.warn("class-dead-code doesn't work");
    }
  }

  render() {
    return (
      <StrictMode>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route component={HomePage} path="/home" />
            <Route component={ProductsPage} path="/products" />
            <Route component={AboutPage} path="/about" />
            <Route strict path="/:id" component={HomePage} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
