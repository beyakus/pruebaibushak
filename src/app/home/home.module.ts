import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './services/home.service';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsModule } from './modal/details/details.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    DetailsModule,
    ScrollingModule,
  ],
  providers: [HomeService],
  exports: [HomeComponent],
})
export class HomeModule {}
