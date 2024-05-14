import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute } from '@angular/router';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from '../to-do';




@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit{
  public toDo: ToDo = {} as ToDo;

  @Input() todo: ToDo = {} as ToDo;
  @Output() todoChanged: EventEmitter<MatCheckboxChange> = new EventEmitter()
  @Output() infoClicked: EventEmitter<void> = new EventEmitter()

  constructor(private toDoService: ToDoService) {
  }

  ngOnInit(): void {
    console.log('ng',this.todo);
  }

  onTodoChanged(event: MatCheckboxChange) {
    //console.log(event);
    this.todoChanged.emit();
  }

  onInfoClicked(): void {
    this.infoClicked.emit();
  }
}
