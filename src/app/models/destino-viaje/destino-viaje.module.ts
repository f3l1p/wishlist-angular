import { NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, Input],
})
export class DestinoViajeModule {
  @Input() nombre: string = '';
  @Input() imageUrl: string = '';

  constructor(name: string, url: string) {
    this.nombre = name;
    this.imageUrl = url;
  }
}
