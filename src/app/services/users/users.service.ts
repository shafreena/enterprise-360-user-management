import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UserType, UsersState } from '../../interfaces/users/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  private url = 'https://dummyjson.com/user';

  getUserData(): Observable<UserType[]> {
    return this.http.get<UsersState>(this.url, { observe: 'response' }).pipe(
      map((res: any) => {
        console.log(
          'HTTP Method : GET\nAPI URL :',
          res.url + '\nSTATUS : ' + res.status + ' ' + res.statusText
        );
        console.log('DATA :', res.body.users);
        return res.body.users.map((user: UserType) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          email: user.email,
        }));
      })
    );
  }
}
