import { Injectable } from '@angular/core';
import { Recette } from '../models/recette.model';
import { paysOrigine } from '../models/paysOrigine.model';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  recettes: Recette[];
  recette!: Recette;
  paysOrigine: paysOrigine[];

  constructor() {
    this.paysOrigine = [
      { idpaysOrigine: 1, nompaysOrigine: 'tunisie' },
      { idpaysOrigine: 2, nompaysOrigine: 'italie' },
      { idpaysOrigine: 3, nompaysOrigine: 'france' }
    ];

    this.recettes = [
      {
        idRecette: 1,
        nomRecette: 'Ojja tunisienne',
        tempsPreparation: 25,
        difficulte: 'Facile',
        dateAjout: new Date('2026-10-01'),
        paysOrigine: this.paysOrigine[0]
      },
      {
        idRecette: 2,
        nomRecette: 'Salade au thon',
        tempsPreparation: 15,
        difficulte: 'Facile',
        dateAjout: new Date('2026-10-02'),
        paysOrigine: this.paysOrigine[1]
      },
      {
        idRecette: 3,
        nomRecette: 'Couscous aux légumes',
        tempsPreparation: 60,
        difficulte: 'Moyenne',
        dateAjout: new Date('2026-10-03'),
        paysOrigine: this.paysOrigine[0]
      }
    ];
  }

  listeRecettes(): Recette[] {
    return this.recettes;
  }

  ajouterRecette(recette: Recette): void {
    this.recettes.push(recette);
  }

  supprimerRecette(recette: Recette): void {
    const index = this.recettes.indexOf(recette);

    if (index > -1) {
      this.recettes.splice(index, 1);
    }
  }

  consulterRecette(id: number): Recette {
    return this.recettes.find(r => r.idRecette == id)!;
  }

  listepaysOrigine(): paysOrigine[] {
    return this.paysOrigine;
  }

  consulterpaysOrigine(id: number): paysOrigine {
    return this.paysOrigine.find(
      p => p.idpaysOrigine == id
    )!;
  }
    rechercherParPaysOrigine(idPays: number): Recette[] {
    return this.recettes.filter(r => r.paysOrigine.idpaysOrigine == idPays);
  }
    rechercherParNom(nom: string): Recette[] {
    return this.recettes.filter(r =>
      r.nomRecette.toLowerCase().includes(nom.toLowerCase())
    );
  }

  updateRecette(recette: Recette): void {
    const index = this.recettes.findIndex(
      r => r.idRecette === recette.idRecette
    );

    if (index > -1) {
      this.recettes[index] = recette;
    }
  }
    ajouterpaysOrigine(p: paysOrigine): void {
    const maxId = Math.max(0, ...this.paysOrigine.map(x => x.idpaysOrigine));
    this.paysOrigine.push({ idpaysOrigine: maxId + 1, nompaysOrigine: p.nompaysOrigine });
  }

  updatepaysOrigine(p: paysOrigine): void {
    const existant = this.paysOrigine.find(x => x.idpaysOrigine === p.idpaysOrigine);
    if (existant) {
      existant.nompaysOrigine = p.nompaysOrigine;
    }
  }
  
}
