import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'top-category',
  templateUrl: './top-category.component.html',
  styleUrls: ['./top-category.component.scss']
})
export class TopCategoryComponent implements OnInit {

  topCategories : TopCategory[] = [
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
    {
      imgurl : "assets/images/top/shakers.png",
      name : "shakers"
    },
    {
      imgurl : "assets/images/top/t-shirts.png",
      name : "t-shirts"
    },
  ]
  toShow : TopCategory[] = [];
  constructor() { }

  ngOnInit(): void {
      this.topCategories.forEach((data,index)=>{
        if(index <= 5){
          this.toShow.push(data);
        }
      })
    }
  
    // @HostListener("window: scroll", [])onScroll(){
    //   let element = document.getElementById('slider');
    //   console.log("width",element?.offsetWidth);
      
    // }
    
    toNext(){
      
      console.log("To right");
    }
    toLeft(){
      console.log("To left");
    }


}

export type TopCategory = {
  imgurl : string,
  name : string,
  id? : number
}
