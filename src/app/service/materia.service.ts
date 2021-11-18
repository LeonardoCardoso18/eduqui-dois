import { Injectable } from '@angular/core';
import {Conteudo} from '../models/conteudo.model'

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  private conteudos: Conteudo[] = []

  getConteudo(): Conteudo[] {
    return [...this.conteudos]
  }

  constructor() { }

  adicionarConteudo(materia:string, titulo: string, conteudo: string){
    const materias: Conteudo = {
      materia: materia,
      titulo: titulo,
      conteudo: conteudo,
    };
    this.conteudos.push(materias);
  }


}
