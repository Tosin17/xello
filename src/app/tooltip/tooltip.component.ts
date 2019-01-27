import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})

export class TooltipComponent implements OnInit {

  private _state: Object = {};
  private bottom: boolean = false;
  private top: boolean = false;

  @Input() text: String = 'Dummy text'

  get state(): Object {
    return this._state;
  }

  computeDirection(): void {
    const tooltip = $('#toolTip');
    this.bottom = (tooltip.offset().top - tooltip.height()) < 0;
  }

  @Input()
  set state(value: Object) {
    this._state = value;
    if (this._state['show']) {
      this.computeDirection()
    }
  }

  constructor() { }

  ngOnInit() {
    $(document).on('keyup', e => {
      if (e.keyCode === 27) {
        this._state['show'] = false;
        this.computeDirection();
      }
    })
  }

}
