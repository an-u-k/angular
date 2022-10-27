import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class UsersService
{
  filter(arg0: any) {
    throw new Error('Method not implemented.');
  }
  map(arg0: any) {
    throw new Error('Method not implemented.');
  }
  //Global Variable
  formUserData : User= new User();
  formRoleData : Role= new Role();

  //List of Users -- Retrieve all Records
  users : User[]; //All Users
  roles:  Role[];

  constructor(private httpClient : HttpClient)
  {

  }

  //Call REST API
  //  1 Get all Users
  getAllUSers() : Observable<any>
  {
    //  http://localhost:9095/api/users
    return this.httpClient.get(environment.apiUrl + "/api/users");
  }

  //  2 Retrieve all Users for Listing
  bindGetAllUsersList()
  {
    this.httpClient.get(environment.apiUrl + '/api/users')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.users = response as User[];
      }
    );
  }

  // get all rows for binding
  bindGetAllRoles(){
    this.httpClient.get(environment.apiUrl+'/api/roles')
    .toPromise()
    .then(
      (response)=>{
        console.log(response);
        this.roles=response as Role[]
      }
    );
  }

  // insert

  insertUser(user: User): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/users',user);
  }


  //update
  updateUser(user: User): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/users',user);
  }

  //delete
  deleteUser(userId:number): Observable<any>{
    return this.httpClient.delete(environment.apiUrl+'/api/users/'+userId)
  }
}
