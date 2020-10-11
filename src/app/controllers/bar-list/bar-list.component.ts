import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Bar } from 'src/app/models/bar/bar.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-bar-list',
  templateUrl: './bar-list.component.html',
  styleUrls: ['./bar-list.component.scss']
})
export class BarListComponent implements OnInit {

  bars$: Observable<Bar[]>;
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.url.subscribe(() => {
      this.bars$ = this.dataService.get<Bar[]>('bars');
    });
  }
}
