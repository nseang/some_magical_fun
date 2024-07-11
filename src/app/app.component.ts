import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardSearchComponent } from './card-search/card-search.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'magical-fun';
}
