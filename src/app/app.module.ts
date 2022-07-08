import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppComponent } from './app.component';
import { FormatPropertiesPaneComponent } from './format-properties-pane/format-properties-pane.component';
import { FormatPagePropertiesPaneComponent } from './format-page-properties-pane/format-page-properties-pane.component';
import { AddSectionToFormatDialogComponent } from './add-section-to-format-dialog/add-section-to-format-dialog.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

const routes = [
  {
    path: 'format-properties-pane',
    component: FormatPropertiesPaneComponent,
  },
  {
    path: 'format-page-properties-pane',
    component: FormatPagePropertiesPaneComponent,
  },
  {
    path: 'add-section-to-format-dialog',
    component: AddSectionToFormatDialogComponent,
  },
  {
    path: 'page-layout',
    component: PageLayoutComponent,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularMaterialModule,
  ],
  declarations: [
    AppComponent,
    FormatPropertiesPaneComponent,
    FormatPagePropertiesPaneComponent,
    AddSectionToFormatDialogComponent,
    PageLayoutComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
