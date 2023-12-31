import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';
import { CarService } from '../../shared/service/car.service';

@Component({
  selector: 'app-car-add-edit',
  templateUrl: './car-add-edit.component.html',
  styleUrls: ['./car-add-edit.component.scss'],
})
export class CarAddEditComponent implements OnInit {
  carForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private dialogRef: MatDialogRef<CarAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private coreService: CoreService
  ) {
    this.carForm = this.fb.group({
      model: '',
      year: '',
      licensePlate: '',
      color: ''
    });
  }

  ngOnInit(): void {
    this.carForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.carForm.valid) {
      if (this.data) {
        this.carService
          .updateCar(this.data.id, this.carForm.value)
          .subscribe({
            next: (val: any) => {
              this.coreService.openSnackBar('Car detail updated!');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.carService.addCar(this.carForm.value).subscribe({
          next: (val: any) => {
            this.coreService.openSnackBar('Car added successfully');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}