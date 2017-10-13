import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  larger = false;
  toggle() {
    this.larger = !this.larger;
  }
  constructor(public navCtrl: NavController) {

  }

}
