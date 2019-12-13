import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
declare var $: any;

class ImageUpload {

  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  addProjectForm;
  companyList = [];

  constructor(private formBuilder: FormBuilder) {

    this.addProjectForm = formBuilder.group({

      img: [''],
      projectName: [''],
      projectLocation: [''],
      projectCode: [''],
      companyName: [''],
      crfi: [''],
      ncr: [''],
      obs: [''],
      sang: [''],
      mrfi: [''],
      isActive: ['']
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
    var companies = ["ORL", "AFCONS", "GEM", "TATA"];
    return companies;
  }

  addProject() {
    var img = this.addProjectForm.value.img;
    var projectName = this.addProjectForm.value.projectName;
    var projectCode = this.addProjectForm.value.projectCode;
    var projectLocation = this.addProjectForm.value.projectLocation;
    var companyName = this.addProjectForm.value.companyName;
    var crfi = this.addProjectForm.value.crfi;
    var obs = this.addProjectForm.value.obs;
    var mrfi = this.addProjectForm.value.mrfi;
    var ncr = this.addProjectForm.value.ncr;
    var sang = this.addProjectForm.value.sang;
    var isActive = this.addProjectForm.value.isActive;

    var projectObj = {};

    projectObj['img'] = img;
    projectObj['Project Name'] = projectName;
    projectObj['Project Location'] = projectLocation;
    projectObj['Project Code'] = projectCode;
    projectObj['company'] = companyName;

    projectObj['models'] = {};

    projectObj['models']['crfi'] = crfi;
    projectObj['models']['obs'] = obs;
    projectObj['models']['mrfi'] = mrfi;
    projectObj['models']['ncr'] = ncr;
    projectObj['models']['sang'] = sang;

    projectObj['checkbox'] = {};

    projectObj['checkbox']['Active'] = isActive;

    console.log(projectObj);
    console.log(projectObj['models']);
    console.log(projectObj['checkbox']);
  }

  ClickButton() {
    alert("Add New Project Successfully");

  }


}
