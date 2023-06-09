import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  indexCourant = 0;
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
      previousPrice: "19.99$",
      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product3.png",
      productName: "3",
      previousPrice: "19.99$",
      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product1.png",
      productName: "4",
      previousPrice: "19.99$",
      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product2.png",
      productName: "5",
      previousPrice: "19.99$",
      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product3.png",
      productName: "6",
      previousPrice: "19.99$",
      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product2.png",
      productName: "7 ",
      previousPrice: "19.99$",
      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product1.png",
      productName: " 8",
      previousPrice: "19.99$",
      currentPrice: "16.99$"
    },
    {
      imageSrc: "assets/picture/product3.png",
      productName: "Handmade ",
      previousPrice: "19.99$",
      currentPrice: "16.99$"
    },
  ];
  suivant() {
    this.indexCourant++;
    if (this.indexCourant >= this.cartes.length) {
      this.indexCourant = 0;
    }
  }
  precedent() {
    if (this.indexCourant > 0) {
      this.indexCourant--;
    } else {
      this.indexCourant = this.cartes.length - 1;
    }
  }
}