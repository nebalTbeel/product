import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})


export class AddProductComponent implements OnInit {
  name:string;
  quantity:number;
  AllPrice:number;
  Allprofit:number

  constructor() { }
  allProducts = [];
  oneProd = [];
  
  addProduct(){
    this.oneProd = [];
  if(this.name && this.quantity && this.AllPrice){
    this.allProducts.unshift({name :this.name, quantity: this.quantity,AllPrice: this.AllPrice,Allprofit:0 });
    console.log(this.allProducts);
  }
   

    /*
   
    let thead = document.getElementById('thead');
  
    thead.append((

`
      <tr>
      <td>${this.name}</td>
      <td>${this.quantity}</td>
      <td>${this.AllPrice}</td>
    </tr>
`
    ));

*/

}

sellProduct(namee,num,sellPrice){
    for(let i=0; i<this.allProducts.length;i++){
      
if(this.allProducts[i].name == namee){
  
    if(num <= this.allProducts[i].quantity){

            let PriceForOne = this.allProducts[i].AllPrice / this.allProducts[i].quantity; //price / quantity
            let OneSellPrice = sellPrice / num ;
            let ProfitForOne = OneSellPrice - PriceForOne;
            

            this.allProducts[i].quantity = this.allProducts[i].quantity - num;
     console.log(`sell is done and the new quantity of ${this.allProducts[i].name} is ${this.allProducts[i].quantity}`);
     
            if(ProfitForOne > 0){
              this.allProducts[i].Allprofit += ProfitForOne; //add to profit
                    console.log(`profit for one is ${ProfitForOne}`); 
                    console.log(`All profit become  is ${ProfitForOne * num}`); 
            }
            else {
            console.log ("no profit !") ;
            }
  
        
            
    }
   

    
    else{
            console.log(`quantity of ${namee} not enough !`);
    
    }
  
}

    }


   

}





  ngOnInit() {
  }

}
/*

const food= new AddProductComponent();
food.addProduct('pasta',4,100);
food.addProduct('rice',7,300);
food.addProduct('tomato',3,50);

food.sellProduct('rice',2,400);
food.sellProduct('rice',1,5);
food.sellProduct('tomato',4,50);
food.sellProduct('tomato',3,60);
*/