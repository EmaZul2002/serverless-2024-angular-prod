import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => 
            import('./core/component/dashboard/dashboard.component').then((m) => m.DashboardComponent)
    },
    {
        path: 'inserimentoPaziente',
        loadComponent: () => 
            import('./core/component/inserimento-paziente/inserimento-paziente.component').then((m) => m.InserimentoPazienteComponent)
    }
];
