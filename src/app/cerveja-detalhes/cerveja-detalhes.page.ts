import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage {
  nome; 
  descricao;

  constructor(private route: ActivatedRoute) {
    console.log("EXECUTOU O CONSTRUTOR")

  }
mostrar(){
  const nomeCerveja = this.route.snapshot.params.id
  const cervejaReal = localStorage.getItem(nomeCerveja)
  const cervejaObjeto = JSON.parse(cervejaReal)
  this.nome = cervejaObjeto.nome
  this.descricao = cervejaObjeto.descricao

}
  ionViewDidEnter() {
    this.mostrar()
  }

}
