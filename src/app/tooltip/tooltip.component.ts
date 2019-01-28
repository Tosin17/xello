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

  @Input() text: String = 'Dummy text'

  get state(): Object {
    return this._state;
  }

  computeDirection(): void {
    const tooltip = $('#toolTipText');
    this.bottom = (tooltip.offset().top - $(window).scrollTop()) < 10;
  }

  clearState() {
    this._state = {};
  }

  @Input()
  set state(value: Object) {
    this._state = value;
    if (this._state['show']) {
      this.computeDirection()
    }
  }

  ngOnInit() {

    // On `ESC` hide tooltip
    $('body').on('keyup', e => {
      if (e.keyCode === 27 && this._state['show']) {
        this.clearState();
        this.computeDirection();
      }
    })

    // On `CLICK` outside tooltip, hide it
    $(document).on('mouseup', e => {
      const toolTip = $('.tooltip');

      if (!toolTip.is(e.target) && toolTip.has(e.target).length === 0 && this._state['show']) {
        this._state['show'] = false;
        this.computeDirection();
      }

    })

    // On `SCROLL to top of page` if tooltip is displayed, update its display direction
    $(document).on('scroll', () => {
      const tooltip = $('.tooltip');
      if ($(window).scrollTop() > (tooltip.offset().top - tooltip.height() - 80) && this._state['show']) {
        this.bottom = true;
      }
    })
  }

}
