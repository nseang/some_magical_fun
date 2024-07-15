import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CardSearchComponent } from './card-search/card-search.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardSearchComponent],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'magical-fun';
}
