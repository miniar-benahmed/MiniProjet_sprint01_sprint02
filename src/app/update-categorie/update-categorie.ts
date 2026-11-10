import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { paysOrigine } from '../models/paysOrigine.model';

@Component({
  selector: 'app-update-categorie',
  imports: [FormsModule],
  templateUrl: './update-categorie.html',
  styles: ``
})
export class UpdateCategorie implements OnInit {

  @Input() categorie!: paysOrigine;
  @Input() ajout!: boolean;
  @Output() categorieUpdated = new EventEmitter<paysOrigine>();
 ngOnInit(): void {
    console.log('ngOnInit du composant UpdateCategorie', this.categorie);
  }

  saveCategorie() {
    this.categorieUpdated.emit({ ...this.categorie });   // on envoie une copie
  }
}