import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { UsersService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  //assign default page
  page:number=1;
  filter:string='';
  
  constructor(public usersService: UsersService,private toastr: ToastrService) { }

  ngOnInit(): void {
    // Life Cycle Hook - Initialize
    console.log("Welcome Life Cycle Hook");
    // Testing

    this.usersService.bindGetAllUsersList();

  }

  //Subscribe getAllUsers
  getAllUsersList() {
    //Call Service
    this.usersService.getAllUSers().subscribe(
      response => {
        console.log("Retrieving from list");
        console.log(response);
      },
      (error) => {
        console.log("Something Wrong");
        console.log(error);
      }
    )
  }

  //update a user
  updateUser(userId: number) {
    console.log(userId);
    // this.usersService.formUserData=
  }

  //user form to edit
  populateForm(user: User) {
    console.log(user);
    this.usersService.formUserData = Object.assign({}, user)
  }


  //delete user
  deleteUser(userId: number) {
    console.log("deleting a record")
    if (confirm('Are you sure you want to delete this record ?')) {
      this.usersService.deleteUser(userId).subscribe(
        (result) => {
          console.log(result);
          this.usersService.bindGetAllUsersList();
          this.toastr.error("user record has been delete",'UserApp v2022');
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
    // this.usersService.formUserData=
  }

}
