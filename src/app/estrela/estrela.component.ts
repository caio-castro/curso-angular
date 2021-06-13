import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-estrela',
  templateUrl: './estrela.component.html',
  styleUrls: ['./estrela.component.css']
})
export class EstrelaCompoent implements OnChanges{

@Input()
avaliacao: number = 0;

tamanhoEstrela!: number;


  ngOnChanges(){
   this.tamanhoEstrela = this.avaliacao * 94/5;
  }

}
