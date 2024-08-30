import { Component } from '@angular/core';
import { CepService } from './cep.service';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cep',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css'
})
export class CepComponent {

  teste: any = 'ola mundo';

  meutexto = 'ola, como voce vai, aqui vai o meu texto';

  campo1 : any;
  constructor(
    private cepService: CepService
  ){
    this.campo1 = new FormControl('campo1');
  }

  public buscarCEP(){

    this.cepService.consultaCep().then(r => {
      let retorno: any = r;
      console.log(r);
      alert(retorno.logradouro);
    });

    

  }

}
