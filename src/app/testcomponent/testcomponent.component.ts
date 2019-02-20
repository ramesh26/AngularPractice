import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './test.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  itemImageUrl2="//images.monoprice.com/mp/homepage/ATF/190215_sousvide_21594_400x300.jpg";
  constructor() { }

  ngOnInit() {
  }

}
