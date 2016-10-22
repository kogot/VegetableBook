import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CanDeactivateGuard } from './shared/can-deactivate-guard.service';
import {VegetableComponent } from './vegetable/vegetable.component';

const appRoutes: Routes = [
    { path: '', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'vegetable', component: VegetableComponent}
   
];

export const appRoutingProviders: any[] = [
    CanDeactivateGuard
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
