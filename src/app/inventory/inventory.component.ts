import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit,AfterViewInit {

  isLoading = true;
  selectedId = 1;
  presentElement! : HTMLElement | null;
  offset = 0;
  scrollY= 0;
  productType : ProductType[] = [
    {
      typeId : 1,
      typeName : "Trending",
      imgurl : "assets/images/inventory/icon/trending.png",
      qty : 4,
      active: true, 
      products: [
        {
           productId: 1,
           imgurl: "assets/images/inventory/products/t1.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 2,
           imgurl: "assets/images/inventory/products/t2.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 3,
           imgurl: "assets/images/inventory/products/t3.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 4,
           imgurl: "assets/images/inventory/products/t4.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
          productId: 5,
          imgurl: "assets/images/inventory/products/d3.png",
          title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
          rating: 5,
          actualprice: 3199,
          saleprice: 2000,
        },
       ] 
    },
    {
      typeId : 2,
      typeName : "Best Seller",
      imgurl : "assets/images/inventory/icon/best_seller.png",
      qty : 4,
      active: false,
      products: [
        {
           productId: 1,
           imgurl: "assets/images/inventory/products/t1.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 2,
           imgurl: "assets/images/inventory/products/t2.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 3,
           imgurl: "assets/images/inventory/products/t3.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 4,
           imgurl: "assets/images/inventory/products/t4.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
          productId: 5,
          imgurl: "assets/images/inventory/products/t4.png",
          title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
          rating: 5,
          actualprice: 3199,
          saleprice: 2000,
        }
       ]  
    },
    {
      typeId : 3,
      typeName : "Pocket Friendly",
      imgurl : "assets/images/inventory/icon/pocket_friendly.png",
      qty : 4,
      active: false,
      products: [
        {
           productId: 1,
           imgurl: "assets/images/inventory/products/d1.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 2,
           imgurl: "assets/images/inventory/products/d2.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 3,
           imgurl: "assets/images/inventory/products/d3.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 4,
           imgurl: "assets/images/inventory/products/d4.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         }
       ] 
    },
    {
      typeId : 4,
      typeName : "Super Saver Pack",
      imgurl : "assets/images/inventory/icon/super_saver_pack.png",
      qty : 8,
      active: false,
      products: [
        {
           productId: 1,
           imgurl: "assets/images/inventory/products/m1.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 2,
           imgurl: "assets/images/inventory/products/m2.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 3,
           imgurl: "assets/images/inventory/products/m3.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 4,
           imgurl: "assets/images/inventory/products/m4.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
          productId: 5,
          imgurl: "assets/images/inventory/products/m5.png",
          title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
          rating: 5,
          actualprice: 3199,
          saleprice: 2000,
        },
        {
          productId: 6,
          imgurl: "assets/images/inventory/products/m6.png",
          title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
          rating: 5,
          actualprice: 3199,
          saleprice: 2000,
        },
        {
          productId: 7,
          imgurl: "assets/images/inventory/products/m7.png",
          title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
          rating: 5,
          actualprice: 3199,
          saleprice: 2000,
        },
        {
          productId: 8,
          imgurl: "assets/images/inventory/products/m8.png",
          title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
          rating: 5,
          actualprice: 3199,
          saleprice: 2000,
        }
       ]   
    },
    {
      typeId : 5,
      typeName : "Clearance Sale",
      imgurl : "assets/images/inventory/icon/clearance_sale.png",
      qty : 6,
      active: false,
      products: [
        {
           productId: 1,
           imgurl: "assets/images/inventory/products/s1.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 2,
           imgurl: "assets/images/inventory/products/s2.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 3,
           imgurl: "assets/images/inventory/products/s3.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 4,
           imgurl: "assets/images/inventory/products/s4.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
          productId: 4,
          imgurl: "assets/images/inventory/products/s5.png",
          title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
          rating: 5,
          actualprice: 3199,
          saleprice: 2000,
        },
        {
          productId: 4,
          imgurl: "assets/images/inventory/products/s6.png",
          title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
          rating: 5,
          actualprice: 3199,
          saleprice: 2000,
        }
       ]  
    },
    {
      typeId : 6,
      typeName : "Flash Sale",
      imgurl : "assets/images/inventory/icon/flash_sale.png",
      qty : 4,
      active: false,
      products: [
        {
           productId: 1,
           imgurl: "assets/images/inventory/products/f1.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 2,
           imgurl: "assets/images/inventory/products/f2.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 3,
           imgurl: "assets/images/inventory/products/f3.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         },
         {
           productId: 4,
           imgurl: "assets/images/inventory/products/f4.png",
           title: "Nutristar So Isolate Low Carb ultra-filtered 1Kg",
           rating: 5,
           actualprice: 3199,
           saleprice: 2000,
         }
       ]  
    },
  ]
  docs : ScrollType[] = [];
  tempData?: ProductData[] = [];
  
  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.navigate(['']);
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
    this.tempData =  this.productType[0].products;
  } 
  
  ngAfterViewInit(){
    let element;
    this.productType.forEach((data) => {
      element = document.getElementById(data.typeId.toString());
        if(element){
          this.docs.push({
            typeId : data.typeId,
            position : element.offsetTop,
            height : element.offsetHeight
          })
        }
    });
  }

  onProductCall(value : any,tabSize : number){
    const prevElement = document.getElementById(this.selectedId.toString());
    if(prevElement)
      prevElement.classList.remove("selectedTab");

    this.presentElement = document.getElementById(value);
    if(this.presentElement){
      this.presentElement.classList.add("selectedTab"); 
      this.offset = this.presentElement.offsetTop;
      if(tabSize === 0){
        setTimeout(() => {
          this.presentElement?.classList.add("selectedTab");
          this.scrollY = window.scrollY;
        },1000);
      }
    }

    this.selectedId = value;
    this.productType.forEach((data :ProductType) => {
      if(data.typeId === value){
        data.active = true;
      }
      else{
        data.active = false;
      }
    });

    if(tabSize == 1){
     this.tempData = this.productType.filter((data) => data.typeId === value)[0].products;
    }
  }

  @HostListener("window: scroll", [])
  onScroll(): void {
    if(window.screen.width > 768){
      let current;
      if(this.scrollY !== window.scrollY){
        this.presentElement?.classList.remove("selectedTab");
      }

      this.docs.forEach((data) => {
        current = document.getElementById(data.typeId.toString());
        
        if(current)
        if(window.scrollY > (current?.offsetTop - 200)){
          this.productType.forEach((product :ProductType) => {
            if(product.typeId === data.typeId){
              product.active = true;
            }
            else{
              product.active = false;
            }
          });
        }
      });
    }
  }
}

export type ProductType = {
  typeId : number,
  typeName : string,
  qty : number,
  imgurl : string,
  active : boolean,
  products?: ProductData[]
} 

export type ProductData = {
  productId: number,
  typeId?: number,
  imgurl: string,
  title: string,
  rating: number,
  actualprice: number,
  saleprice: number,
}
export type ScrollType = {
  position : number,
  typeId : number
  height : number
}
