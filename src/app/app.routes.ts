import { Routes } from '@angular/router';
import { RecetteComponent } from './recette/recette';
import { AddRecetteComponent } from './add-recette/add-recette';
import { UpdateRecetteComponent } from './update_recette/update-recette';
import { RechercheParPaysOrigine } from './recherche-par-pays-origine/recherche-par-pays-origine';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { ListeCategories } from './liste-categories/liste-categories';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { recetteGuard } from './recette-guard';

export const routes: Routes = [
  { path: 'recettes', component: RecetteComponent },
  { path: 'add-recette', component: AddRecetteComponent, canActivate: [recetteGuard] },
  { path: 'update-recette/:id', component: UpdateRecetteComponent },
  { path: '', redirectTo: 'recettes', pathMatch: 'full' },
  {path: 'rechercheParPaysOrigine', component: RechercheParPaysOrigine },
  { path: 'rechercheParNom', component: RechercheParNom },
  { path: 'listeCategories', component: ListeCategories },
  { path: 'login', component: Login },
  { path: 'app-forbidden', component: Forbidden },

];
