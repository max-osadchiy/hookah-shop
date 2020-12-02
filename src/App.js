import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Banner from './containers/Banner/Banner';
import Information from './containers/Information/Information';
import Items from './containers/Items/Items';

const App = () => (
    <div className="App">
      <Header />
      <Banner />
      <Information />
      <Items />
      <Footer />
    </div>
);

export default App;
