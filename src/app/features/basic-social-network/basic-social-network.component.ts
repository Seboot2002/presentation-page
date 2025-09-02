import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-social-network',
  templateUrl: './basic-social-network.component.html',
  styleUrls: ['./basic-social-network.component.css']
})
export class BasicSocialNetworkComponent implements OnInit {

  public year = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
