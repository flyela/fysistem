import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ContactoComponent {
  phoneNumber = '+573128078694';
  whatsappMessage = 'Hola, quiero más información sobre sus servicios.';
  addressUrl = 'https://g.co/kgs/2NkVFcA';

  get whatsappUrl(): string {
    return `https://wa.me/${this.phoneNumber.replace('+', '')}?text=${encodeURIComponent(this.whatsappMessage)}`;
  }

  get phoneHref(): string {
    return `tel:${this.phoneNumber}`;
  }

  get mapsHref(): string {
    return this.addressUrl;
  }
}
