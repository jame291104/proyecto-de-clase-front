import { Component } from '@angular/core';

/* En angular existen dos tipos de formularios
  - Fromularios en plantillas (no tan recomendable) => (formModule)
  - Fromulario Reactivos (recomendado) -> (ReactiveFormModule, FormControl, FormGroup)
*/
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    formLogin = new FormGroup({
      email: new FormControl('Hola'),
      password: new FormControl('hello')
    })

    handleSubmit() {
      console.log("Este es el email ingresado " + this.formLogin.value.email);
      console.log("Este es el password ingresado " + this.formLogin.value.password);
      
    }
}
