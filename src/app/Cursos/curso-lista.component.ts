import { CursoService } from './curso.service';
import { Component, OnInit } from "@angular/core";
import { Curso } from "./curso";

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListComponent implements OnInit {

  cursos: Curso[] = [];
  filtroCursos: Curso[] = [];

  filtro!: string;

  constructor(
    private CursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.cursos = this.CursoService.retrieveAll();
    this.filtroCursos = this.cursos;
  }

  set filter(texto: string) {
    this.filtro = texto;

    this.filtroCursos = this.cursos.filter(curso => curso.nome.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) > -1);

  }

  get filter() {
    return this.filtro;
  }

}
