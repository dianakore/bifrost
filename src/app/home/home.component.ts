import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  url?: any;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 1, color: '#b3911d',url:"\"../../assets/rune.jpg"},
    {text: 'Two', cols: 1, rows: 1, color: '#b3911d'},
    {text: 'Three', cols: 1, rows: 1, color: '#b3911d'},
    {text: 'Four', cols: 2, rows: 1, color: '#b3911d',url: "../../assets/bifrost.JPG"}

  ];


  constructor() { }

  ngOnInit() {
  }

   mapsSelector() {
    if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) ||
      (navigator.platform.indexOf("iPad") != -1) ||
      (navigator.platform.indexOf("iPod") != -1))
      window.open("maps://maps.google.com/maps?daddr=45.649813,9.123473&amp;ll=");
    else /* else use Google */
      window.open("https://maps.google.com/maps?daddr=45.649813,9.123473&amp;ll=");
  }

}
