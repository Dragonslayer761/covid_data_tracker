import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeacrhBarComponent } from './Components/seacrh-bar/seacrh-bar.component';
import { DataPreviewComponent } from './Components/data-preview/data-preview.component';
import { GlobalDataComponent } from './Components/global-data/global-data.component';
import { CountryDataComponent } from './Components/country-data/country-data.component';
import { CardComponent } from './Components/Common/card/card.component';
import { ListComponentComponent } from './Components/Common/list-component/list-component.component';
import { PaginationComponent } from './Components/Common/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    SeacrhBarComponent,
    DataPreviewComponent,
    GlobalDataComponent,
    CountryDataComponent,
    CardComponent,
    ListComponentComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas :[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class AppModule { }
