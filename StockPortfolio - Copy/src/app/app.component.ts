import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isPortfoliosHidden = false;
  isPortfolioDetailsHidden = true;
  isAddStockHidden = true;

  showPortfolio(){
    this.isPortfoliosHidden = false;
    this.isAddStockHidden = true;
    this.isPortfolioDetailsHidden = true;
  }

  showAddStock(){
    this.isPortfoliosHidden = true;
    this.isAddStockHidden = false;
    this.isPortfolioDetailsHidden = true;
  }

  showPortfolioDetials(){
    this.isPortfoliosHidden = true;
    this.isAddStockHidden = true;
    this.isPortfolioDetailsHidden = false;
  }
}
