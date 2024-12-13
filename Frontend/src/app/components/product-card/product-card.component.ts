import { Component } from '@angular/core';
import { ProductsService } from '../../services/porducts.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Products } from '../../interfaces/products';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  //1. Inyeccion de dependencias y/o servicios

  _productService = inject(ProductsService);
  _toastrService = inject(ToastrService);

  //2. Declarar las variables que necesitamos para recibir la informacion de la base de datos
  allProducts : Products[] = [] //definimos un arreglo de productos, su estructura es la interface

  //3. Crearse los metodos para recibir las respuestas de cada repeticion

  // Respuestas de la peticion GET
  getProducts() {
    this._productService.getProductos().subscribe({
      // Gestionamos la respuesta
      next: (res: any) => {
        // Si funciona
        console.log(res.data);
        this.allProducts = res.data
        
      },
      error: (error: any) => {
        //Si no funciona
        console.log(error);
        
      }
    });

  }

  //Al montarse ejecutamos la funcion
  ngOnInit() {
    this.getProducts();
  }
  // Respuestas de la peticion Post
  postProduct() {
    
  }
  // Respuestas de la peticion Put
  updateProduct() {
    
  }
  // Respuestas de la peticion Delete
  deleteProduct() {
    
  }
  
}
