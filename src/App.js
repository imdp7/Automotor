import React from 'react';
import './App.css';
import Head from './Components/Header/header.component'
import Cart from './Components/Cart/cart.component'
import Cards from './Components/Cards/cards.component'
import Product from './Pages/product-page'
import CardDetails from './Components/Cards/Card-details/card-details.component'
import Company from './Pages/company.component'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {CartProvider} from './Context/context';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const routes = [
  {
    path: "/Company",
    component: Company,
    
  },
  {
    path:"/Cart",
    component: Cart,
  },
      {
        path: "/Prod",
        component: Product,
      },
  {
    path: "/Product/:id",
    component: CardDetails,
    routes: [
      {
        path: "/tacos/cart",
       
      }
    ]
  }
];

function App() {
return (
    <CartProvider>
      <Router>
      <div className="app">
     <div className="header">
         <Head/>
     </div>
      <div className="body">
       <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
           ))}
         <Cards/>
       </Switch>
      </div>
      </div>
     </Router>
</CartProvider>
  );
}

export default App;
