import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { PlatformComponent } from './platform/platform.component';
import { SolutionComponent } from './solution/solution.component';
import { AboutComponent } from './about/about.component';
import { WhyComplaiComponent } from './why-complai/why-complai.component';

import { EffectsModule } from '@ngrx/effects';
import { ComapnyEffects } from './effects/company.effects';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    LandingComponent,
    PlatformComponent,
    SolutionComponent,
    AboutComponent,
    WhyComplaiComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
    EffectsModule.forFeature([ComapnyEffects])
  ],
  providers: [],
  entryComponents: [LandingComponent]
})
export class LandingModule {}
