import { Component } from '@angular/core';
import { Auth }              from './auth.service';
import { Profile } from './profile.service';

@Component({
  selector: 'app-root',
  providers: [ Auth, Profile ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private auth: Auth, private profile: Profile) {}

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
