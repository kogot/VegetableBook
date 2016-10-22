import { HttpModule }     from '@angular/http';
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { routing }        from './app.routes';
import { CoreModule }     from './core/core.module';
import { appRoutingProviders } from './app.routes';
import { VegetableModule} from './vegetable/vegetable.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    CoreModule,
    VegetableModule,
    FormsModule
  ],
  providers: [ appRoutingProviders ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
