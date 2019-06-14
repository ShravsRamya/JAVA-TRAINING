import { Component } from '@angular/core';

@Component({
    selector    : 'list-product',
    templateUrl : './list-product.component.html',
    styleUrls    : ['./list-product.component.css']
})
export class ListProductComponent{
    products : Product [];
    flag     : number;

    constructor(){
        this.products =[
        new Product(1, "Nokia",5000,50,"good"),
        new Product(2, "Redmi MI",25000,100,"Fantastic"),
        new Product(3, "Oppo",15000,70,"Average"),
        new Product(4, "Yunique",50000,1,"Awesome"),]
        }         
    show(){
        if(this.flag == 1){
            this.flag = 0;
        }
        else{
            this.flag = 1;
        }
    }
}

export class Product{

    id   : number;
    name : String;
    price: number;
    quantity : number;
    quality  : String;
    //imageUrl : string;

    constructor(id   : number,name : String , price: number , quantity : number , quality  : String){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.quality = quality;                 
    }

}