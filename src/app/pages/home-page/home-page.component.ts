import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: any = '';

  constructor(private location: Location) { }

  ngOnInit(): void {
    if(this.location.getState()){
      this.user = this.location.getState();
    }
  }

}
