import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeacrhBarComponent } from './Components/seacrh-bar/seacrh-bar.component';
import { DataPreviewComponent } from './Components/data-preview/data-preview.component';
import { GlobalDataComponent } from './Components/global-data/global-data.component';
import { CountryDataComponent } from './Components/country-data/country-data.component';
import { CardComponent } from './Components/Common/card/card.component';
import { PaginationComponent } from './Components/Common/pagination/pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SeacrhBarComponent,
    DataPreviewComponent,
    GlobalDataComponent,
    CountryDataComponent,
    CardComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
