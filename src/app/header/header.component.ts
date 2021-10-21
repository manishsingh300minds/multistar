import { Component, OnInit } from '@angular/core';
import { StarService } from '../star.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
  }
  nutriData : Object = [];
  constructor(public apiService: StarService ){
    this.nutriData =  this.apiService.getTasks().subscribe((data) =>{
      console.log("Subs",data);
    });
    console.log("NutiData",this.nutriData)
  }
}
