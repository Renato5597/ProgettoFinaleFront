import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { SearchMealsComponent } from './components/search-meals/search-meals.component';
import { MostSearchedComponent } from './components/most-searched/most-searched.component';
import { SearchDBComponent } from './components/search-db/search-db.component';

export const routes: Routes = [
    {path: '', redirectTo: '/search', pathMatch:'full'},
    {path: 'search' , component: SearchMealsComponent},
    {path: 'ricerche' , component: MostSearchedComponent},
    {path: 'ricercheDB' , component: SearchDBComponent},

];
