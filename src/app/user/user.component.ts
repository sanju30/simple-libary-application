import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private data: ServiceService) {}
  posts: Object;
  ngOnInit() {
    this.data.Getposts().subscribe(data => (this.posts = data));
  }
}
