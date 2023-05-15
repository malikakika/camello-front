import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // Tableau des chemins d'accès des images
    const imagePaths = [
      "assets/picture/artisanat.png",
      "assets/picture/artisana.png",
      "assets/picture/artisanaa.png"
    ];

    let currentIndex = 0;

    // Fonction pour changer l'image toutes les 5 secondes
    function changeImage() {
      const headerImage = document.getElementById("header-image") as HTMLImageElement;
      headerImage.src = imagePaths[currentIndex];
      currentIndex = (currentIndex + 1) % imagePaths.length;
    }

    // Appeler la fonction toutes les 5 secondes
    setInterval(changeImage, 5000);
  }

}




