import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'profile'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  results: any = [
    { name: 'phase  #1 results:', result: 6 },
    { name: 'phase  #1 results:', result: 19 },
    { name: 'phase  #1 results:', result: 63},
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, firstName: 'Hydrogen', lastName: 'Sodium', email: 'Hydrogen.Sodium@test.com', profile: 'assets/images/avatars/female-01.jpg' },
  { id: 2, firstName: 'Helium', lastName: 'Magnesium', email: 'Helium.Magnesium@test.com', profile: 'assets/images/avatars/male-01.jpg' },
  { id: 3, firstName: 'Lithium', lastName: 'Aluminum', email: 'Lithium.Aluminum@test.com', profile: 'assets/images/avatars/female-02.jpg' },
  { id: 4, firstName: 'Beryllium', lastName: 'Silicon', email: 'Beryllium.Silicon@test.com', profile: 'assets/images/avatars/male-02.jpg' },
  { id: 5, firstName: 'Boron', lastName: 'Phosphorus', email: 'Boron.Phosphorus@test.com', profile: 'assets/images/avatars/female-03.jpg' },
  { id: 6, firstName: 'Carbon', lastName: 'Sulfur', email: 'Carbon.Sulfur@test.com', profile: 'assets/images/avatars/male-03.jpg' },
  { id: 7, firstName: 'Nitrogen', lastName: 'Chlorine', email: 'Nitrogen.Chlorine@test.com', profile: 'assets/images/avatars/male-04.jpg' },
  { id: 8, firstName: 'Oxygen', lastName: 'Argon', email: 'Oxygen.Argon@test.com', profile: 'assets/images/avatars/female-04.jpg' },
  { id: 9, firstName: 'Fluorine', lastName: 'Potassium', email: 'Fluorine.Potassium@test.com', profile: 'assets/images/avatars/male-05.jpg' },
  { id: 10, firstName: 'Neon', lastName: 'Calcium', email: 'Neon.Calcium@test.com', profile: 'assets/images/avatars/female-05.jpg' },
  { id: 11, firstName: 'Sodium', lastName: 'Helium', email: 'Sodium.Helium@test.com', profile: 'assets/images/avatars/male-06.jpg' },
  { id: 12, firstName: 'Magnesium', lastName: 'Boron', email: 'Magnesium.Boron@test.com', profile: 'assets/images/avatars/female-06.jpg' },
];

