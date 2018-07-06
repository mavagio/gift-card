import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {ApiRequestsService} from "../../services/api-requests.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userData: any = {};

  constructor(private apiRequestsService: ApiRequestsService,
              private authService: AuthService) { }

  ngOnInit() {
    this.apiRequestsService.getUser(this.authService.getUserId()).subscribe(response => {
      this.userData = response.local;
      this.userData.id = this.authService.getUserId();
    });
  }

  logout() {
    this.authService.logout();
  }

}
