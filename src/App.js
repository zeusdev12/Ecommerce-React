import './App.css';
import { Switch,Route } from 'react-router-dom';
import { Default, Details, Navbar, ProductList,Cart,Modal } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </div>
  );
}

export default App;
