import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAddEditComponent } from 'src/app/views/user-add-edit/user-add-edit.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CoreService } from 'src/app/core/core.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-tab-user',
  templateUrl: './tab-user.component.html',
  styleUrls: ['./tab-user.component.css']
})
export class TabUserComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'birtday',
    'login',
    'phone',
    'photo',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getUserList();
  }

  openAddEditUserForm() {
    const dialogRef = this.dialog.open(UserAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUserList();
        }
      },
    });
  }

  getUserList() {
    this.userService.getUserList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: (res) => {
        this.coreService.openSnackBar('User deleted!', 'done');
        this.getUserList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(UserAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUserList();
        }
      },
    });
  }
}
