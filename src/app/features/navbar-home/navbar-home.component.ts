import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css'],
  animations: [
    trigger('toggleTrigger', [ //Permite ejecutar la animacion en un objeto en html    
      /*state('off', style({ transform: 'translateY(-50%)', opacity: 0 })), //Establecen un estado en el tiempo de la animacion
      state('on', style({ transform: 'translateY(0%)', opacity: 1 })),*/  
      transition(':enter', [
        style({ transform: 'translateY(0%)', opacity: 0, height: '0px' }),
        animate('120ms ease-in-out', 
          style({ transform: 'translateY(0%)', opacity: 1, height: '200px' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0%)', opacity: 1, height: '200px' }),
        animate('100ms ease-in-out', 
          style({ transform: 'translateY(-50%)', opacity: 0, height: '0px' }))
      ]),
    ])
  ]
})
export class NavbarHomeComponent implements OnInit {

  @Input() homeComponent!: HomeComponent;

  public showState: string;
  public showBool: boolean;

  constructor()
  {
    this.showState = 'off';
    this.showBool = false;
  }

  ngOnInit() {}

  click(){
    this.showState = (this.showState == 'off' ? 'on' : 'off');
    this.showBool = !this.showBool;
  }

  scrollTop(){
    this.homeComponent.ActiveScrollTop();
  }

  scrollToExperience(){
    this.homeComponent.ActiveScrollToExperience();
  }

  scrollToProjects(){
    this.homeComponent.ActiveScrollToProjects();
  }

}
