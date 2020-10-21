import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { PlatformComponent } from './platform/platform.component';
import { SolutionComponent } from './solution/solution.component';
import { AboutComponent } from './about/about.component';
import { WhyComplaiComponent } from './why-complai/why-complai.component';
import { AnonymousGuardService } from '../../core/auth/anonymous-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
        canActivate: [AnonymousGuardService]
      },
      {
        path: 'welcome',
        component: WhyComplaiComponent,
        data: { title: 'complai.menu.login' },
        canActivate: [AnonymousGuardService]
      },
      {
        path: 'platform',
        component: PlatformComponent,
        data: { title: 'complai.menu.platform' },
        canActivate: [AnonymousGuardService]
      },
      {
        path: 'solution',
        component: SolutionComponent,
        data: { title: 'complai.menu.solution' },
        canActivate: [AnonymousGuardService]
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { title: 'complai.menu.about' },
        canActivate: [AnonymousGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
