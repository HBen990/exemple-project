import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { ChipsModule } from 'primeng/chips';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    PanelModule,
    FileUploadModule,
    ChipsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
