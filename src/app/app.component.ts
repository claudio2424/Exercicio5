import { Component, EventEmitter, Output, Input} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:string [] = [];
  tarefa: string = "";

 emitirEvento(): void{
   this.items.push(this.tarefa)
 }
 

 addTarefa(){
   this.items.push(this.tarefa)
 }
 
 deletarTarefas(item:string){
   this.items.splice(this.items.indexOf(item),1)
 }

 hoverIt:boolean;
  constructor(){
      this.hoverIt = false;
  }

  @Input()
  toDoItem:string = ""

  @Output() 
  deletev: EventEmitter<any> = new EventEmitter<any>()

  deletef(){
    this.deletev.emit(this.toDoItem)
  }
}





