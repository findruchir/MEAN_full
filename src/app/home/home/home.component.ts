import { Component, OnInit } from '@angular/core';
import {CreatePostService} from '../../home/create-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
        regPost : any =  {}
  constructor(private _createpostservice : CreatePostService) { }

  ngOnInit() {
  }
  createPost(){
      this._createpostservice.createPost(this.regPost);
  }
}
