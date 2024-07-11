import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.scss'
})
export class CardSearchComponent {
  cardName = '';

  logData() {
    console.log(this.cardName)
  }

}
