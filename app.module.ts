import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LuckyComponent } from './lucky.component';
import { LoginComponent} from './login.component';
import { CalciComponent} from './calci.component';
import { ListProductComponent } from 'src/app/list-product.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    LuckyComponent,
    LoginComponent,
    CalciComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
