import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MrfiReportService } from '../service/mrfi-report.service';

declare var $: any;

@Component({
  selector: 'app-mri-report',
  templateUrl: './mri-report.component.html',
  styleUrls: ['./mri-report.component.css']
})
export class MriReportComponent implements OnInit {

  mriReportForm;
  //  reportList = ["Material Inspection Report", "NCR Report"];

  constructor(private formBuilder: FormBuilder, private mrfiService:MrfiReportService) {

    this.mriReportForm = formBuilder.group({
       reportType: [''],
    });

  }//constructor()

  ngOnInit() {

    $(".ui.dropdown").dropdown();

  }//ngOnInit()



  mrfiReport() {
    console.log("MRFI report is clicked");
    this.mrfiService.getMrfiReports()
    .subscribe(
      sucessApi =>{
        console.log("Sucess", sucessApi);
      },
    error =>
    {
      console.log("Sucess", error);


    }
    )
  }//mrfiReport()


}// end of main
