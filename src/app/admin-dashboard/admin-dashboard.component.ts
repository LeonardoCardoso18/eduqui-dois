import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import {Conteudo} from '../models/conteudo.model'

interface Materia {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  videos: boolean = false
  usuarios: boolean = false;
  materias: boolean = false;
  selectedValue: string | undefined;


  
  materia: Materia[] = [
    {value: 'Matemática-0', viewValue: 'Matemática' },
    {value: 'Português', viewValue: 'Português'},
    {value: 'Artes', viewValue: 'Artes' },
    {value: 'Inglês', viewValue: 'Inglês' },
    {value: 'Espanhol', viewValue: 'Espanhol' },
    {value: 'Geografia', viewValue: 'Geografia' },
    {value: 'História', viewValue: 'História' },
    {value: 'Quimica', viewValue: 'Química' },
    {value: 'Física', viewValue: 'Física' },
    {value: 'Literatura', viewValue: 'Literatura' },
    {value: 'Biologia', viewValue: 'Biologia' },
  ];

  onMaterias(form: NgForm){
    if(!form.invalid){
      return;
    }
    
    
  }

  adicionarMateria(){
    this.usuarios = false,
    this.videos = false,
    this.materias = true;
  }

  onUsuarios(){
    this.materias = false,
    this.videos = false,
    this.usuarios = true;
  }

  onVideos(){
    this.materias = false,
    this.usuarios = false,
    this.videos = true;
  }

  
  

  constructor() { }

  ngOnInit(): void {
  }

}
