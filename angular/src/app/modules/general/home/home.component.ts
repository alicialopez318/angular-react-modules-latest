import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  version = environment.application.version;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: Array<any>;

  constructor(private meta: Meta) {

    this.features =
      [
        {
          name: 'Bootstrap',
          description: 'How to use Buttons, Alerts, Pagination, Tables, Collapses',
          icon: 'fab fa-bootstrap',
          link: 'bootstrap'
        },
        {
          name: 'Components',
          description: 'Channel component with Input, Output and Event Emitter',
          icon: 'far fa-clone',
          link: 'components'
        },
        {
          name: 'Services',
          description: 'Use services to view a playlist and a youtube player',
          icon: 'fas fa-handshake',
          link: 'services'
        },
        {
          name: 'Reactive Forms',
          description: 'A model-driven approach to handling form inputs',
          icon: 'far fa-file-alt',
          link: 'forms'
        },
        {
          name: 'Template Driven',
          description: 'Forms are the mainstay of business applications',
          icon: 'far fa-file-alt',
          link: 'forms'
        },
      ];
  }

  ngOnInit(): void {

    this.meta.updateTag(
      {
        name: 'description',
        content: 'This application was developed with Angular version 14.1.1 and bootstrap 5.2.0' +
          ' It applies Routing, Lazy loading, Server side rendering and Progressive Web App (PWA)'
      });
  }

}