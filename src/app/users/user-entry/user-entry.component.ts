import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.scss']
})
export class UserEntryComponent implements OnInit {


  constructor(public usersService:UsersService, private toastr: ToastrService) { }

  //lifecycle hook
  ngOnInit(): void {
    this.usersService.bindGetAllRoles();
  }

  //submit
  onSubmit(form:NgForm){
    console.log(form.value);
    let insertId=this.usersService.formUserData.userId;

    // checking
    //for insert or update
    if(insertId ==0 || insertId ==null){
      this.insertUserRecord(form)
    }
    else{

      this.updateUserRecord(form)
    }
  }

  //insert method
  insertUserRecord(form?:NgForm){
    console.log("inserting a log");
    console.log(form.value);
    this.usersService.insertUser(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastr.success("user record has been inserted",'UserApp v2022');
        window.location.reload();
      }
    );
  }


  //update method
  updateUserRecord(form?:NgForm){
    console.log("updating a log");
    console.log(form.value);
    this.usersService.updateUser(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.toastr.success("user record has been inserted",'UserApp v2022');
        window.location.reload();
        window.location.reload();
      }
    );
  }
}
