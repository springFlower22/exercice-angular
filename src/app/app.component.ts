import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercice3';

  nom: string = "";
  auteur: string = "";
  prix: number = 0;

  livres = [
    {
      nom: "Mohamed Ben Ghachem",
      auteur: "salarié",
      prix: 50000
    },
    {
      nom: "Alfred",
      auteur: "autonome",
      prix: 60000
    }
  ];

  ajouter(){
    const ligne = {
      nom: this.nom,
      auteur: this.auteur,
      prix: this.prix
    };
    this.livres.push(ligne);
  }
}
