import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MapPoolComponent} from './map-pool.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MapPoolService} from './map-pool.service';
import {MapFilterPipe} from './map-pool-filter.pipe';


@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, BrowserAnimationsModule, NgxSpinnerModule],
    declarations: [MapPoolComponent, MapFilterPipe],
    exports: [MapPoolComponent, MapFilterPipe],
    providers: [MapPoolService]
})

export class MapPoolModule {
}
