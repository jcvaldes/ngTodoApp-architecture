import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  template: `
    <p>
     <input type="text" />
     <button>Guardar</button>
    </p>
  `,
  styles: [
  ]
})
export class TodoAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
