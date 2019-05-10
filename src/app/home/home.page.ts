import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) {
    this.cervejas = [];
  }

  cervejas;

  ngOnInit() { }

  excluir(nome) {
    localStorage.removeItem(nome)
    this.listar()
  }
  detalhes(nome) {
    this.router.navigate(["/cerveja-detalhes", nome])
  }
  listar() {
    this.cervejas = []

    const tamanhoDoBanco = localStorage.length

    for (let index = 0; index < tamanhoDoBanco; index++) {
      const chave = localStorage.key(index)
      const cervejas = localStorage.getItem(chave)

      this.cervejas.push(JSON.parse(cervejas));


    }
  }

  ionViewDidEnter() {
    this.listar()
  }
}
