import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
declare var $:any;

class ImageUpload{

  constructor(public src: string, public file: File){}
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm;
  companyList=[];
  roleList=[];
  gender=[];
  
    constructor(private formBuilder:FormBuilder) {
    this.addUserForm= formBuilder.group({

      img:[''],
      firstName:[''],
      lastName:[''],
      email:[''],
      phoneNumber:[''],
      companyName:[''],
      role:[''],
      isAdmin:[''],
      isProcurement:[''],
      isActive:[''], 
      gender:[''],
       });
   }
selectedFile:ImageUpload;
  processFile(imageInput:any){
   
   const file: File=imageInput.files[0];
   const reader= new FileReader();

   reader.addEventListener('load', (event:any) => {

     this.selectedFile = new ImageUpload(event.target.result, file);

   });
   reader.readAsDataURL(file);

   console.log(event);
 }
 
ngOnInit() {
   
    this.companyList=this.getCompanies();
    this.roleList=this.getRoles();
    $(".ui.dropdown").dropdown();
    
    $('.ui.checkbox')
      .checkbox()
      ;
 }

 getCompanies() 
  {
    var companies=["ORL","AFCONS","GEM","TATA"];
    return companies;
  }
  getRoles()
  {
    var roles=["Client","Contractor", "Admin", "Observer"];
    return roles;
  }

addUser(){

  var img=this.addUserForm.value.img;
  var firstName=this.addUserForm.value.firstName;
  var lastName=this.addUserForm.value.lastName;
  var email=this.addUserForm.value.email;
  var phoneNumber=this.addUserForm.value.phoneNumber;
  var companyName=this.addUserForm.value.companyName;
  var role=this.addUserForm.value.role;
  var isAdmin=this.addUserForm.value.isAdmin;
  var isProcurement=this.addUserForm.value.isProcurement;
  var isActive=this.addUserForm.value.isActive;
  var gender =this.addUserForm.value.gender;

  var projectUser={};

  projectUser['img']=img;
  projectUser['First Name']=firstName;
  projectUser['Email']=email;
  projectUser['Company']=companyName;
  projectUser['Last Name']=lastName;
  projectUser['Phone Number']=phoneNumber;
  projectUser['Role']=role;
  projectUser['Is Admin ']=isAdmin;
  projectUser['Is Procurement']=isProcurement;
  projectUser['Active']=isActive;
  projectUser['Gender']=gender;
  
console.log(projectUser);
 }

ClickButton(){
    alert("Add New User Successfully");
       }

}
