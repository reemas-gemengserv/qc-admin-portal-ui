import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activityForm;
  activityData: any = [
    {
      SeNo: 1,
      name: 'For Electrical , Plumbing & Fire fighting Sleeves & cutout',
      pre: '11',
      during: '7',
      post: '19'
    },
    {
      SeNo: 2,
      name: 'Material Acceptance',
      pre: '12',
      during: '32',
      post: '12'
    },
    {
      SeNo: 3,
      name: 'Physical Conditions',
      pre: '11',
      during: '19',
      post: '15'
    },
    {
      SeNo: 4,
      name: ' Confirmity with specifications',
      pre: '20',
      during: '9',
      post: '11'
    },
    {
      SeNo: 5,
      name: 'ELECTRICAL & IBMS (Integrated building management system)',
      pre: '10',
      during: '8',
      post: '6'
    },

  ];

  constructor(private formBuilder: FormBuilder) {

    console.log(this.activityData);

    this.activityForm = formBuilder.group({

      activityData: [''],
    });

  }
  ngOnInit() {
  }

}
