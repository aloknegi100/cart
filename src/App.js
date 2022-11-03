import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    // this.increaseQuantity=this.increaseQuantity.bind(this);
  }

  componentDidMount() {
    const productsCol = collection(db, "products");

    // getDocs(productsCol).then((snapshot) => {
    //   const products = snapshot.docs.map((doc) => {
    //     const data = doc.data();
    //     data["id"] = doc.id;
    //     return data;
    //   });

    //   this.setState({
    //     products,
    //     loading: false,
    //   });
    // });

    onSnapshot(productsCol, (snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });

      this.setState({
        products,
        loading: false,
      });
    });
  }

  addProduct = async () => {
    const docRef = await addDoc(collection(db, "products"), {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDEQ7UmVanny8JJ3zMooRP7sfaVq4KIBjeQ&usqp=CAU",
      price: 90000,
      qty: 3,
      title: "Camera",
    });
    console.log("Document added", docRef);
  };

  handleIncreaseQuantity = async (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;
    // this.setState({
    //   products: products,
    // });

    const productRef = doc(db, "products", products[index].id);

    await updateDoc(productRef, {
      qty: product.qty + 1,
    });
  };

  handleDecreaseQuantity = async (product) => {
    if (product.qty == 0) {
      return;
    }
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty -= 1;
    // this.setState({
    //   products: products,
    // });
    const productRef = doc(db, "products", products[index].id);

    await updateDoc(productRef, {
      qty: product.qty - 1,
    });
  };

  handleDeleteProduct = async (id) => {
    // const item = this.state.products.filter((item) => item.id != id);
    // this.setState({
    //   products: item,
    // });
    await deleteDoc(doc(db, "products", id));
  };

  getCartTotal = () => {
    let cartTotal = 0;
    const products = this.state.products;
    for (let product of products) {
      if (product.qty > 0) {
        cartTotal += product.qty * product.price;
      }
    }
    return cartTotal;
  };
  getCount = () => {
    let count = 0;
    const { products } = this.state;
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCount()} />
        {/* <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add a Product
        </button> */}
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          handleDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ fontSize: 20, padding: 10 }}>
          Total:{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
