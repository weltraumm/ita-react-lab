import { Component } from "react";
import someTypeScript from "./someTypeScript";

import "./styles/main.css";
import "./styles/main.scss";

import ReactDom from "react-dom";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { HomePage } from "./components/pages/home/home";
import { ProductsPage } from "./components/pages/products/products";
import { AboutPage } from "./components/pages/about/about";
import { ROUTE } from "./route";

interface AppProps {
  nothing: boolean;
}
interface AppState {
  title: string;
  // hasError: boolean;
}

class AppContainer extends Component<AppProps, AppState> {
  ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      title: someTypeScript("Test-block for css-modules"),
      // hasError: false,
    };
    const goExlcude = true;
    if (!goExlcude) {
      console.warn("class-dead-code doesn't work");
    }
  }

  // componentDidCatch() {
  //   this.setState({ hasError: true });
  // }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTE.HOME} element={<HomePage />} />
          <Route path="/" element={<Navigate to={ROUTE.HOME} />} />
          <Route path={ROUTE.PRODUCTS} element={<ProductsPage />} />
          <Route path={ROUTE.ABOUT} element={<AboutPage />} />
          <Route path="*" element={<Navigate to={ROUTE.HOME} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
