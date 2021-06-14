import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './curso-info.component.html'
})
export class CursoInfoComponent implements OnInit {

  cursoId!: number

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id  = this.activatedRoute.snapshot.paramMap.get('id');

    if(id != null ){
      this.cursoId = +id;
    }

  }

}
