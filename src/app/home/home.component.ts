import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './services/home.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DetailProduct } from '@interfaces/detailProducto';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from './modal/details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly ngUnSubscribe: Subject<void> = new Subject<void>();
  data: DetailProduct[] = [];

  constructor(private services: HomeService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }

  getData() {
    this.services
      .getPhone()
      .pipe(takeUntil(this.ngUnSubscribe))
      .subscribe((response: DetailProduct[]) => (this.data = response));
  }

  openDetails(data: DetailProduct) {
    const config = { data };
    this.dialog.open(DetailsComponent, config);
  }
}
