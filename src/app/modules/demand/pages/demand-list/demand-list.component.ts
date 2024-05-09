import { Component, OnInit } from '@angular/core';
import { Demand } from '../../models/demand.model';
import { DemandService } from '../../services/demand.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demand-list',
  templateUrl: './demand-list.component.html',
  styleUrl: './demand-list.component.css',
})
export class DemandListComponent implements OnInit {
  protected demands: Demand[] | null;
  protected displayedColumns: string[];
  protected page: number;
  protected pageSize: number;
  protected visibleDemands: Demand[] | null;

  constructor(private _demandService: DemandService, private _router: Router) {
    this.demands = null;
    this.displayedColumns = ['id', 'title', 'category'];
    this.page = 0;
    this.pageSize = 5;
    this.visibleDemands = null;
  }

  ngOnInit(): void {
    this._getDemands();
  }

  protected onClickElement(id: number) {
    this._router.navigateByUrl('/demand/detail/' + id);
  }

  protected onUpdatePagination(page: PageEvent) {
    if (this.pageSize !== page.pageSize) {
      this.page = 0;
      this.pageSize = page.pageSize;
      this._setVisibleDemands();
      return;
    }

    this.page = page.pageIndex;
    this._setVisibleDemands();
  }

  private _getDemands() {
    this._demandService.getDemands().subscribe({
      next: (value) => {
        this.demands = value.data;
        this._setVisibleDemands();
      },
      error: () => {},
    });
  }

  private _setVisibleDemands() {
    const demands = [...this.demands!];
    this.visibleDemands = demands!.splice(
      this.pageSize * this.page,
      this.pageSize
    );
  }
}
