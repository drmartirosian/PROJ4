import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage';
import CartPage from '../CartPage/CartPage';
import * as productAPI from '../../services/products-api';
import ProductListPage from '../../pages/ProductListPage/ProductListPage';
import AddProductPage from '../../pages/AddProductPage/AddProductPage';
import ProductDetailPage from '../../pages/ProductDetailPage/ProductDetailPage';
import EditProductPage from '../../pages/EditProductPage/EditProductPage';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      products: [],
      user: userService.getUser()
    };
  }


  //AUTH HANDLES
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  //PRODUCT HANDLES
  handleAddProduct = async newProdData => {
    const newProd = await productAPI.create(newProdData);
    this.setState(state => ({
      products: [...state.products, newProd]
    }),
    // Using cb to wait for state to update before rerouting
    () => this.props.history.push('/'));
  }
  handleUpdateProduct = async updatedProdData => {
    const updatedProduct = await productAPI.update(updatedProdData);
    const newProductsArray = this.state.products.map(p => 
      p._id === updatedProduct._id ? updatedProduct : p
    );
    this.setState(
      {products: newProductsArray},
      () => this.props.history.push('/')
    );
  }
  handleDeleteProduct= async id => {
    await productAPI.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      products: state.products.filter(p => p._id !== id)
    }), () => this.props.history.push('/'));
  }

  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    const products = await productAPI.getAll();
    this.setState({products});
  }





  render() {

    return (
      <div>
        <Switch>
          <Route exact path='/' render={() =>
            <HomePage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          }/>
          <Route exact path='/Cart' render={() =>
            <CartPage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/add' render={() => 
            <AddProductPage
              handleAddProduct={this.handleAddProduct}
            />
          } />
          <Route exact path='/details' render={({location}) => 
            <ProductDetailPage location={location}/>
          } />
          <Route exact path='/edit' render={({location}) => 
            <EditProductPage
              handleUpdateProduct={this.handleUpdateProduct}
              location={location}
            />
          } />
          <Route exact path='/market' render={() => 
            <ProductListPage
              products={this.state.products}
              handleDeleteProduct={this.handleDeleteProduct}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;