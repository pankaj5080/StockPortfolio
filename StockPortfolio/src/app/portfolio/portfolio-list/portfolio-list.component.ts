import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {
  portfolio: Object
  name: string
  strategy: string
  cashDeployed: string
  profit: string
  cashInHand: string
  percentageGain: string
  portfolioList: Object[]

  constructor() {
    this.name = 'Icici';
    this.strategy = 'Market Leaders';
    this.cashDeployed = '8,75,000';
    this.profit = '2,00,000';
    this.cashInHand = '75,000';
    this.percentageGain = '30';
    this.portfolio = {
      name: this.name,
      strategy: this.strategy,
      cashDeployed: this.cashDeployed,
      profit: this.profit,
      cashInHand: this.cashInHand,
      percentageGain: this.percentageGain
    };
    this.portfolioList =  [this.portfolio, this.portfolio, this.portfolio, this.portfolio];
    // this.cashInHand: '80,000';
    // this.percentageGain: 30;
  }

  ngOnInit() {
  }

  onPortfolioClick(portfolio){
    console.log(portfolio.name + "clicked");
  }

}
