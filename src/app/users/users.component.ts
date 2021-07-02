import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any;
  posts: any;
  isReady = false;


  constructor(private usersSvc: UsersService) {
  }

  ngOnInit(): void {
    this.usersSvc.getAllUsers().subscribe(res => {
      this.users = res;
      this.isReady = true;
    })


  }


  getPosts(userId: any) {
    this.usersSvc.getPostsByUser(userId).subscribe(posts => {
      this.posts = posts;

    });
  }
}
