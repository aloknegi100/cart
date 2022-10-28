import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(){
    super();
    this.state={
          products:[
              {
                  price:99,
                  title:'Watch',
                  qty:1,
                  img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                  id:1
              },
              {
                  price:999,
                  title:'Mobile Phone',
                  qty:10,
                  img:'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80',
                  id:2
              },
              {
                  price:999,
                  title:'Laptop',
                  qty:4,
                  img:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
                  id:3
              }
          ]
      }
      // this.increaseQuantity=this.increaseQuantity.bind(this);
  }
  handleIncreaseQuantity=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;
      this.setState({
          products:products
      })

  }
  handleDecreaseQuantity=(product)=>{
      if(product.qty==0)
      {
          return;
      }
      const {products}=this.state;
      const index=products.indexOf(product);
      products[index].qty-=1;
      this.setState({
          products:products
      })

  }
  handleDeleteProduct=(id)=>{
      const item=this.state.products.filter((item)=>item.id!=id);
      this.setState({
          products:item
      })
  }
  getCartTotal=()=>{
    let cartTotal=0;
    const products=this.state.products;
    for(let product of products){
      cartTotal+=product.qty*product.price
    }
    return cartTotal;
  }
  getCount=()=>{
    let count=0;
    const {products}=this.state;
    products.forEach(product => {
      count+=product.qty;
    });
    
    return count;
  }
  render(){
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCount()}/>
        <Cart products={products} 
              onIncreaseQuantity={this.handleIncreaseQuantity} 
              onDecreaseQuantity={this.handleDecreaseQuantity}
              handleDeleteProduct={this.handleDeleteProduct}/>
        <div style={{fontSize:20,padding:10}}>Total:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
