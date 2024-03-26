import { Component } from '@angular/core';
import { IPaziente } from '../../service/models/IPaziente';
import { CoreHttpService } from '../../service/core-http/core-http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabella-pazienti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabella-pazienti.component.html',
  styleUrl: './tabella-pazienti.component.css'
})
export class TabellaPazientiComponent {

  constructor(private coreHttp: CoreHttpService) { }





  listaPazienti: IPaziente[] = []

  ngOnInit() {
    this.coreHttp.get("/getAllPazienti").subscribe((data: IPaziente[]) => {
      this.listaPazienti = data
      console.table(data)
    })
  }

  public modificaPaziente(paziente: IPaziente) {
    this.coreHttp.put("/updatePaziente/" + paziente.id, paziente).subscribe((data: IPaziente) => {
      console.log(data)
    })
  }

  public dimettiPaziente(paziente: IPaziente) {
    this.coreHttp.delete("/deletePaziente/" + paziente.id).subscribe((data) => {
      console.log(data)
    })
  }
}

