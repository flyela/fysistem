import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-soluciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './soluciones.component.html',
  styleUrl: './soluciones.component.css'
})
export default class SolucionesComponent {

}
