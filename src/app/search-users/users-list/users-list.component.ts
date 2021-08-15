import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() userName: string;
  @Input() firstname: string;
  @Input() lastname: string;
  @Input() serviceName: string;
  @Input() imageUrl: string;

  userImage: string;

  constructor() { }

  ngOnInit(): void {
    this.userImage = this.imageUrl;
  }

  

}
