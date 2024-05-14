import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent {

  public toDos: ToDo[] = [];

  constructor(private toDoService: ToDoService) { }

  /*public ngOnInit(): void {
    this.getTodos();
  }

  public getTodos(): ToDo[] {
    return this.toDoService.getTodos()
    .subscribe(toDos => this.toDos = toDos);
  }

  public getTodo(id: string) {
    return this.getTodos().find(hero => hero.description === id) || {} as ToDo;
  }


  public addToDo(description: string){
    const newId = Date.now();
    this.toDos.push({ id: newId, description: description, dueDate: new Date(), completed: false});
  }

  public updateTodo(id: number, description: string, doneDate?: Date): void {
    const index = this.toDos.findIndex(t => t.id === id);
    if (index >= 0) {
      this.toDos[index].description = description;
      this.toDos[index].dueDate = new Date();
    }
  }

  public deleteTodo(id: number): void {
    const index = this.toDos.findIndex(t => t.id === id);
    if (index >= 0) {
      this.toDos.splice(index, 1);
    }
  }

  public toggleDoneStateById(id: number): void {
    const index = this.toDos.findIndex(t => t.id === id);
    if (index >= 0) {
      if (this.toDos[index].doneDate) {
        this.toDos[index].doneDate = undefined;
      } else {
        this.toDos[index].doneDate = new Date();
      }
    }
  }*/

}
