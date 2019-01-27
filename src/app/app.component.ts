import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  toolTip: Object = {};
  private textForToolTipA: String = 'Hey! I\'m tool tip A. Guess what? A is the 1st letter in the alphabet';
  private textForToolTipB: String = 'Hey! I\'m tool tip B. And B is the 2nd letter in the alphabet'

  showToolTip() {
    this.toolTip = { show: true };
  }
}
