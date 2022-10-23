import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  correspondenciaForm !: FormGroup;
  constructor(private FormBuilder : FormBuilder) {}
  
  ngOnInit(): void {
    this.correspondenciaForm = this.FormBuilder.group ({
      tipo : ['', Validators.required],
      status : ['', Validators.required],
      date : ['', Validators.required]
    })
  }
  addCorrespondencia(){
    console.log(this.correspondenciaForm.value);
  }

}
