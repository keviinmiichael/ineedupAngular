import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewDemandForm } from '../../models/new-demand.model';
import { DemandService } from '../../services/demand.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-demand',
  templateUrl: './new-demand.component.html',
  styleUrl: './new-demand.component.css',
})
export class NewDemandComponent {
  protected newDemandForm: FormGroup<NewDemandForm>;

  constructor(
    private _demandService: DemandService,
    private _matSnackBar: MatSnackBar
  ) {
    this.newDemandForm = new FormGroup({
      title: new FormControl(null),
      description: new FormControl(null),
      files: new FormControl(null),
    });
  }

  onSubmit(event: SubmitEvent) {
    event.preventDefault();

    this._demandService
      .createDemand({
        title: this.newDemandForm.value.title,
        description: this.newDemandForm.value.description,
        category_id: 1,
      })
      .subscribe({
        next: () => {
          this._matSnackBar.open('Demand created correctly', 'Ok', {
            duration: 3000,
          });
        },
        error: () => {
          console.log('error');
        },
      });
  }
}
