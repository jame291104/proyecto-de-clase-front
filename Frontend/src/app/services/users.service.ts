import { Injectable, inject } from '@angular/core';
// para yo hacer peticiones HTTP
import { HttpClient } from '@angular/common/http';
// importar la interfaz Usuarios
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // 1. INYECCIÓN DE DEPENDENCIAS ---------------------------------------
  private _httpClient = inject(HttpClient);

  // 2. RUTA DE CONEXIÓN CON EL BACKEND ----------------------------------
  private URL_USERS = 'http://localhost:9000/users/'; //ruta genérica

  // 3. HACER LAS PETICIONES ---------------------------------------------

  // Petición POST
    postUsuarios(user: Users){
      // para crear un usuario, necesito la ruta y el body
      return this._httpClient.post(this.URL_USERS + '/crear', user );
    }

  // Petición GET
    getUsuarios(){
      return this._httpClient.get(this.URL_USERS + 'obtener');
    }
    
}