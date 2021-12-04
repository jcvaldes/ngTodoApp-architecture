import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <div>
      <app-todo-list></app-todo-list>
      <app-todo-add></app-todo-add>
    </div>
  `,
  styles: [
  ]
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
