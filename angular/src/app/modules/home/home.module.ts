import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [HomeComponent, ErrorComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
