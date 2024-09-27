import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent {
  images = [
    {
      src: 'https://img.freepik.com/foto-gratis/tecnologia-equipamiento-laboratorio-azul-generado-ia_188544-19546.jpg',
      alt: 'Imagen1'
    },
    {
      src: 'https://images.pexels.com/photos/19871842/pexels-photo-19871842.jpeg?cs=srgb&dl=pexels-jakubzerdzicki-19871842.jpg&fm=jpg',
      alt: 'Imagen2'
    },
    {
      src: 'https://www.stampa3dservizi.com/wp-content/uploads/2023/08/stampa-3d.webp',
      alt: 'Imagen3'
    },
    {
      src: 'https://e1.pxfuel.com/desktop-wallpaper/689/1023/desktop-wallpaper-3d-printing-start-3d-printer.jpg',
      alt: 'Imagen4'
    },
    {
      src: 'https://fbi.cults3d.com/uploads/blog/image/image/2173/visuel-impression-meilleurs-services-ligne-2021.jpg',
      alt: 'Imagen5'
    },
    {
      src: 'https://i.blogs.es/3dedda/impresora-3d-barata-en-oferta-abycubic-ideal-para-regalar-reyes-magos/500_333.jpeg',
      alt: 'Imagen6'
    }
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


