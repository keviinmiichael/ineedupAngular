import { Component, Input, OnInit } from '@angular/core';
import { DemandDetail } from '../../models/demand.model';
import { DemandService } from '../../services/demand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demand-detail',
  templateUrl: './demand-detail.component.html',
  styleUrl: './demand-detail.component.css',
})
export class DemandDetailComponent implements OnInit {
  @Input({ required: true }) id!: number;

  protected demandDetail: DemandDetail | null;

  constructor(private _demandService: DemandService, private _router: Router) {
    this.demandDetail = null;
  }

  ngOnInit(): void {
    this._getDemandDetail();
  }

  private _getDemandDetail() {
    this._demandService.getDemandById(this.id).subscribe({
      next: (value) => {
        this.demandDetail = value.data;
      },
    });
  }

  protected onDeleteDemand() {
    this._demandService.deleteDemandById(this.id).subscribe({
      next: () => {
        this._router.navigateByUrl('/demand');
      },
    });
  }
}
