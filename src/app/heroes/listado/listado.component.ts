import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent {

  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado:string = '';
  borrarHeroe(): void {
    // this.heroes.pop();
    // this.heroes.splice(0,1);
    // this.heroes = this.heroes.filter(heroe => heroe != 'Capitán América');
    this.heroeBorrado = this.heroes?.shift()||'';
  }

}
