import { Component } from '@angular/core';
import { DestinoViajeComponent } from '../destino-viaje/destino-viaje.component';
import { NgFor } from '@angular/common';
import { DestinoViajeModule } from '../models/destino-viaje/destino-viaje.module';
@Component({
  selector: 'app-lista-destinos',
  standalone: true,
  imports: [DestinoViajeComponent, NgFor],
  templateUrl: './lista-destinos.component.html',
  styleUrl: './lista-destinos.component.scss',
})
export class ListaDestinosComponent {
  destinos: DestinoViajeModule[];
  imageurl: string;
  nombre: string;

  constructor() {
    this.nombre = '';
    this.imageurl = '';
    this.destinos = [];
  }

  guardar(nombre: string, imageurl: string): boolean {
    this.destinos.push(new DestinoViajeModule(nombre, imageurl));

    console.log(this.destinos);

    return false;
  }
}
