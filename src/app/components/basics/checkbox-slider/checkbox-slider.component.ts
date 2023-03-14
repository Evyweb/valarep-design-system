import { Component } from '@angular/core';

@Component({
  selector: 'val-checkbox-slider',
  templateUrl: './checkbox-slider.component.html',
  styleUrls: ['./checkbox-slider.component.scss']
})
export class CheckboxSliderComponent {
  isToggleChecked: boolean = false;

  constructor() { }

  onToggleChange() { 
    this.isToggleChecked = !this.isToggleChecked
  }
}
