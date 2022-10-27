import { Role } from "./role";

export class User
{
    userId : number=0;
    userName : string='';
    password : string='';
    fullName : string='';
    active : boolean=false;
    roleId:number=0;
    role : Role = new Role();
}
