import { makeAutoObservable } from "mobx";
import api from "./api";

export class MainStore {
  constructor() {
    makeAutoObservable(this);
  }

  inputs = {
    number: '+380 984 946 268',
  };
  basket_items = [];
  items = [];
  customerInfo = {
    customerFirstname: '',
    customerLastname: '',
    customerEmail: '',
    customerIndex: '',
    customerPhone: '',
    customerPostOffice: '',
    customerCity: '',
  }

  sortItems = '';

  isSaved = false;

  onChangeInput = (name, text) => {
    this.customerInfo[name] = text;
  };
  
  setBasketItems = (id) => {
    this.basket_items.push(id);
    console.log(this.basket_items);
  }

  changeItems = (array) => {
    this.items = array;
  }

  changeSortItems = (str) => {
    this.sortItems = str;
  }

  getInfoItems = async () => {
    await api.get('products/findAll/')
      .then((response) => {
        this.changeItems(response.data.items);
      })
      .catch((err) => console.log(err));
  };

  isSavedClose = () => {
    this.isSaved = false;
  }

  orderItems = async () => {
    let body = {
      customer_info: {
        customer_firstname: this.customerInfo.customerFirstname,
        customer_lastname: this.customerInfo.customerFirstname,
        customer_email: this.customerInfo.customerFirstname,
        customer_index: this.customerInfo.customerFirstname,
        customer_phone: this.customerInfo.customerFirstname,
        customer_post_office : this.customerInfo.customerFirstname,
        customer_city: this.customerInfo.customerCity,
      },
      ordered_products: this.basket_items,
    }
    await api.post('orders/saveOrder/', body).then((response) => {
      if ([200, 201].includes(response.status)) {
        this.isSaved = true;
        return
      }
    }).catch((err) => console.log(err));
  };
}