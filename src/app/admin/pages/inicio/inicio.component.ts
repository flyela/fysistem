import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface images {
  src: string;
  alt: string;
}
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent {
  images: images[] = [
    {
      src: './assets/Images/ImagesInicio/maq1.jpeg',
      alt: 'Imagen1'
    },
    {
      src: './assets/Images/ImagesInicio/maq2.jpeg',
      alt: 'Imagen2'
    },
    {
      src: './assets/Images/ImagesInicio/maq3.jpeg',
      alt: 'Imagen3'
    },
    {
      src: './assets/Images/ImagesInicio/maq4.jpeg',
      alt: 'Imagen4'
    },
    {
      src: './assets/Images/ImagesInicio/maq5.jpeg',
      alt: 'Imagen5'
    },
    
  ];

  currentIndex = 0;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.nextImage();
    }, 5000); // Change image every 5 seconds
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

}


