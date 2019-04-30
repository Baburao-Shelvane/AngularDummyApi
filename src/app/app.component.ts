import { Component, OnInit } from '@angular/core';
import { DummyApiService } from './dummy-api.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-dummy-api';
  posts:any;
  users = [];
  //posts = [];
  count:any;
  errorMessage:any;
  constructor(private _api: DummyApiService) { }
  
  ngOnInit(){
    this.getPostsList();
    this.getUsersList();
  }

  getPostsList(){
    this._api.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }

  getUsersList(){
    this._api.getUsers().subscribe(
      response => {
        this.users = response;
        console.log(response);
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
    
  }
}
