import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LugarPage } from '../lugar/lugar';
import { LugaresService } from './../../services/lugares.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lugares: any = [];
  constructor(public navCtrl: NavController, public lugaresService: LugaresService) {
    // Cada vez que hay un cambio en la BD se escucha este evento
    this.lugaresService.getLugares().valueChanges()
    .subscribe((lugaresFB) => {
          this.lugares = lugaresFB;
        })        
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
  deleteLugar(lugar) {
    if(confirm('Seguro que desea borrar este lugar?')) {
      this.lugaresService.deletePlace(lugar)
      .then( ()=> {
        alert('Lugar eliminado correctamente');
      });
    }    
  }
}
