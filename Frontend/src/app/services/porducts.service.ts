import { Injectable, inject } from '@angular/core';
// para yo hacer peticiones HTTP
import { HttpClient } from '@angular/common/http';
// importar la interfaz Productos
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  //1. INYECCIÓN DE DEPENDENCIAS ---------------------------------------
  private _httpClient = inject(HttpClient);

  // 2. RUTA DE CONEXIÓN CON EL BACKEND ---------------------------------
  private URL_PRODUCTS = 'http://localhost:9000/productos';


  // 3. HACER LAS PETICIONES ---------------------------------------------

  // Petición POST
  postProducto(product:Products){
    return this._httpClient.post(this.URL_PRODUCTS + '/crear', product);
  }

  // Petición GET
  getProductos(){
    return this._httpClient.get(this.URL_PRODUCTS + '/obtener');
  }

  // Petición PUT
  putProducto(productActualizado:Products, id:string){
    // para actualizar debemos pasar el body y el id del producto a actualizar
    return this._httpClient.put(this.URL_PRODUCTS + '/actualizar' + id, productActualizado);
  }


  // Petición DELETE
  deleteProducto(id:string){
    // la ruta esta conformada por: ruta generica + acción + id
    return this._httpClient.delete(this.URL_PRODUCTS + '/eliminar' + id);
  }

}
