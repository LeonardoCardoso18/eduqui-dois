import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-matematica',
  templateUrl: './matematica.component.html',
  styleUrls: ['./matematica.component.css']
})


export class MatematicaComponent implements OnInit {

  conteudos = [
    {
      titulo: 'Adição',
      conteudo: 'A adição é a operação matemática mais básica e pode ser feita com qualquer tipo de número. Porém, em um primeiro momento, são usados apenas números inteiros e maiores que zero. A seguir, discutiremos a técnica usada para calcular adições.'
    },
    {
      titulo: 'Subtração',
      conteudo: ' A subtração é uma das quatro operações matemáticas básicas e é inversa à adição, pois diminui os valores dos números que estão sendo subtraídos.'
    }
  ]
  

  constructor() { }
  
  ngOnInit() {
   
  }
  
  
 

}
