import { Component } from '@angular/core';

@Component({
    selector: 'calci',
    templateUrl: './calci.component.html'
    

    
})
export class CalciComponent {
        
     first: number;
     second: number;
     result: number;

    add() {
        this.result=this.first+this.second;
    }
     sub(){
      this.result=this.first-this.second;
     }
    }

