import { FormsModule } from '@angular/forms';
import { UserData } from './../../core/models/admin.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin-pages',
  standalone: true,
  imports: [HeaderComponent, CommonModule, MatTableModule, MatSortModule, FormsModule],
  templateUrl: './admin-pages.component.html',
  styleUrl: './admin-pages.component.scss'
})
export class AdminPagesComponent implements AfterViewInit {
  userList : any 
  displayedColumns: string[] = ['id', 'email', 'username', 'role', 'actions'];
  dataSource: MatTableDataSource<UserData>;
  isEditing: Record<number, boolean> = {};
  @ViewChild(MatSort) sort: any = MatSort;
  constructor() {
    this.userList = localStorage.getItem('users')
    const users = JSON.parse(this.userList) || [];
    this.dataSource = new MatTableDataSource(users);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  startEdit(user: UserData): void {
    user.isEdit = true;
  }
  
  saveEdit(user: UserData): void {
    user.isEdit = false;
    // Save changes to local storage
    localStorage.setItem('users', JSON.stringify(this.dataSource.data));
  }

  stopEdit(id: number): void {
    this.isEditing[id] = false;
    // Save changes to local storage or server
  }
  
}
