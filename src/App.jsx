import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <AuthForm />
      <Footer />
    </>
  );
}

export default App;
