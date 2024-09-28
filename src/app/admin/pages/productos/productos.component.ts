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
    { id: 1, name: 'Industrial Product 1', category: 'industrial', imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
    { id: 2, name: 'Empresarial Product 1', category: 'empresarial', imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
    { id: 3, name: 'Academico Product 1', category: 'academico', imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
    { id: 4, name: 'Hogares Product 1', category: 'hogares', imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
    { id: 5, name: 'Industrial Product 2', category: 'industrial', imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
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