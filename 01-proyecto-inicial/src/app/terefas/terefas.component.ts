import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-terefas',
  standalone: true,
  imports: [],
  templateUrl: './terefas.component.html',
  styleUrl: './terefas.component.css'
})
export class TerefasComponent {
  @Input({required: true}) nome?: string;
}
