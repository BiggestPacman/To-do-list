import { Component } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTaskName: string = '';
  taskIdCounter: number = 1;
  showDate = false;
  selectedDate!: string;

  addTask() {
    if (this.newTaskName.trim()) {
      const newTask: Task = {
        id: this.taskIdCounter++,
        name: this.newTaskName.trim(),
        completed: false,
        isEditing: false,
        dueDate: this.selectedDate,
        date: new Date()
      };
      this.tasks.push(newTask);
      this.newTaskName = '';
      this.selectedDate = '';
    }
  }

  editTask(task: Task) {
    task.isEditing = true;
  }

  saveTask(task: Task) {
    task.isEditing = false;
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }

  isDateShow(){
    this.showDate = !this.showDate
  }

  confirmDeleteAll() {
    if (confirm("Are you sure you want to delete all tasks?")) {
      this.deleteAllTasks();
    }
  }

  // Method to delete all tasks
  deleteAllTasks() {
    this.tasks = [];
  }
  
}

