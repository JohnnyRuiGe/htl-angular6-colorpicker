import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  constructor() { }
  r: number = 0;
  g: number = 0;
  b: number = 0;
  ngOnInit() {
  }

  handleSaveButton(values: Array<number>) {
    const [red, green, blue] = values;
    this.r = red;
    this.g = green;
    this.b = blue;
  }

}
