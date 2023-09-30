import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CarService } from 'src/shared/service/car.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-car-add-edit',
  templateUrl: './car-add-edit.component.html',
  styleUrls: ['./car-add-edit.component.scss'],
})
export class CarAddEditComponent implements OnInit {
  carForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];

  constructor(
    private _fb: FormBuilder,
    private _carService: CarService,
    private _dialogRef: MatDialogRef<CarAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.carForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      birtday: '',
      login: '',
      phone: ''
    });
  }

  ngOnInit(): void {
    this.carForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.carForm.valid) {
      if (this.data) {
        this._carService
          .updateCar(this.data.id, this.carForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Car detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._carService.addCar(this.carForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Car added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
