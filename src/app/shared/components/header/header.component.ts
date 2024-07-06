import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

 public headerItems=routes
 .map((route)=>route.children ?? [])
 .flat()
 .filter((route)=>route && route.path)
 .filter((route)=>!route.path?.includes(':'));


constructor(){

/*const header = routes
  .map((route)=>route.children ?? [])
  .flat()
  .filter((route)=>route && route.path)
  .filter((route)=>!route.path?.includes(':'));
  console.log(header);*/
}







}
