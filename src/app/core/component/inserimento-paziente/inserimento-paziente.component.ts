import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IPaziente } from '../../service/models/IPaziente';
import { CoreHttpService } from '../../service/core-http/core-http.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inserimento-paziente',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './inserimento-paziente.component.html',
  styleUrl: './inserimento-paziente.component.css'
})
export class InserimentoPazienteComponent {
  
  inserimentoPazienti : FormGroup
  
  constructor(private coreHttp : CoreHttpService, private router : RouterLink) {
    this.inserimentoPazienti = new FormGroup({
      codicePaziente : new FormControl(""),
      nome : new FormControl(""),
      cognonome : new FormControl(""),
      dataNascita : new FormControl(""),
      medico : new FormControl(""),
      codiceColore : new FormControl(""),
      arrivo : new FormControl(""),
      stato : new FormControl("")
    })
  }

  inserisciPaziente() {

    const pz : IPaziente = this.inserimentoPazienti.value as IPaziente
    
    this.coreHttp.post("/createPaziente", pz). subscribe((res) => {
      console.log(res)
    })


  }
}

