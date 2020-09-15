import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MtgDetail } from '../../models/mtg-detail.model';
import { MtgService } from '../../services/mtg.service';

@Component({
  selector: 'app-mtg-details',
  templateUrl: './mtg-details.component.html',
  styleUrls: ['./mtg-details.component.scss']
})
export class MtgDetailsComponent implements OnInit {

  model: MtgDetail;

  constructor(private mtgService: MtgService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.model= this.router.snapshot.data['mtg'];
  }

  clickPrevious(){
    //this.loadItems('https://api.scryfall.com/cards/search?order=set&q=e%3Am15&unique=prints');
    this.mtgService.getPreviousUrl();

  }

}
