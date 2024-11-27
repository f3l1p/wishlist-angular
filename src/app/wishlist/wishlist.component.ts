import { Component } from '@angular/core';
import { ListaDestinosComponent } from '../lista-destinos/lista-destinos.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [ListaDestinosComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent {
  title: string = 'Lista de Destinos';
}
