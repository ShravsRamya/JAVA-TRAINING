import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        <h1 style="color:orange">MAGICAL {{title}}</h1>
        <hello></hello>
      </h1>
        <img width="350" src="http://cdn2.quizly.co/wp-content/uploads/2017/09/09032947/What-Is-Your-Lucky-Number.jpg">
      <h1>
     
      <lucky></lucky>
      <login></login>
     <calci></calci>
      <list-product></list-product>
      </h1>
       </div>
    
  `,
  styles: [
    
  ]
})
export class AppComponent {
  title = 'WORLD ';
}
