/*Relacionado con el inicio de session

- Iniciar Sesion
- Obtener el Token
- Valida Roles (cliente o admin)
- Identificar cuando esta logeado o no
- Cierre de sesión


*/

//INyección de dependencias
import { Injectable, inject } from '@angular/core';
//Importamos el httpClient
import { HttpClient } from '@angular/common/http';
//importar el router 
import { Router } from '@angular/router';
// Importar la dependencia para gestionar mensajes de respuesta
import { ToastrService } from 'ngx-toastr';
//Importamos la dependencia que nos permite decodificar el token
import { jwtDecode } from "jwt-decode";
// Imprtar interface para poder iniciar sesion
import { Credentials } from '../interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    // 1. INYECTAR DEPENDECIAS ----------------------------------
    private _httpClient = inject(HttpClient);
    private _router = inject(Router);
    public _toastrService = inject(ToastrService)

    // 2. Ruta de conexion a la base dedatos

  private SECRET_BASE_URL = 'http://localhost:9000'

  //3. INICIAR SESION (peticion Post)
  inicioSesion(credentials: Credentials) {
    return this._httpClient.post(this.SECRET_BASE_URL, credentials);
  }

  //4. OBTENER EL TOKEN
  getToken() {
    return localStorage.getItem("token")
  }

  //5. VALIDAR SI ES O NO ADMINISTRADOR
  isAdmin() {
    const token = this.getToken()
    //si hay token, decodifiquelo
    if (token) {
      //Decodifico la informacion del token
      const decoded: any = jwtDecode(token);

      //si es admin, retorna true. Si no, false
      return decoded.isAdmin ? true : false
    } else {
      console.error('No se encontro un token')
      return false
    }
  }

  //Redireccion a la pagina de inicio o panel de administracion si es admin
  redirector() {

    if (this.isAdmin()) {

        this._router.navigate(['dashboard'])

    } else {

      this._router.navigate(['/'])

    }
  }

  //6. SE INICIO SESIÓN SATISFACTORIAMENTE O NO
  // nos devuelva falso o verdadero si está logeado o no

  isLoggedIn() {
      return this.getToken() ? true : false
  }

  //7. CIERRE DE SESION

  closeSession() {
    this._toastrService.info('Cierre de ssión exitoso, hasta la próxima');
    localStorage.removeItem('token')
    this._router.navigate(['/'])
  }

}
