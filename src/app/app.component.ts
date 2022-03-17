import { Component, EventEmitter, Output, Input} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: string [] = [];
  tarefa: string = '';

 
  emitirEvento($event: any){
   console.log('evento e', $event)
   this.items.push(this.tarefa)
   localStorage.setItem('items', JSON.stringify(this.items))
 }
 
 ngOnInit() {
  let storage = localStorage.getItem('items')
  let arr = JSON.parse( storage || '[]')
  this.items = arr      

}


 deletarTarefas(item:string){
   this.items.splice(this.items.indexOf(item),1)
   localStorage.setItem('items', JSON.stringify(this.items))
 }



 clearall(): void{
  this.items = []
   localStorage.clear()
}


}
