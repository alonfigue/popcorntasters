import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { DataInputComponent } from './data-input.component';

@NgModule({
    declarations: [DataInputComponent],
    imports: [CommonModule, IonicModule],
    exports: [DataInputComponent],
})
export class DataInputModule {}