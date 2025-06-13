import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-nosotros",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./nosotros.component.html",
  styleUrls: ["./nosotros.component.css"],
})
export default class NosotrosComponent {
  // Datos del equipo
  teamMembers = [
    {
      name: "Fabio Yela",
      position: "Ingeniero en Sistemas",
      image: "/assets/Images/Fabio.jpg",
    },
    
  ]
}
