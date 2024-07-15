import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MagicCardFetcherService } from '../magic-card-fetcher.service';

@Component({
  selector: 'app-card-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [MagicCardFetcherService],
  templateUrl: './card-search.component.html',
  styleUrl: './card-search.component.scss'
})
export class CardSearchComponent {
  cardName = '';
  cardList: string[] = [];

  constructor (
    private magicService: MagicCardFetcherService
  ) {}

  getCards() {
    if(this.cardName) {
      this.magicService.getCardsbyName(this.cardName).subscribe({
        next: (magicCards) => {
          magicCards.cards.forEach((card:any) => {
            this.cardList.push(card.imageUrl)
          });
        }
      });
    }
  }

  logData() {
    console.log('cardList', this.cardList)
    console.log(this.cardName)
  }

}
