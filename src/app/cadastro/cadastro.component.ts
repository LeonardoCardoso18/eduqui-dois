import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastroForm !: FormGroup;
  router: any;

  constructor(private formBuilder : FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nomeCompleto:[''],
      email:[''],
      senha:[''],
      telefone:['']
    })
  }

    Cadastro(){
      this.http.post<any>("http://localhost:3000/usuariosCadastrados",this.cadastroForm.value).subscribe(res => {
        alert("Cadastrado com sucesso");
        this.cadastroForm.reset();
        this.router.navigate(['/login']);
      }, err => {
        alert("Algo deu errado");
      })
    }

}
