import { DatePipe, WeekDay } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from '../to-do';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { DeleteTodoDialogComponent } from '../delete-todo-dialog/delete-todo-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public toDoDescription: string = '';
  public toDo: ToDo | undefined;
  public due: string = '';
  public done?: string = '';
  public options: Intl.DateTimeFormatOptions = {
    //weekday: 'long',
    //year: 'numeric',
    //month: 'long',
    //day: 'numeric',
    dateStyle: 'full',
    timeStyle: 'medium'
  };


  constructor(private toDoService: ToDoService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) { }


  ngOnInit(){
    let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.toDoService.getTodo(id).subscribe((todo) => {
      this.toDo = todo;
      if(this.toDo?.dueDate) {
        this.due = this.toDo.dueDate.toLocaleString('de-DE', this.options);
      }
      if(this.toDo?.doneDate){
        this.done = this.toDo.doneDate.toLocaleDateString('de-DE', {dateStyle: 'full'});
      }
    });
  }
  onDelete(todo: number){
    let dialogRef = this.dialog.open(DeleteTodoDialogComponent, {
      data: todo
    });
    dialogRef.afterClosed().subscribe((result) =>  {
      if(result){
        console.log('deleteres',result);
        this.toDoService.deleteTodo(todo);
        this.router.navigate(['/']);
      } else{
        console.log(result);
      }
    });
  }

  onEdit(todo: ToDo){
    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: "300px",
      height: "220px",
      data: todo

    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('result',result);
      if(result)
        if(todo.doneDate){
          this.toDoService.updateTodo(todo.id, result, todo.doneDate);
        } else {
          this.toDoService.updateTodo(todo.id, result);
        }

    });
  }
  goBack(){
    this.router.navigate(['/']);
  }

}
