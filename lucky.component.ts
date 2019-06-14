import { Component } from '@angular/core';

@Component({
    selector: 'lucky',
    template: `<button (click)="generate()"  style= "background: skyblue ">TOUCH IT</button>
    <h3  *ngIf="luckyNumber" style= "color:blue">
    Your lucky number is : {{luckyNumber}}
    <img width="350" style="align:middle"  src="http://1.bp.blogspot.com/-HjVB3SbsLXk/VlowxvdkctI/AAAAAAAARqA/Fh7P3WbWcHM/s1600/congratulations.png">
    </h3>`
})
export class LuckyComponent {
   // luckynumber: number =Math.ceil(Math.random()*99);
    luckyNumber: number; 
    generate(){
        
    
       this.luckyNumber= Math.ceil(Math.random()*10);  
    }
}