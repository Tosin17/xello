import { Component, ViewChild, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})

export class TooltipComponent {

  private _state: Object = {};
  private bottom: boolean = false;
  private top: boolean = false;

  @Input() text: String = 'Dummy text'

  get state(): Object {
    return this._state;
  }

  @Input()
  set state(value: Object) {
    this._state = value;
    if (this._state['show']) {
      const tooltip = $('#toolTip');
      this.bottom = (tooltip.offset().top - tooltip.height()) < 0;
    }
  }

  constructor() { }

}
