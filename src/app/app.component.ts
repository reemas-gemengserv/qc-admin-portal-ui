import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qc-admin-portal';
  constructor(private formBuilder:FormBuilder){
 }
 UserModal(){
  $('.ui.mini.modal').modal('show');
     }


}



