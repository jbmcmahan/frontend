import { Component } from '@angular/core';
import { Auth }              from './auth.service';

@Component({
  selector: 'app-root',
  providers: [ Auth ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private auth: Auth) {}

  // _keyPress(event: any) {
  //     const pattern = /[atcgATCG]/;
  //     let inputChar = String.fromCharCode(event.charCode);
  //     // console.log(inputChar, e.charCode);
  //     if (!pattern.test(inputChar)) {
  //       // invalid character, prevent input
  //       event.preventDefault();
  //     }
  // }
}
