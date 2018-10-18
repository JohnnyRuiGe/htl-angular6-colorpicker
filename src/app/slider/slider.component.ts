import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() type: string;
  @Output() valueChange: EventEmitter<number> = new EventEmitter();
  public value: number = 0;
  constructor() { }

  ngOnInit() {
  }

  handleValueChange() {
    this.valueChange.emit(this.value);
  }

}
