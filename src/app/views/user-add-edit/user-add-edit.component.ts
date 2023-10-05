import { Component, Inject, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreService } from '../../core/core.service';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss'],

})
export class UserAddEditComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<UserAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private coreService: CoreService
  ) {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      birtday: [new Date()],
      login: '',
      password: '',
      phone: ''
    });
  }

  ngOnInit(): void {
    this.userForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      if (this.data) {
        this.userService
          .updateUser(this.data.id, this.userForm.value)
          .subscribe({
            next: (val: any) => {
              this.coreService.openSnackBar('User updated!');
              this.dialogRef.close(true);
            },
            error: (err: any) => {
              this.coreService.openSnackBar(err);
            },
          });
      } else {
        this.userService.addUser(this.userForm.value).subscribe({
          next: (val: any) => {
            this.coreService.openSnackBar('User added successfully');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            this.coreService.openSnackBar(err.error.message);
          },
        });
      }
    }
  }
}
