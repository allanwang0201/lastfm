import {
  NgModule,
  ValueProvider
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  LastFMComponent,
  ArtistComponent,
  AlbumComponent,
  SearchComponent,
  TrackList,
  AlbumList,
  Potentials,
  LastFM,
  lastFMRouting
} from './index';

import { LastFMConfig } from '../lastfm.config';
import {
  pipes,
  SimpleBreadcrumbsComponent,
  SimpleErrorComponent
} from '../shared/';
import { ArtistViewComponent } from './artist';

import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/merge';
import { SearchFormComponent } from './search/search-form/search-form.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        lastFMRouting,
        NgxPaginationModule
    ],
  declarations: [
    ArtistComponent,
    AlbumComponent,
    SearchComponent,
    LastFMComponent,
    TrackList,
    AlbumList,
    Potentials,
    SimpleBreadcrumbsComponent,
    SimpleErrorComponent,
    pipes,
    ArtistViewComponent,
    SearchFormComponent
  ],
  providers: [
    LastFM,
    LastFMConfig
  ]
})
export class LastFMModule { }
