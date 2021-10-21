import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-category',
  templateUrl: './top-category.component.html',
  styleUrls: ['./top-category.component.scss']
})
export class TopCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  topCategories = [
    {
      imgurl : "assets/images/top/whey.png",
      name : "whey protein"
    },
    {
      imgurl : "assets/images/top/gainer.png",
      name : "mass gainer"
    },
    {
      imgurl : "assets/images/top/glutamines.png",
      name : "glutamines"
    },
    {
      imgurl : "assets/images/top/isolate.png",
      name : "whey isolate"
    },
    {
      imgurl : "assets/images/top/multivitamins.png",
      name : "multivitamines"
    },
    {
      imgurl : "assets/images/top/proteinbar.png",
      name : "protein bars"
    },
    // {
    //   imgurl : "assets/images/top/shakers.png",
    //   name : "shakers"
    // },
    // {
    //   imgurl : "assets/images/top/t-shirts.png",
    //   name : "t-shirts"
    // },
  ]

}
