import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    template: `
    <h1 style="color:green">{{message}}</h1>

    `
})
export class HelloComponent {
    message: string = "Hello DEAR!";

}