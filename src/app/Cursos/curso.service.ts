import { Injectable } from "@angular/core";
import { Curso } from "./curso";

@Injectable({
  providedIn: 'root'
})
export class CursoService{

  retrieveAll(): Curso[]{
    return CURSOS;
  }

}


var CURSOS: Curso[] = [
  {
      id: 1,
      nome: 'Angular: CLI',
      dataLancamento: 'November 2, 2019',
      descricao: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
      duracao: 120,
      codigo: 'XLF-1212',
      avaliacao: 3,
      preco: 12.99,
      imagemUrl: '/assets/imagens/cli.png',
      opcao: '',
  },
  {
      id: 2,
      nome: 'Angular: Forms',
      dataLancamento: 'November 4, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
      duracao: 80,
      codigo: 'DWQ-3412',
      avaliacao: 3.5,
      preco: 24.99,
      imagemUrl: '/assets/imagens/forms.png',
      opcao: '',
  },
  {
      id: 3,
      nome: 'Angular: HTTP',
      dataLancamento: 'November 8, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
      duracao: 80,
      codigo: 'QPL-0913',
      avaliacao: 4.0,
      preco: 36.99,
      imagemUrl: '/assets/imagens/http.png',
      opcao: '',
  },
  {
      id: 4,
      nome: 'Angular: Router',
      dataLancamento: 'November 16, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
      duracao: 80,
      codigo: 'OHP-1095',
      avaliacao: 4.5,
      preco: 46.99,
      imagemUrl: '/assets/imagens/router.png',
      opcao: '',
  },
  {
      id: 5,
      nome: 'Angular: Animations',
      dataLancamento: 'November 25, 2019',
      descricao: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
      duracao: 80,
      codigo: 'PWY-9381',
      avaliacao: 5,
      preco: 56.99,
      imagemUrl: '/assets/imagens/animations.png',
      opcao: '',
  }
];
