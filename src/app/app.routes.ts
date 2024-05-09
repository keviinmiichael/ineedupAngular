import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'demand',
    loadChildren: () =>
      import('./modules/demand/demand.module').then((m) => m.DemandModule),
  },
  {
    path: 'proposal',
    loadChildren: () =>
      import('./modules/proposal/proposal.module').then(
        (m) => m.ProposalModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
];
