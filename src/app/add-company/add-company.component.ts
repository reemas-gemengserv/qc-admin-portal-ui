import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

declare var $: any;

class ImageUpload {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  addCompanyForm;
  companyList = [];

  constructor(private formBuilder: FormBuilder) {

    this.addCompanyForm = formBuilder.group({
      img: [''],
      companyName: [''],
      shortCode: [''],
      companyType: [''],
      isActive: [''],
    });
  }

  selectedFile: ImageUpload;
  processFile(imageInput: any) {

    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageUpload(event.target.result, file);

    });
    reader.readAsDataURL(file);

    console.log(event);
  }

  ngOnInit() {
    this.companyList = this.getCompanies();
    $(".ui.dropdown").dropdown();
    
    $('.ui.checkbox')
      .checkbox()
      ;
  }
  getCompanies() {
    var companies = ["Client", "Contractor"];
    return companies;
  }

  addCompany() {

    var img = this.addCompanyForm.value.img;
    var companyName = this.addCompanyForm.value.companyName;
    var shortCode = this.addCompanyForm.value.shortCode;
    var companyType = this.addCompanyForm.value.companyType;
    var isActive = this.addCompanyForm.value.isActive;

    var projectCompany = {};
    projectCompany['img'] = img;
    projectCompany['Company Name'] = companyName;
    projectCompany['Short Code'] = shortCode;
    projectCompany['Company Type'] = companyType;
    projectCompany['Active'] = isActive;

    console.log(projectCompany);

  }

  ClickButton() {
    alert("Add Company Successfully");
  }

}
