import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any = [
    {nombre: 'Lugar 1', direccion: 'Direccion 1', categoria: 'Categoría 1'},
    {nombre: 'Lugar 2', direccion: 'Direccion 2', categoria: 'Categoría 2'},
    {nombre: 'Lugar 3', direccion: 'Direccion 3', categoria: 'Categoría 3'}
  ];
  constructor(public navCtrl: NavController) {

  }

  navegarALugar(name){
    this.navCtrl.push(LugarPage, {nombre: name}); // Agrega una vista al stack de navegación
  }
  irAVistaDeDetalle() {
    this.navCtrl.push(LugarPage, {lugar: {}})
  }
  irAVistaDeDetalleExistente(lugar) {
    this.navCtrl.push(LugarPage, {lugar: lugar});
  }
}
