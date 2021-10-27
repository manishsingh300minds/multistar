import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoading = true;
  nutriData : Object = [];

  ngOnInit(): void {
    setTimeout(() => {
      // this.isLoading = false;
    },2000);
  }
  constructor(){}
}
