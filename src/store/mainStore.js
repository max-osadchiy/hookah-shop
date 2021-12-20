import { makeAutoObservable } from "mobx";
import { getRandomInt } from "../mixins/getRandomNumber";
import api from "./api";

export class MainStore {
  constructor() {
    makeAutoObservable(this);
  }
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
  isLoadingForm = false;

  sortItems = '';

  isSaved = false;

  onChangeInput = (name, text) => {
    this.customerInfo[name] = text;
  };

  setIsLoading = (bool) => {
    this.isLoadingForm = bool;
  };
  
  setBasketItems = (item) => {
    this.basket_items.push(item);
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
    this.setIsLoading(true);
    const {
      customerFirstname,
      customerLastname,
      customerEmail,
      customerIndex,
      customerPhone,
      customerPostOffice,
      customerCity,
    } = this.customerInfo;

    let body = {
      customer_info: {
        customer_firstname: customerFirstname,
        customer_lastname: customerLastname,
        customer_email: customerEmail,
        customer_index: customerIndex,
        customer_phone: customerPhone,
        customer_post_office : customerPostOffice,
        customer_city: customerCity,
      },
      ordered_products: this.basket_items,
    }
    await api.post('orders/saveOrder/', body)
      .then((response) => {
        this.setIsLoading(false);
        if ([200, 201].includes(response.status)) {
          this.isSaved = true;
          return
        }
      })
      .catch((err) => {
        this.setIsLoading(false);
        // console.log(err);
      });
  };
}