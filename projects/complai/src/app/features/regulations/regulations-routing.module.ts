import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegulationsComponent } from './regulations/regulations.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { AuthGuardService } from '../../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: RegulationsComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'explorer',
        pathMatch: 'full'
      },
      {
        path: 'explorer',
        component: ExplorerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegulationsRoutingModule {}
