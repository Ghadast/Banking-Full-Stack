import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Compte } from '../../domain/compte';
import { ComptesService } from '../../services/comptes.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-compte-delete',
  templateUrl: './compte-delete.component.html',
  styleUrls: ['./compte-delete.component.css']
})
export class CompteDeleteComponent implements OnInit {

  num_cpt: String;
  compte: Compte={
    'numero': '',
    'proprietaire':'',
    'solde':0
  };
  constructor(private _router: ActivatedRoute,private _service: ComptesService,private _route: Router) { }

  ngOnInit() {
    this._router.params.subscribe(
        PARAMETERS=>{this.num_cpt=PARAMETERS['id'];
        this.getCompteById(this.num_cpt);
      },
        error=>console.log(`ATTENTION - Erreur lors de la navigation vers Delete !`)
    );
  }
  getCompteById(id){
      this._service.getCompteById(this.num_cpt).subscribe(
      resp=> this.compte =resp
    );
  }
  annulerDelete(){
    this._route.navigate(['/list']);
    console.log("ANNULATION DU DELETE - RETOUR VERS LISTE")
  }
  confirmDelete(){

    this._service.deleteCompteById(this.num_cpt).subscribe(
      res=>{ this._route.navigate(['/list']);
      console.log("Confirmation Delete et retour à la liste"); },
      error=>console.log(`ATTENTION - Erreur lors de la uppression du compte !   ${error} ` )
    );

  }

}
