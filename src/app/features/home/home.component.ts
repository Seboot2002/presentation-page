import { Component, OnInit, AfterViewInit, ViewChildren, ViewChild, ElementRef, QueryList } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade-first', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in-out', 
          style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChildren('FadeElement', { read: ElementRef }) ExperienceElements !: QueryList<ElementRef>;
  observer: any;

  @ViewChild('experienceElement', { read: ElementRef }) experienceElement !: ElementRef;
  @ViewChild('projectsElement', { read: ElementRef }) projectsElement !: ElementRef;

  public year = new Date().getFullYear();

  constructor(private titulo: Title) {
    titulo.setTitle('Sebastián 🤍🌐');
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  ngAfterViewInit() { //Es parecido a OnInit pero se ejecutará solo al renderizar los elementos, por eso va de la mano con ViewChild para poder ejecutarlo despues

    this.intersectionObserver();

    this.ExperienceElements.forEach(element => {

      this.observer.observe(element.nativeElement); //Se ejecutará cada cuando se observe el elemento nativo del html
    });

  }

  intersectionObserver(){

    let options = {
      root: null, /*document.querySelector("#scrollArea"),*/ //Agregar area de scroll completa (Puede ser la pagina entera)
      rootMargin: "0px", //Rango de margin agregado por si acaso
      threshold: 0.25, //Limite de cuando se activa el observador segun el porcentaje del elemento de 0 a 1
    };
    
    this.observer = new IntersectionObserver((entries)=>{

      entries.forEach((entry)=>{

        if(entry.isIntersecting){ //Cuando se realice la interaccion, cada entry/entrada/vista tiene su propio elemento
  
          entry.target.classList.add('in-view');//El target de la entrada es el elemento query del html
  
        }else{
          entry.target.classList.remove('in-view');
        }
      });


    }, options);

  }

  ActiveScrollTop(){
    window.scrollTo(0,0);
  }

  ActiveScrollToExperience(){
    this.experienceElement.nativeElement.scrollIntoView();
  }

  ActiveScrollToProjects(){
    this.projectsElement.nativeElement.scrollIntoView();
  }

}
