import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Bar } from 'src/app/models/bar/bar.module';
import { DataService } from 'src/app/services/data.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-bar-form',
  templateUrl: './bar-form.component.html',
  styleUrls: ['./bar-form.component.scss']
})


export class BarFormComponent implements OnInit {
  formGroup: FormGroup;
  bar$: Observable<Bar[]>;
  deleted: boolean;
  error: boolean;

  constructor(private dataService: DataService, private route: Router) { };
  
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      cuit: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
        Validators.pattern("^[0-9]*$")
      ]),
      score: new FormControl(''),
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      parking: new FormControl(''),
      attentionHours: new FormControl(''),
      address: new FormControl('')
    });
  }
  get cuit() { return this.formGroup.get('cuit'); }
  get score() { return this.formGroup.get('score'); }
  get phone() { return this.formGroup.get('phone'); }
  get email() { return this.formGroup.get('email'); }
  get name() { return this.formGroup.get('name'); }
  get attentionHours() { return this.formGroup.get('attentionHours'); }
  get parking() { return this.formGroup.get('parking'); }
  get address() { return this.formGroup.get('address'); }
  

  onSubmit() {
      const created$ = this.dataService.new<Bar>(`bars`, this.formGroup.value);
      created$.subscribe(response => {
        if(response){
          this.route.navigate(['/bar', response.cuit]);
        }
        else{
          this.error = true;
        }
      });
    };
  }


