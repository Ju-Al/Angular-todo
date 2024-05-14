export interface ToDo {
  id: number;
  description: string;
  dueDate: Date;
  doneDate?: Date;
  completed?: boolean;
}
