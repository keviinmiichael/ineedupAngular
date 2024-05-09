import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandListComponent } from './pages/demand-list/demand-list.component';
import { DemandDetailComponent } from './pages/demand-detail/demand-detail.component';
import { NewDemandComponent } from './pages/new-demand/new-demand.component';

const routes: Routes = [
  {
    path: '',
    component: DemandListComponent,
  },
  {
    path: 'detail/:id',
    component: DemandDetailComponent,
  },
  {
    path: 'new',
    component: NewDemandComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandRoutingModule {}
