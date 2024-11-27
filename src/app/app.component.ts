import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WishlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-hola-mundo';
}
