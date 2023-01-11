import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calendar',
    pathMatch: 'full',
  },
  {
    path: 'calendar',
    children: [
      {
        path: '',
        outlet: 'datepicker',
        loadComponent: () =>
          import('./components/datepicker/datepicker.component').then(
            (mod) => mod.DatepickerComponent
          ),
      },
      {
        path: ':year/:month/:days-list',
        children: [
          {
            path: '',
            outlet: 'day',
            loadComponent: () =>
              import('./components/days-list/days-list.component').then(
                (mod) => mod.DayComponent
              ),
          },
          {
            path: '',
            loadComponent: () =>
              import('./components/appointment/appointment.component').then(
                (mod) => mod.AppointmentComponent
              ),
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'calendar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
