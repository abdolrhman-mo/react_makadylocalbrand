import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

// my components & data
import Nav from '../sections/Nav'
import Hero from '../sections/Hero'
import Reviews from '../sections/Reviews'
import ProductList from '../sections/ProductList'
import Footer from '../sections/Footer'
import About from "./About"
import Contact from "./Contact"
import ProductDetails from "./ProductDetails"
import Billboard from "../sections/Billboard"
import MyAccount from "./MyAccount"
import Cart from "../sections/Cart"
import Checkout from "../pages/Checkout"
// static files
import '../static/sass/App.sass'

// TODO: shoppppppppppppppppppppppppppppppping carttttttttttttttttttttttttttttttttttttttttttt

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:index" element={<ProductDetails />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  )
}

function Home() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Cart />
      <ProductList
        title="Tees"
        tag="tee"
      />
      <hr />
      <ProductList
        title="Shorts"
        tag="shorts"
      />
      <hr />
      <ProductList
        title="Track Pants"
        tag="pants"
      />
      <Footer />
    </div>
  )
}

export default App;
