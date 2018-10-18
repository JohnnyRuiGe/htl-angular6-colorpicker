import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { EditorComponent } from './editor/editor.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSliderModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ColorpickerComponent,
    EditorComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
