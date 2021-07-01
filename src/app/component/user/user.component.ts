import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HttpCallService } from 'src/app/service/http-call.service';
import { User } from '../../modeli/user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute, private _httpService: HttpCallService) {
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
  }

}
