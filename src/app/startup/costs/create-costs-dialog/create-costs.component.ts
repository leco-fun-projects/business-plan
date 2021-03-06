import {Component, Inject, OnInit} from '@angular/core';
import {Costs} from '../../../models/finances.models';
import {StartupService} from '../../../startup.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Startup} from '../../../models/startup.models';
import {CreateDialog} from '../../../create.dialog';

@Component({
  selector: 'l3co-create-costs',
  templateUrl: './create-costs.component.html'
})
export class CreateCostsComponent extends CreateDialog implements OnInit {

  costs: Costs = {name: '', value: 0.0};

  constructor(private service: StartupService,
              private dialogRef: MatDialogRef<CreateCostsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Startup) {
    super();
  }

  ngOnInit() {
  }

  save() {
    this.data
      .costs.push(this.costs);

    this.service
      .update(this.data)
      .then(() => this.dialogRef.close());
  }

  close() {
    this.dialogRef.close();
  }
}
