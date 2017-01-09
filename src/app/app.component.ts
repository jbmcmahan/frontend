import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  _keyPress(event: any) {
      const pattern = /[atcgATCG]/;
      let inputChar = String.fromCharCode(event.charCode);
      // console.log(inputChar, e.charCode);
      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
  }
}
