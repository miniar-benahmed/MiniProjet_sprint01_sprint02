
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Recette } from '../models/recette.model';
import { RecetteService } from '../services/recette.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-recette',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recette.html'
})
export class RecetteComponent implements OnInit {

  recettes?: Recette[];

  constructor(private recetteService: RecetteService,public authService: AuthService) {}

  ngOnInit(): void {
    this.recettes = this.recetteService.listeRecettes();
  }

  supprimerRecette(recette: Recette): void {
    const confirmation = confirm('Voulez-vous supprimer cette recette ?');

    if (confirmation) {
      this.recetteService.supprimerRecette(recette);
      this.recettes = this.recetteService.listeRecettes();
    }
  }
}
