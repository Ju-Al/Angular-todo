import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit {
  public todo: ToDo[] = [];
  public showValidationErrors: boolean = false;
  public toDoDescr = '';

  constructor(private toDoService: ToDoService, private router: Router) { }

  ngOnInit(): void {
    this.toDoService.getTodos()
      .subscribe(data => this.todo = data);
  }

  onFormSubmit(form: NgForm) {
    if(form.invalid){
      this.showValidationErrors = true;
    } else {
      this.toDoService.addToDo(form.value.text);
      this.showValidationErrors = false;
      form.reset();
    }
  }
  toggleCompleted(todo: ToDo) {
    todo.completed = !todo.completed;
    this.toDoService.toggleDoneStateById(todo.id);
  }

  navigateToDetails(todo: ToDo){
    if(todo !== undefined)
      this.router.navigate(['/details', todo.id]);
  }
}
