import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandRoutingModule } from './demand-routing.module';
import { DemandListComponent } from './pages/demand-list/demand-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DemandDetailComponent } from './pages/demand-detail/demand-detail.component';
import { BackButtonPageContainerComponent } from '../../shared/components/back-button-page-container/back-button-page-container.component';
import { NewDemandComponent } from './pages/new-demand/new-demand.component';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DemandListComponent,
    DemandDetailComponent,
    NewDemandComponent,
  ],
  imports: [
    CommonModule,
    DemandRoutingModule,
    MatButton,
    MatTableModule,
    MatPaginatorModule,
    BackButtonPageContainerComponent,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class DemandModule {}
