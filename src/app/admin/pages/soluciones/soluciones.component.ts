import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-soluciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './soluciones.component.html',
  styleUrls: ['./soluciones.component.css']
})
export default class SolucionesComponent {
  newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'La Primera Casa Impresa En 3D De Modo Integro',
      description: 'La ciudad neerlandesa de Eindhoven alberga la primera casa fabricada íntegramente con una impresora 3D gracias a un hormigón especialmente formulado.',
      imageUrl: 'https://via.placeholder.com/400x300?text=3D+Printed+House'
    },
    {
      id: 2,
      title: 'El Abogado Que Fabrica Manos Con Su Impresora 3D',
      description: '"Ver la cara de Hussein cuando le dimos su mano tiene más sentido que acumular riqueza", dice Guillermo. "Vivo de mi trabajo y al principio no era más que una curiosidad, pero al ver una foto de una niña sin mano se me saltaron las lágrimas".',
      imageUrl: 'https://via.placeholder.com/400x300?text=3D+Printed+Hands'
    },
    {
      id: 3,
      title: 'Cómo Unilever Y Serioplast Desarrollan Nuevos Diseños De Botellas Con Moldes Impresos En 3D',
      description: 'Descubre cómo Stefano Cademartiri, el propietario de CAD y Prototipado de Unilever, y Flavio Migliardi, director de diseño para I+D de Serioplast Global Services, trabajaron codo con codo para poner a prueba la viabilidad de los moldes impresos en 3D.',
      imageUrl: 'https://via.placeholder.com/400x300?text=3D+Printed+Bottles'
    }
  ];
}