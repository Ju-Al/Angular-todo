import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-todo-dialog',
  templateUrl: './delete-todo-dialog.component.html',
  styleUrls: ['./delete-todo-dialog.component.scss']
})
export class DeleteTodoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteTodoDialogComponent>, @Inject(MAT_DIALOG_DATA) public todoId: number) { }

  ngOnInit(): void {
  }

}
