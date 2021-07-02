import { TransferenciasService } from './../services/transferencias.service';
import { Component, Output, EventEmitter } from "@angular/core";
import { Transferencia } from '../services/models/transferencia.model';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();
  valor: number;
  destino: number;

  constructor(private service: TransferenciasService){}

  transferir() {
    console.log("Solicitada nova transferencia");

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(r => {
      console.log(r);
      this.limparCampos();
    })

    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
