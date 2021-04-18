import './App.scss';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './containers/MainPage/MainPage';
import ItemPage from './containers/ItemPage/ItemPage';
import { Provider as BasketContextProvider } from './contexts/BasketContext';
import { StoreProvider } from './store/storeHOC';
import {MainStore} from './store/mainStore';
import { configure } from 'mobx';

const stores = {
  mainStore: new MainStore(),
};

configure({
  enforceActions: 'never',
});

const App = () => {
  return (
    <div className="App">
        <BasketContextProvider>
          <StoreProvider store={stores}>
            <Router>
              <Header />
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/item/:id" component={ItemPage} />
              </Switch>
              <Footer />
            </Router>
          </StoreProvider>
        </BasketContextProvider>
    </div>
  )
};

export default App;
