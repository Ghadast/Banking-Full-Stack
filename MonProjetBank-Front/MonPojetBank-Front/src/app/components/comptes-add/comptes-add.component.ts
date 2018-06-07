import { Component, OnInit } from '@angular/core';
import { Compte } from '../../domain/compte';
import { ComptesService } from '../../services/comptes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptes-add',
  templateUrl: './comptes-add.component.html',
  styleUrls: ['./comptes-add.component.css']
})
export class ComptesAddComponent implements OnInit {
compte: Compte={
  'numero': '',
  'proprietaire':'',
  'solde':0

};
//injecter le service ComptesService dans le constructeur
  constructor(private _service: ComptesService,private _router: Router) { }
  ngOnInit() {
  }
  OuvrirCompte()
  {
    this._service.addCompte(this.compte).subscribe(
        //après le succès on navigue vers la page liste
        resp => this._router.navigate(['/list']),
        err =>console.log(`ATTENTION: une erreur ${err} lors de l'ouverture du compte !` )
    );



  }

}
