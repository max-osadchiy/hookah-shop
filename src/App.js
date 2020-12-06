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

const App = () => (
    <div className="App">
      <BasketContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/item/:id" component={ItemPage} />
          </Switch>
          <Footer />
        </Router>
      </BasketContextProvider>
    </div>
);

export default App;
