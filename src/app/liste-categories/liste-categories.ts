import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteService } from '../services/recette.service';
import { paysOrigine } from '../models/paysOrigine.model';
import { UpdateCategorie } from '../update-categorie/update-categorie';

@Component({
  selector: 'app-liste-categories',
  imports: [CommonModule, UpdateCategorie],
  templateUrl: './liste-categories.html',
  styles: ``
})
export class ListeCategories implements OnInit {

  listePays!: paysOrigine[];
  updatedPays: paysOrigine = { idpaysOrigine: 0, nompaysOrigine: '' };
  ajout: boolean = true;

  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.chargerPays();
  }

  chargerPays() {
    this.listePays = this.recetteService.listepaysOrigine();
  }

  paysUpdated(p: paysOrigine) {
    if (this.ajout) {
      this.recetteService.ajouterpaysOrigine(p);
    } else {
      this.recetteService.updatepaysOrigine(p);
    }
    this.chargerPays();
    this.updatedPays = { idpaysOrigine: 0, nompaysOrigine: '' };
    this.ajout = true;
  }

  updatePays(p: paysOrigine) {
    this.updatedPays = { ...p };   // copie, pour ne pas modifier la liste en direct
    this.ajout = false;
  }
}