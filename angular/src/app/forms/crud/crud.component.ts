import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validacoes } from './validacoes';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  frm: FormGroup;

  constructor(private fb: FormBuilder, private service: CrudService) { }

  ngOnInit() {
    this.configureForms();
  }

  private configureForms(): void {
    this.frm = this.fb.group(
      {
        nome: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100)
          ]),
        ],
        email: [
          '',
          Validators.compose([Validators.email]),
        ],
        cpf: [
          '',
          Validators.compose([Validators.required, Validacoes.ValidaCpf]),
        ],
        senha: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
        ],
        confirmarSenha: [
          '',
          Validators.compose([Validators.required])
        ],
        nascimento: [
          '',
          Validators.compose([Validators.required, Validacoes.MaiorQue18Anos]),
        ]
      },
      {
        validator: Validacoes.SenhasCombinam
      }
    );
  }

  send() {
    console.log(this.frm);
    const dadosFormulario = this.frm.value;
    console.log(dadosFormulario);
    this.service.sendUser(dadosFormulario);

    // const usuario = new Usuario(
    //   dadosFormulario.nome,
    //   dadosFormulario.email,
    //   dadosFormulario.cpf,
    //   dadosFormulario.nascimento,
    //   dadosFormulario.senha
    // );

    alert(`O usuário ${this.nome.value} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(dadosFormulario)}`);

    // this.frm.reset();
  }

  // Propriedades do formulário que vamos utilizar para obter os erros
  get nome() {
    return this.frm.get('nome');
  }

  get email() {
    return this.frm.get('email');
  }

  get cpf() {
    return this.frm.get('cpf');
  }

  get nascimento() {
    return this.frm.get('nascimento');
  }

  get senha() {
    return this.frm.get('senha');
  }

  get confirmarSenha() {
    return this.frm.get('confirmarSenha');
  }

}
