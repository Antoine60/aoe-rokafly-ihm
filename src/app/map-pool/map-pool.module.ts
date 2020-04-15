import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MapPoolComponent } from './map-pool.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MapPoolService} from './map-pool.service';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, BrowserAnimationsModule,  NgxSpinnerModule],
    declarations: [MapPoolComponent],
    exports: [MapPoolComponent],
    providers: [MapPoolService]
})

export class MapPoolModule {}
