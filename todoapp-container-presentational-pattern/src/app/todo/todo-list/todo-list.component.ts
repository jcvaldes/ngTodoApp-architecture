import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <ol>
      <li>Hola</li>
    </ol>
  `,
  styles: [],
})
export class TodoListComponent implements OnInit {
  tasks = ['Ir al super', 'pasear al perro'];
  constructor() {}

  ngOnInit(): void {}
}
