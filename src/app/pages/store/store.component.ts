import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  indexCourant = 1;

  cartes = [
    {
      imageSrc: "assets/picture/product1.png",
      productName: "1",
      previousPrice: "13.9$",
      currentPrice: "10.9$"
    },
    {
      imageSrc: "assets/picture/product2.png",
      productName: "2",

      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product3.png",
      productName: "3",

      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product1.png",
      productName: "4",

      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product2.png",
      productName: "5",

      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product3.png",
      productName: "6",

      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product2.png",
      productName: "7 ",

      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product1.png",
      productName: " 8",

      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product3.png",
      productName: "Handmade ",

      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product3.png",
      productName: "Handmade ",

      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product3.png",
      productName: "Handmade ",

      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product3.png",
      productName: "Handmade ",

      currentPrice: "16.99$"
    },
  ];
}
