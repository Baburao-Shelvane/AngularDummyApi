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
  //posts = [];
  count:any;
  constructor(private _api: DummyApiService) { }
  
  ngOnInit(){
    this.getPostsList();
  }

  getPostsList(){
    this._api.getPosts().subscribe( function (result) { 
      this.posts = result;
      //console.log(result);
      this.count = result.length;
    });
    console.log(this.posts);
    console.log(this.count);
  }
}
