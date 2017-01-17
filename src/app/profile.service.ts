import { Injectable }      from '@angular/core';

@Injectable()
export class Profile {
  public userprofile = JSON.parse(localStorage.getItem('profile'));
}
