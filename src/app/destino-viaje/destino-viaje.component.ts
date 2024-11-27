import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-destino-viaje',
  standalone: true,
  imports: [],
  templateUrl: './destino-viaje.component.html',
  styleUrl: './destino-viaje.component.scss',
})
export class DestinoViajeComponent {
  @Input() nombre: string = '';
  @Input() imageurl: string = '';
  @HostBinding('attr.class') cssClass = 'col-md-4';
}
