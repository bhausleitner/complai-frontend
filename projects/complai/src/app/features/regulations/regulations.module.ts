import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegulationsComponent } from './regulations/regulations.component';
import { SharedModule } from '../../shared/shared.module';
import { RegulationsRoutingModule } from './regulations-routing.module';
import { ExplorerComponent } from './explorer/explorer.component';
import { ExplorerEntryComponent } from './explorer/explorer-entry/explorer-entry.component';
import { EffectsModule } from '@ngrx/effects';
import { RegulationsEffects } from './effects/regulations.effects';
import { ExplorerFiltersEffects } from './effects/explorer-filters.effects';
import { ExplorerFiltersComponent } from './explorer/explorer-filters/explorer-filters.component';

@NgModule({
  declarations: [
    RegulationsComponent,
    ExplorerComponent,
    ExplorerEntryComponent,
    ExplorerFiltersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegulationsRoutingModule,
    EffectsModule.forFeature([RegulationsEffects]),
    EffectsModule.forFeature([ExplorerFiltersEffects])
  ],
  exports: [ExplorerFiltersComponent, ExplorerEntryComponent],
  entryComponents: [RegulationsComponent]
})
export class RegulationsModule {}
