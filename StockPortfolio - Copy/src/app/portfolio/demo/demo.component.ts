import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
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
