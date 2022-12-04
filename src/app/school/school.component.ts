import { Component } from '@angular/core';
import { StudentComponent } from '../student/student.component';


@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent {
  schoolName: any[] = [{ school : 'kasetsart'}]
  studentName: string =''



getName(message: string){
    this.studentName = message;

  }
}
