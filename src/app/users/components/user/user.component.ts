import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: any;
  posts: any;
  toggleButton = false;
  isReady = true;
  constructor(private usersSvc: UsersService) { }

  ngOnInit(): void {
    console.log(this.user);
  }


  getPosts(e: any) {
    this.isReady = false;
    this.toggleButton = !this.toggleButton
    this.usersSvc.getPostsByUser(e).subscribe(posts => {
      this.isReady = true;
      this.posts = posts;
    })
  }

  updateUser(userId: any) {
    this.isReady = false;
    this.usersSvc.updateUser(userId, this.user).subscribe(res => {
      this.isReady = true
    },
      error => console.log(error)
    )
  }
}
