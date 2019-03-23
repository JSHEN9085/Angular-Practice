import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // the name we use for inserting this component into other component, ex <app-root></app-root>
  templateUrl: './app.component.html', //telling typeScript where to find the html file for component <app-root></app-root>
  styleUrls: ['./app.component.css'] //where to import CSS file, after calling bootstrap, we don't have to have this path here
})

// note:
// for templateUrl and styleUrls, we could also replace them by  template or style.
// but only if you have very less content for this two key
// in that case:
// template: `<single-component></single-component>` //direct quote component here;
// style: [`
//  h3 {
//    color: blue
//  }
// `] // this means directly write style here.
export class AppComponent {
  title = 'Angular-Practice'; //data binding, after declared here we could call {{title}} in app.component.html
}
