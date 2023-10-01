import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarAddEditComponent } from 'src/app/car-add-edit/car-add-edit.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CoreService } from 'src/app/core/core.service';
import { CarService } from 'src/app/shared/service/car.service';


@Component({
  selector: 'app-tab-car',
  templateUrl: './tab-car.component.html',
  styleUrls: ['./tab-car.component.css']
})
export class TabCarComponent {
  displayedColumns: string[] = [
    'id',
    'model',
    'color',
    'year',
    'licensePlate',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private carService: CarService,
    private coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getCarList();
  }

  openAddEditCarForm() {
    const dialogRef = this.dialog.open(CarAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCarList();
        }
      },
    });
  }

  getCarList() {
    this.carService.getCarList().subscribe({
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

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe({
      next: (res) => {
        this.coreService.openSnackBar('Car deleted!', 'done');
        this.getCarList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(CarAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCarList();
        }
      },
    });
  }
}
