import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/pages/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./shared/pages/register/register.component').then(m => m.RegisterComponent)
      },
      {
        path: 'admin',
        loadComponent: () => import('./modules/admin-pages/admin-pages.component').then(m => m.AdminPagesComponent)
      },
      {
        path: 'user',
        loadComponent: () => import('./modules/user-pages/user-pages.component').then(m => m.UserPagesComponent)
      }
    // other routes...
  ];
