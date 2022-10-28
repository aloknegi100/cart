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
                  img:'',
                  id:1
              },
              {
                  price:999,
                  title:'Mobile Phone',
                  qty:10,
                  img:'',
                  id:2
              },
              {
                  price:999,
                  title:'Laptop',
                  qty:4,
                  img:'',
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
      </div>
    );
  }
}

export default App;
