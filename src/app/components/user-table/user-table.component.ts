import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'dateCreated', 'role', 'status', 'action'];
  dataSource = new MatTableDataSource<UserData>(ELEMENT_DATA);

  constructor(private router: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  ngOnInit(): void {
    // Set paginator and sort if they are defined
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  // Ensure that paginator and sort are assigned correctly
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  edit(id: number): void {
    // Implement edit logic
    console.log('Edit user with ID:', id);
  }

  delete(id: number): void {
    // Implement delete logic
    console.log('Delete user with ID:', id);
  }
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}

// Define your user data type and example data
export interface UserData {
  id: number;
  name: string;
  dateCreated: Date;
  role: string;
  status: string;
  image: string;  // URL or path to the user's image
}



const ELEMENT_DATA: UserData[] = [
  {id: 1, name: 'John Doe', dateCreated: new Date(), role: 'Admin', status: 'Active', image: 'https://i.pravatar.cc/150?img=1'},
  {id: 2, name: 'Jane Smith', dateCreated: new Date(), role: 'User', status: 'Inactive', image: 'https://i.pravatar.cc/150?img=2'},
  {id: 3, name: 'Alice Johnson', dateCreated: new Date(), role: 'Moderator', status: 'Suspended', image: 'https://i.pravatar.cc/150?img=3'},
  {id: 4, name: 'Bob Brown', dateCreated: new Date(), role: 'User', status: 'Active', image: 'https://i.pravatar.cc/150?img=4'},
  {id: 5, name: 'Charlie Black', dateCreated: new Date(), role: 'Admin', status: 'Inactive', image: 'https://i.pravatar.cc/150?img=5'},
  {id: 6, name: 'David White', dateCreated: new Date(), role: 'Moderator', status: 'Active', image: 'https://i.pravatar.cc/150?img=6'},
  {id: 7, name: 'Eve Green', dateCreated: new Date(), role: 'User', status: 'Suspended', image: 'https://i.pravatar.cc/150?img=7'},
  {id: 8, name: 'Frank Blue', dateCreated: new Date(), role: 'User', status: 'Inactive', image: 'https://i.pravatar.cc/150?img=8'},
  {id: 9, name: 'Grace Red', dateCreated: new Date(), role: 'Admin', status: 'Active', image: 'https://i.pravatar.cc/150?img=9'},
  {id: 10, name: 'Henry Yellow', dateCreated: new Date(), role: 'Moderator', status: 'Inactive', image: 'https://i.pravatar.cc/150?img=10'},
  {id: 11, name: 'Ivy Pink', dateCreated: new Date(), role: 'User', status: 'Active', image: 'https://i.pravatar.cc/150?img=11'},
  {id: 12, name: 'Jack Gray', dateCreated: new Date(), role: 'Admin', status: 'Suspended', image: 'https://i.pravatar.cc/150?img=12'}
];


  // Add more data as needed

