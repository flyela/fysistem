import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: 'industrial' | 'empresarial' | 'academico' | 'hogares';
  imageUrl: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export default class ProductosComponent {
  public showContent = signal(false);
  public searchTerm = signal('');
  public selectedCategory = signal('all');

  public products = signal<Product[]>([
    { 
      id: 1,
      name: 'Maqueta',
      category: 'industrial',
      imageUrl: './assets/Images/Maqueta1.jpeg' },

    { id: 2,
      name: 'Maqueta',
      category: 'empresarial',
      imageUrl: './assets/Images/Maqueta2.jpeg' },

    { id: 3, 
      name: 'Maqueta', 
      category: 'academico', 
      imageUrl: './assets/Images/Maqueta3.jpeg' },

    { id: 4,
      name: 'Maqueta',
      category: 'hogares',
      imageUrl: './assets/Images/Maqueta4.jpeg' },

    { id: 5,
      name: 'Maqueta',
      category: 'industrial',
      imageUrl: './assets/Images/Maqueta5.jpeg' },
  ]);

  public selectedProducts = signal<number[]>([]);

  public toggleContent() {
    this.showContent.update(value => !value);
  }

  public toggleProductSelection(productId: number) {
    this.selectedProducts.update(selected => {
      if (selected.includes(productId)) {
        return selected.filter(id => id !== productId);
      } else {
        return [...selected, productId];
      }
    });
  }

  public filteredProducts() {
    return this.products().filter(product => 
      (this.selectedCategory() === 'all' || product.category === this.selectedCategory()) &&
      product.name.toLowerCase().includes(this.searchTerm().toLowerCase())
    );
  }
}