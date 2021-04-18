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

  isSaved = false;

  onChangeInput = (Firstname, Lastname, Email, Phone, City, Index, PostOffice) => {
    this.customerInfo = {
      customerFirstname: Firstname,
      customerLastname: Lastname,
      customerEmail: Email,
      customerPhone: Phone,
      customerCity: City,
      customerIndex: Index,
      customerPostOffice: PostOffice,
    }
    console.log('this.customerInfo', this.customerInfo);
  };
  
  setBasketItems = (id) => {
    this.basket_items.push(id);
    console.log(this.basket_items.length);
  }

  changeItems = (array) => {
    this.items = array;
  }

  getInfoItems = async () => {
    await api.get('products/findAll/').then((response) => {
      this.changeItems(response.data.items);
      console.log('products/findAll/', this.items);
    }).catch((err) => console.log(err));
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
    console.log(body);
    await api.post('orders/saveOrder/', body).then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        this.isSaved = true;
      }
    }).catch((err) => console.log(err));
  };
}