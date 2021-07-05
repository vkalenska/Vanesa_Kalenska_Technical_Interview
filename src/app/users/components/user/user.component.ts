import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../../users.service';
import {FormControl, FormGroup} from '@angular/forms';

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
  usersForm: FormGroup


  constructor(private usersSvc: UsersService) {
    this.usersForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.usersForm = new FormGroup({
      name: new FormControl(this.user.name),
      username: new FormControl(this.user.username),
      email: new FormControl(this.user.email),
      street: new FormControl(this.user.address.street),
      suite: new FormControl(this.user.address.suite),
      city: new FormControl(this.user.address.city),
      phone: new FormControl(this.user.phone),
      website: new FormControl(this.user.website)
    })
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
