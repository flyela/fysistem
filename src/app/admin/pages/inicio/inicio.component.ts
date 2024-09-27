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
      alt: 'Handheld 3D Scanner'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjYHghNg0xWv-Zn0DdmrC9Uw5lHZgNwWYsg&s',
      alt: '3D Scanning Rig'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjYHghNg0xWv-Zn0DdmrC9Uw5lHZgNwWYsg&s',
      alt: '3D Scanning Rig'
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


