import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export default class ProductosComponent {

  public showContent = signal(false);
  public toggleContent() {
    this.showContent.update(value=> !value);

}
}