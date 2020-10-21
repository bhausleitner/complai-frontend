import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../core/user/user.model';

@Pipe({
  name: 'getInitials'
})
export class GetInitialsPipe implements PipeTransform {
  transform(user: User) {
    if (user) {
      const fullName = user.name + ' ' + user.surname;
      return fullName
        .split(' ')
        .map(n => n[0])
        .join('');
    } else {
      return 'NA';
    }
  }
}
