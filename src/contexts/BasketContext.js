import { createContext } from 'react';

const context = {
  items: localStorage.getItem('products'),
  setItems: (id) => {
    let productsString = localStorage.getItem('products');
    let items = [];

    if(productsString) {
      try {
        items = JSON.parse(productsString);
      } catch (e) {
        alert();
        items = [];
      }
    }
    items.push(id);
    localStorage.setItem('products', JSON.stringify(items));
  }
};

export const BasketContext = createContext(context);

export const Provider = ({ children }) => (
  <BasketContext.Provider value={context}>{children}</BasketContext.Provider>
)