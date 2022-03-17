import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent{

  
  

@Input()
mostrar: number = 0

@Output()
apagar: EventEmitter <any> = new EventEmitter <any>()

  clearall(): void{
    this.apagar.emit()
    
  }
}
