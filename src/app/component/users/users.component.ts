import { Component, OnInit } from '@angular/core';
import { User } from '../../modeli/user';
import { HttpCallService } from 'src/app/service/http-call.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersList: User[];

  constructor(private _httpCallService: HttpCallService) { }

  ngOnInit(): void {
    this._httpCallService.getAll()
      .subscribe(data => {
        this.usersList = data;
      });
  }



}
