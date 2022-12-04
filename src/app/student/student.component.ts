import { Component,OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  @Input() reviews:string ="";
  @Output() student:EventEmitter<string> = new EventEmitter<string>();

  onClick(){
    this.student.emit("hello sunday")
  }
  // constructor() { }

  // ngOnInit() {

  // }
}
