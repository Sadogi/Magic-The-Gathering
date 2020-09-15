import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MtgService } from '../../services/mtg.service';
import { MtgList } from '../../models/mtg-list.model';

@Component({
  selector: 'app-mtg',
  templateUrl: './mtg.component.html',
  styleUrls: ['./mtg.component.scss']
})
export class MtgComponent implements OnInit {

  model: MtgList;
  temp : string;
  //next_page_url: string = this.model.next_page;

  constructor(private mtgService: MtgService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.loadItems('https://api.scryfall.com/cards/search?order=set&q=e%3Am15&unique=prints');
    //this.loadItems('https://api.scryfall.com/cards/search?order=set\u0026q=e%3Am15\u0026unique=prints');
    //this.temp = this.mtgService.getPreviousUrl();
  }

  loadItems(url: string)
  {
    this.mtgService.getAll(url).subscribe(
      data => this.model = data
    )
  }

  clickPrevious(){
    this.loadItems('https://api.scryfall.com/cards/search?order=set&q=e%3Am15&unique=prints');
    //this.loadItems(this.mtgService.getPreviousUrl());

  }
  clickNext(){
    this.loadItems(this.model.next_page);
  }

  // onClick(url: string){
  //   this.temp = url;
  // }
  // onClick(url: string){
  //   this.temp = this.mtgService.getPreviousUrl();
  // }

  //this.temp = this.mtgService.getPreviousUrl();

  //referrer: any = this.mtgService.getPreviousUrl();

  

}
