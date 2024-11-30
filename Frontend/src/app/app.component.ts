import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root', // Es lo que nos crea la etiqueta de HTML
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Aqui va todo lo que necesitamos usar de nuestras importaciones
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  message: string = "hello a todos"

  
}
