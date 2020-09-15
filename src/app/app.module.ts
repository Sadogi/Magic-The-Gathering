import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbDatepickerModule, NbListModule, NbToastrModule, NbTableModule, NbRouteTabsetModule, NbTabsetModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { MtgComponent } from './components/mtg/mtg.component';
import { MtgDetailsComponent } from './components/mtg-details/mtg-details.component';
import { MtgService } from './services/mtg.service';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    MtgComponent,
    MtgDetailsComponent,
    // NumberResultModel,
    // InputNumberModel
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
    HttpClientModule,
    NbListModule,
    NbToastrModule.forRoot(),
    NbEvaIconsModule,
    FormsModule,
    ReactiveFormsModule,
    NbTableModule,
    NbRouteTabsetModule,
    NbTabsetModule,
    FlexLayoutModule
  ],
  providers: [
    MtgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
