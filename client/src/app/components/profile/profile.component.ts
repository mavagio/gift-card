import {Component, OnInit} from '@angular/core';
import {ApiRequestsService} from "../../services/api-requests.service";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public cards: any = [];
  public userData: any = {};

  constructor(private apiRequestsService: ApiRequestsService,
              private authService: AuthService,
              public router: Router) {
  }

  ngOnInit() {
    this.apiRequestsService.getUser(this.authService.getUserId()).subscribe(response => {
      this.userData = response.local;
      this.userData.id = this.authService.getUserId();
      this.getCardsForUser();
    });
  }
  public createNewEvent() {

  }

  private getCardsForUser(): void {
    this.cards.push(
      {
        title: "Ann's bday",
        info: "We do this together"
      },
      {
        title: "Xmas for Martin",
        info: "Lets get him happy"
      })
  }
}
