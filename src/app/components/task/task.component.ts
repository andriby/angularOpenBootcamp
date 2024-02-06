import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task : ITask = {
    title: 'Tarea',
    description: 'Tarea',
    completed: false,
    level: Levels.Blocking
  }

  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>() 

  deleteTask(){
    this.delete.emit(this.task); //Notificamos al componente superior la tarea a eliminar
  }

  constructor() { }

  ngOnInit(): void {
  }

}
