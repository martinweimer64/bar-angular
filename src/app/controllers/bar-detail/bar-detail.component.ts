import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Bar } from 'src/app/models/bar/bar.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bar-detail',
  templateUrl: './bar-detail.component.html',
  styleUrls: ['./bar-detail.component.scss']
})
export class BarDetailComponent implements OnInit {


  bar$: Observable<Bar[]>;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.route.url.subscribe(() => {
      this.bar$ = this.dataService.get<Bar[]>('bars', id);
    });
  }
}
