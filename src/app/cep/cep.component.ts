import { Component } from '@angular/core';
import { CepService } from './cep.service';

@Component({
  selector: 'app-cep',
  standalone: true,
  imports: [],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css'
})
export class CepComponent {

  constructor(
    private cepService: CepService
  ){

  }

  public buscarCEP(){

    this.cepService.consultaCep().then(r => {
      let retorno: any = r;
      console.log(r);
      alert(retorno.logradouro);
    });

  }

}
