// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
//import imgSmall from "images/testSmall.png"; // start-path is 'images' because we have an alias 'images' in webpack.common.js
//import imgCamera from "images/camera.svg";
//import style from "./styles/main.module.css";

// import React from "react";
import { Component, StrictMode } from "react";
import someTypeScript from "./someTypeScript";

import "./styles/main.css";
import "./styles/main.scss";

import ReactDom from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { HomePage } from "./components/pages/home/Home";
import { ProductsPage } from "./components/pages/products/Products";
import { AboutPage } from "./components/pages/about/About";

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
    // test class-dead-code
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
            <Route component={HomePage} path="/" exact />
            <Route component={ProductsPage} path="/products" />
            <Route component={AboutPage} path="/about" />
          </Switch>
        </BrowserRouter>
        <Footer />
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));

// const AppComponent: React.FC = () => {
//   return (
//     <StrictMode>
//       <BrowserRouter>
//         <Header />
//         <Switch>
//           <Route component={HomePage} path="/" exact />
//           <Route component={ProductsPage} path="/products" />
//           <Route component={AboutPage} path="/about" />
//         </Switch>
//       </BrowserRouter>
//     </StrictMode>
//   );
// }

// ReactDom.render(<AppComponent nothing={false} />, document.getElementById("app"));
