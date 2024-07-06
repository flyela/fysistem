import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export default class ContactoComponent {

}
