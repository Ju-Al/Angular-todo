import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, map, Observable, catchError, of, observable, throwError } from 'rxjs';
import { ToDo } from '../to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private _url: string = "/assets/data/todos.json";

  constructor(private http: HttpClient) { }

  public getTodos(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>(this._url);
  }

  public getTodo(id: number): Observable<ToDo>{
    return this.getTodos()
    .pipe(
     map(todos => todos.find(todo => todo.id === id)|| {} as ToDo),
    )
  }

  public addToDo(description: string): Observable<ToDo>{
    const newId = Date.now();
    return this.http.post<ToDo>(this._url, { id: newId, description: description, dueDate: new Date(), completed: false} as ToDo);
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
  }
  private errorHandler(error: HttpErrorResponse){
    return Observable.throw
  }
}
