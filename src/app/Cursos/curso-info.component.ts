import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from './curso';

@Component({
  templateUrl: './curso-info.component.html'
})
export class CursoInfoComponent implements OnInit {

  curso!: Curso;

  constructor(private activatedRoute: ActivatedRoute,
              private cursoService : CursoService) {

  }

  ngOnInit(): void {
    let id  = this.activatedRoute.snapshot.paramMap.get('id');

    if(id != null ){
      this.curso = this.cursoService.retrieveById(+id);
    }

  }

  save():void{
    this.cursoService.save(this.curso);
  }

}
