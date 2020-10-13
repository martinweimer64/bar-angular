import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bar-form',
  templateUrl: './bar-form.component.html',
  styleUrls: ['./bar-form.component.scss']
})


export class BarFormComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstName: new FormControl('')
   });
  }

}
