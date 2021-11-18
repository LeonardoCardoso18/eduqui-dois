import { Component, OnInit,  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  onMaterias(form: NgForm){
    console.log(form.value);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
