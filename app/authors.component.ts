import {Component} from 'angular2/core'

@Component({
  selector: 'authors',
  template: `
  <h2>Authors</h2>
  {{ title }}
  `
})
export class AuthorsComponent {
  title = "The title of the authors page";
}
