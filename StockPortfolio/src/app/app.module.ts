import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { DemoComponent } from './portfolio/demo/demo.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { PortfolioCardComponent } from './portfolio/portfolio-card/portfolio-card.component';
import { NavBarComponent } from './portfolio/nav-bar/nav-bar.component';
import { PortfolioHistoryComponent } from './portfolio/portfolio-history/portfolio-history.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    PortfolioListComponent,
    PortfolioCardComponent,
    NavBarComponent,
    PortfolioHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    //Ng2BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
