import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';


@Component({
  standalone: true,
  imports: [RouterOutlet,LayoutComponent],
  templateUrl: './admin.component.html',
  styles: ``
})
export default class AdminComponent {

}
