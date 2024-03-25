import { HttpClient } from '@angular/common/http';
import { resolve } from 'node:path';
import { UserService } from './../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-pages',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  providers: [UserService, HttpClient],
  templateUrl: './user-pages.component.html',
  styleUrl: './user-pages.component.scss'
})
export class UserPagesComponent implements OnInit {

  constructor(private userService: UserService){

  }

  ngOnInit(): void {
    this.getPhotos()
  }

  getPhotos(){
    let params ={
      page: 1,
      limit: 10,
    }
    this.userService.getPhotoData(params).subscribe((res:any)=>{
      let data = res
      console.log(data)
    })
  }
}
